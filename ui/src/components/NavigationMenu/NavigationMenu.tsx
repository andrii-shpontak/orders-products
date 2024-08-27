import './index.css';

import { NavLink, useLocation } from 'react-router-dom';

import { navbarLinks } from '../../shared';
import settingsIcon from '../../assets/icons/settingsIcon.svg';
import userAvatar from '../../assets/images/userAvatar.jpg';

const NavigationMenu = () => {
  const location = useLocation();

  return (
    <nav className='navigation-menu'>
      <div className='navigation-menu__container'>
        <div className='navigation-menu__avatar-container'>
          <div className='navigation-menu__avatar'>
            <img src={userAvatar} alt='User Avatar' className='navigation-menu__avatar-image' />
            <span className='navigation-menu__settings'>
              <img src={settingsIcon} alt='settings icon' />
            </span>
          </div>
        </div>
        <div className='navigation-menu__links'>
          <ul className='navigation-menu__list'>
            {navbarLinks.map((item, i) => (
              <li key={i} className='navigation-menu__list-item'>
                <NavLink
                  className={`navigation-menu__link ${item.link ? (location.pathname === item.link ? 'navigation-menu__link--active' : '') : 'navigation-menu__link--disabled'}`}
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
