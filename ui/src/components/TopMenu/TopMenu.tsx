import './index.css';

import { useEffect, useState } from 'react';
import { formatDate, formatTime } from '../../shared';

import io from 'socket.io-client';
import shieldIcon from '../../assets/icons/shieldIcon.svg';
import timeIcon from '../../assets/icons/timeIcon.svg';

const socket = io('http://localhost:4000');

const TopMenu = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    socket.on('activeSessions', (count: number) => {
      setActiveSessions(count);
    });

    return () => {
      clearInterval(timer);
      socket.off('activeSessions');
    };
  }, []);

  return (
    <header className='top-menu shadow d-flex align-items-center pt-2 pb-2 pe-5 ps-5 bg-white w-100 justify-content-between'>
      <div className='ps-5'>
        <img src={shieldIcon} alt='Logo' />
        <span className='text-success fw-bold'>INVENTORY</span>
      </div>
      <div className='d-flex'>
        <div className='d-flex  align-items-center flex-column me-4'>
          <div>Today</div>
          <div>{formatDate(dateTime)}</div>
        </div>
        <img src={timeIcon} alt='Time Icon' className='mt-4 me-2' />
        <div className='mt-4'>{formatTime(dateTime)}</div>
        <div
          className={`text-center text-white shadow ms-4 ps-2 pe-2 bg-${!!activeSessions ? 'success' : 'secondary'} rounded`}>
          <div>Active sessions</div>
          <div>{activeSessions}</div>
        </div>
      </div>
    </header>
  );
};

export default TopMenu;
