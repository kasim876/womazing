import {NavLink} from 'react-router-dom';

import {HOME_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE, SHOP_ROUTE} from '../../../../utils/consts';

import styles from './NavList.module.scss';

const NavList = ({className, ...props}) => {
  const ACTIVE_CLASS_NAME = styles['current-link'];
  
  return (
    <ul className={`${styles.root}${className ? ` ${className}` : ''}`} {...props}>
      <li className={styles.item}>
        <NavLink
          to={HOME_ROUTE}
          className={({isActive}) => 'animation-link ' + styles.link + (isActive && ' ' + ACTIVE_CLASS_NAME)}
        >
          Главная
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          to={SHOP_ROUTE}
          className={({isActive}) => 'animation-link ' + styles.link + (isActive && ' ' + ACTIVE_CLASS_NAME)}
        >
          Магазин
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          to={ABOUT_ROUTE}
          className={({isActive}) => 'animation-link ' + styles.link + (isActive && ' ' + ACTIVE_CLASS_NAME)}
        >
          О бренде
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          to={CONTACTS_ROUTE}
          className={({isActive}) => 'animation-link ' + styles.link + (isActive && ' ' + ACTIVE_CLASS_NAME)}
        >
          Контакты
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;