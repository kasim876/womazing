import {NavLink} from 'react-router-dom';

import {HOME_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE, SHOP_ROUTE} from '../../utils/consts';

import './Nav.scss';

const Nav = () => {
  const ACTIVE_CLASS_NAME = ' nav__link--current';

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={HOME_ROUTE} className={({isActive}) => isActive ? `nav__link animation-link ${ACTIVE_CLASS_NAME}` : 'nav__link animation-link'}>Главная</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={SHOP_ROUTE} className={({isActive}) => isActive ? `nav__link animation-link ${ACTIVE_CLASS_NAME}` : 'nav__link animation-link'}>Магазин</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={ABOUT_ROUTE} className={({isActive}) => isActive ? `nav__link animation-link ${ACTIVE_CLASS_NAME}` : 'nav__link animation-link'}>О бренде</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={CONTACTS_ROUTE} className={({isActive}) => isActive ? `nav__link animation-link ${ACTIVE_CLASS_NAME}` : 'nav__link animation-link'}>Контакты</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;