import './index.css';

/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import settingsIcon from '../../assets/images/settingsIcon.svg';
import userAvatar from '../../assets/images/userAvatar.jpg';
import { navbarLinks } from '../../shared';

const NavigationMenu = () => {
  return (
    <nav className='shadow position-fixed pt-5'>
      <div className='container-fluid d-flex flex-column ps-3 pe-3'>
        <div className='mb-3'>
          <div className='position-relative'>
            <img src={userAvatar} alt='User Avatar' className='rounded-circle shadow avatar' />
            <span id='userSettings'>
              <img src={settingsIcon} alt='settings icon' />
            </span>
          </div>
        </div>
        <div>
          <ul className='navbar-nav flex-column'>
            {navbarLinks.map((link, i) => (
              <li key={i} className='nav-item'>
                <NavLink className={`nav-link ${!!link.link ? '' : ' disabled text-secondary'}`} to={link.link || '#'}>
                  {link.title}
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
