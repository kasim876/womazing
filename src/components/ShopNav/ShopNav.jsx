import {NavLink} from 'react-router-dom';

import data from './data';

import './ShopNav.scss';

const ShopNav = () => {
  const setClasses = ({isActive}) => {
    const ACTIVE_CLASS_NAME = 'shop-nav__link--current';

    const isActiveClass = isActive ? ' ' + ACTIVE_CLASS_NAME : '';

    return "text-md shop-nav__link" + isActiveClass;
  };
  
  const list = data.map(({link, name}) => {
    return (
      <li className="shop-nav__item" key={link}>
        <NavLink to={link} className={setClasses} data-category={name} end>{name}</NavLink>
      </li>
    )
  })
  
  return (
    <ul className="shop-nav">
      {list}    
    </ul>
  )
}

export default ShopNav
