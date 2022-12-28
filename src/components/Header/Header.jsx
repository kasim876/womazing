import {Link} from "react-router-dom";

import {BASKET_ROUTE} from "../../utils/consts";

import {ReactComponent as Phone} from "../../assets/images/svg/phone.svg";

import Logo from "../Logo/Logo";
import Nav from "../Navigation/Nav";

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <Nav />
        <div className="header-contacts">
          <button className="btn-reset header-contacts__btn" aria-label="Заказать обратный звонок">
            <Phone className="header-contacts__icon" />
          </button>
          <a href="tel:+74958235412" className="animation-link header-contacts__link">+7 (495) 823-54-12</a>
        </div>
        <Link to={BASKET_ROUTE} className="header__busket" title="Открыть корзину"></Link>
      </div>
    </header>
  );
};

export default Header;