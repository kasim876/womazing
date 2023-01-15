import {Link} from 'react-router-dom';

import {SHOP_ROUTE} from '../../../utils/consts';

import {ReactComponent as InstagramIcon} from '../../../assets/images/svg/inst.svg';
import {ReactComponent as FacebookIcon} from '../../../assets/images/svg/fb.svg';
import {ReactComponent as TwitterIcon} from '../../../assets/images/svg/twitter.svg';
import paymentImg from '../../../assets/images/visa-mastercard.png';

import Logo from '../../shared/logo/Logo';
import Nav from '../../shared/nav/Nav';
import Phone from '../../shared/phone/Phone';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className="container">
        <div className={styles.row}>
          <Logo />
          <Nav className={styles.nav} />
          <div className={styles.contacts}>
            <Phone />
            <a
              href="mailto:hello@womazing.com"
              className="animation-link"
            >
              hello@womazing.com
            </a>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.copyright}>
            <span className={styles['copyright-item']}>© Все права защищены</span>
            <a href="/test" className={`animation-link ${styles['copyright-item']}`}>Политика конфиденциальности</a>
            <a href="/test" className={`animation-link ${styles['copyright-item']}`}>Публичная оферта</a>
          </div>
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
          <div className={styles['end-col']}>
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
      </div>
    </footer>
  );
};

export default Footer;
