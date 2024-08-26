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
    <header className='top-menu shadow d-flex align-items-center pt-2 pb-2 pe-5 ps-5 bg-white w-100 justify-content-between'>
      <div className='ps-5'>
        <img src={shieldIcon} alt='Logo' />
        <span className='text-success fw-bold'>INVENTORY</span>
      </div>
      <div className='d-flex'>
        <div className='d-flex  align-items-center flex-column me-4'>
          <div>{getDayString(dateTime)}</div>
          <div>{formatDate(dateTime)}</div>
        </div>
        <img src={timeIcon} alt='Time Icon' className='mt-4 me-2' />
        <div className='mt-4'>{formatTime(dateTime)}</div>
        <div
          className={`text-center text-white shadow ms-4 ps-2 pe-2 bg-${!!activeSessions ? 'success' : 'secondary'} rounded`}>
          {!!activeSessions ? (
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
