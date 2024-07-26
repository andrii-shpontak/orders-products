import './index.css';

import { AbsoluteRoutes } from '../../shared';
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import settingsIcon from '../../assets/images/settingsIcon.svg';
import userAvatar from '../../assets/images/userAvatar.jpg';

const NavigationMenu = () => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid d-flex flex-column '>
        <div className='mb-3'>
          <div className='position-relative'>
            <img src={userAvatar} alt='User Avatar' className='rounded-circle shadow-lg avatar' />
            <span id='userSettings'>
              <img src={settingsIcon} alt='settings icon' />
            </span>
          </div>
        </div>
        <div className='navbar-collapse' id='navbarNav'>
          {/* Need convert to the map method */}
          <ul className='navbar-nav flex-column'>
            <li className='nav-item'>
              <NavLink className='nav-link' to={AbsoluteRoutes.orders}>
                Orders
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to={AbsoluteRoutes.products}>
                Products
              </NavLink>
            </li>

            {/* Disabled links - for example */}
            <li className='nav-item'>
              <a className='nav-link disabled' href='#'>
                Groups
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled' href='#'>
                Users
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled' href='#'>
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
