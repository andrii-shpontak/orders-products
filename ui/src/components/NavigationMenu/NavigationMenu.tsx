import './index.css';

/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, useLocation } from 'react-router-dom';

import { navbarLinks } from '../../shared';
import settingsIcon from '../../assets/images/settingsIcon.svg';
import userAvatar from '../../assets/images/userAvatar.jpg';

const NavigationMenu = () => {
  const location = useLocation();

  return (
    <nav className='shadow pt-5'>
      <div className='container-main-fluid d-flex flex-column ps-3 pe-3'>
        <div className='mb-3'>
          <div className='position-relative avatar'>
            <img src={userAvatar} alt='User Avatar' className='rounded-circle shadow' />
            <span id='userSettings'>
              <img src={settingsIcon} alt='settings icon' />
            </span>
          </div>
        </div>
        <div>
          <ul className='navbar-nav flex-column'>
            {navbarLinks.map((item, i) => (
              <li key={i} className='nav-item'>
                <NavLink
                  className={`nav-link fs-5 text-center  ${!!item.link ? (location.pathname === item.link ? 'text-decoration-underline link-underline-success fs-4' : '') : 'disabled text-secondary'}`}
                  to={item.link || '#'}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
