import {NavLink} from 'react-router-dom';

import data from './data';

import styles from './ShopNav.module.scss';

const ShopNav = () => {
  const ACTIVE_CLASS_NAME = styles['current-link'];
  
  const linksList = data.map(({link, name}) => {
    return (
      <li className={styles.item} key={link}>
        <NavLink
          to={link}
          className={({isActive}) => 'text-md ' + styles.link + (isActive ? ' ' + ACTIVE_CLASS_NAME + ' js-active-link' : '')}
          data-category={name}
          end
        >
          {name}
        </NavLink>
      </li>
    );
  });
  
  return (
    <ul className={styles.root}>
      {linksList}
    </ul>
  );
};

export default ShopNav;
