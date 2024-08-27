import './index.css';

import { formatDate, formatTime, getDayString } from '../../shared';
import io, { Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';

import shieldIcon from '../../assets/icons/shieldIcon.svg';
import timeIcon from '../../assets/icons/timeIcon.svg';

const apiUrl = 'http://localhost:4000';

const TopMenu = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [activeSessions, setActiveSessions] = useState(0);

  let socket: Socket | null = null;

  const checkAndConnectSocket = async () => {
    let isSocketAvailable = false;

    await fetch(apiUrl)
      .then(() => {
        isSocketAvailable = true;
      })
      .catch(() => {});

    if (isSocketAvailable) {
      socket = io(apiUrl);
      socket.on('activeSessions', (count: number) => {
        setActiveSessions(count);
      });
    }
  };

  useEffect(() => {
    checkAndConnectSocket();

    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
      if (socket && socket.connected) socket.off('activeSessions');
    };
    // only for CDM
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className='top-menu'>
      <div className='top-menu__logo'>
        <img src={shieldIcon} alt='Logo' className='top-menu__logo-icon' />
        <span className='top-menu__logo-text'>INVENTORY</span>
      </div>
      <div className='top-menu__info'>
        <div className='top-menu__date-time'>
          <div>{getDayString(dateTime)}</div>
          <div>{formatDate(dateTime)}</div>
        </div>
        <img src={timeIcon} alt='Time Icon' className='top-menu__time-icon' />
        <div className='top-menu__time'>{formatTime(dateTime)}</div>
        <div
          className={`top-menu__session-info ${activeSessions ? 'top-menu__session-info--active' : 'top-menu__session-info--inactive'}`}>
          {activeSessions ? (
            <>
              <div>Active sessions</div>
              <div>{activeSessions}</div>
            </>
          ) : (
            <>
              <div>The server</div>
              <div>is unavailable</div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopMenu;
