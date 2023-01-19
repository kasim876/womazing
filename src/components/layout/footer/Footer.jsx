import {Link} from 'react-router-dom';

import {SHOP_ROUTE} from '../../../utils/consts';

import {ReactComponent as InstagramIcon} from '../../../assets/images/svg/inst.svg';
import {ReactComponent as FacebookIcon} from '../../../assets/images/svg/fb.svg';
import {ReactComponent as TwitterIcon} from '../../../assets/images/svg/twitter.svg';
import paymentImg from '../../../assets/images/visa-mastercard.png';

import Logo from '../../ui/logo/Logo';
import Nav from '../../ui/nav/Nav';
import NavList from '../../ui/nav/nav-list/NavList';
import Phone from '../../ui/phone/Phone';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={`container ${styles.container}`}>
        <div className={styles.col}>
          <Logo />
          <div className={styles.copyright}>
            <span className={styles['copyright-item']}>© Все права защищены</span>
            <Link to="/test" className={`animation-link ${styles['copyright-item']}`}>Политика конфиденциальности</Link>
            <Link to="/test" className={`animation-link ${styles['copyright-item']}`}>Публичная оферта</Link>
          </div>
        </div>
        <Nav className={`${styles.col} ${styles.nav}`}>
          <NavList />
          <ul className={styles.categories}>
            <li className={styles['categories-item']}>
              <Link
                to={SHOP_ROUTE + '/t-shirt'}
                className={`animation-link ${styles['categories-link']}`}
              >
                Футболки
              </Link>
            </li>
            <li className={styles['categories-item']}>
              <Link
                to={SHOP_ROUTE + '/swimsuit'}
                className={`animation-link ${styles['categories-link']}`}
              >
                Купальники
              </Link>
            </li>
            <li className={styles['categories-item']}>
              <Link
                to={SHOP_ROUTE + '/sweatshirt'}
                className={`animation-link ${styles['categories-link']}`}
              >
                Свитшоты
              </Link>
            </li>
            <li className={styles['categories-item']}>
              <Link
                to={SHOP_ROUTE + '/hoody'}
                className={`animation-link ${styles['categories-link']}`}
              >
                Толстовки
              </Link>
            </li>
          </ul>
        </Nav>
        <div className={styles.col}>
          <div className={styles.contacts}>
            <Phone />
            <a href="mailto:hello@womazing.com" className="animation-link">hello@womazing.com</a>
          </div>
          <ul className={styles.socials}>
            <li className={styles['socials-item']}>
              <a
                href="http://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className={styles['socials-link']}
              >
                <InstagramIcon />
              </a>
            </li>
            <li className={styles['socials-item']}>
              <a
                href="http://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className={styles['socials-link']}
              >
                <FacebookIcon />
              </a>
            </li>
            <li className={styles['socials-item']}>
              <a
                href="http://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
                className={styles['socials-link']}
              >
                <TwitterIcon />
              </a>
            </li>
          </ul>
          <img src={paymentImg} alt="Способы оплаты" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
