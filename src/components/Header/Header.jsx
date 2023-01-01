import {Link} from 'react-router-dom';

import {BASKET_ROUTE} from '../../utils/consts';

import {ReactComponent as PhoneIcon} from '../../assets/images/svg/phone.svg';

import Logo from '../Logo/Logo';
import Nav from '../Navigation/Nav';
import Phone from '../Phone/Phone';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <Nav />
        <div className="header-contacts">
          <button className="btn-reset header-contacts__btn" aria-label="Заказать обратный звонок">
            <PhoneIcon className="header-contacts__icon" />
          </button>
          <Phone />
        </div>
        <Link to={BASKET_ROUTE} className="header__busket" title="Открыть корзину"></Link>
      </div>
    </header>
  );
};

export default Header;