import {Link} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

import {BASKET_ROUTE} from '../../utils/consts';

import basket from '../../store/BasketStore';

import {ReactComponent as PhoneIcon} from '../../assets/images/svg/phone.svg';
import {ReactComponent as BasketIcon} from '../../assets/images/svg/bag.svg';
import Logo from '../Logo/Logo';
import Nav from '../Navigation/Nav';
import Phone from '../Phone/Phone';

import './Header.scss';

const Header = observer(() => {
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
        <Link to={BASKET_ROUTE} className="header__basket-wrap" title="Открыть корзину">
          <BasketIcon className="header__basket" />
          <input type="text" className="input-reset header__basket-count" value={basket.basket.length} readOnly />
        </Link>
      </div>
    </header>
  );
});

export default Header;