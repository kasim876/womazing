import {observer} from 'mobx-react-lite';
import {Link} from 'react-router-dom';

import {BASKET_ROUTE} from '../../../utils/consts';

import BasketStore from '../../../store/BasketStore';

import {ReactComponent as PhoneIcon} from '../../../assets/images/svg/phone.svg';
import {ReactComponent as BasketIcon} from '../../../assets/images/svg/bag.svg';

import Logo from '../../shared/logo/Logo';
import Phone from '../../shared/phone/Phone';
import Nav from '../../shared/nav/Nav';

import styles from './Header.module.scss';

const Header = observer(() => {
  return (
    <header className={`js-header ${styles.root}`}>
      <div className={`container ${styles.container}`}>
        <Logo />
        <Nav />
        <div className={styles.contacts}>
          <button className={`btn-reset ${styles['contacts-btn']}`} aria-label="Заказать обратный звонок">
            <PhoneIcon className={styles['contacts-icon']} />
          </button>
          <Phone />
        </div>
        <Link to={BASKET_ROUTE} className={styles['basket-wrap']} title="Открыть корзину">
          <BasketIcon className={styles.basket} />
          <input
            type="text"
            className={`input-reset ${styles['basket-count']}`}
            value={BasketStore.products.length}
            tabIndex={-1}
            readOnly
          />
        </Link>
      </div>
    </header>
  );
});

export default Header;