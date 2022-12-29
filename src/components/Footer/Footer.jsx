import {Link} from 'react-router-dom';

import {SHOP_ROUTE} from '../../utils/consts';

import {ReactComponent as InstagramIcon} from '../../assets/images/svg/inst.svg';
import {ReactComponent as FacebookIcon} from '../../assets/images/svg/fb.svg';
import {ReactComponent as TwitterIcon} from '../../assets/images/svg/twitter.svg';
import paymentImg from '../../assets/images/visa-mastercard.png';

import Logo from '../Logo/Logo';
import Nav from '../Navigation/Nav';
import Phone from '../Phone/Phone';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <Logo />
          <Nav />
          <div className="footer__contacts">
            <Phone className="footer__contacts-item" />
            <a href="mailto:hello@womazing.com" className="animation-link footer__contacts-item">hello@womazing.com</a>
          </div>
        </div>
        <div className="footer__row">
          <div className="footer__copyright">
            <span className="footer__copyright-item">© Все права защищены</span>
            <a href="/test" className="animation-link footer__copyright-item">Политика конфиденциальности</a>
            <a href="/test" className="animation-link footer__copyright-item">Публичная оферта</a>
          </div>
          <ul className="footer__categories">
            <li className="footer__categories-item">
              <Link to={SHOP_ROUTE} className="animation-link footer__categories-link">Пальто</Link>
            </li>
            <li className="footer__categories-item">
              <Link to={SHOP_ROUTE} className="animation-link footer__categories-link">Свитшоты</Link>
            </li>
            <li className="footer__categories-item">
              <Link to={SHOP_ROUTE} className="animation-link footer__categories-link">Кардиганы</Link>
            </li>
            <li className="footer__categories-item">
              <Link to={SHOP_ROUTE} className="animation-link footer__categories-link">Толстови</Link>
            </li>
          </ul>
          <div className="footer__end-col">
            <ul className="footer__socials">
              <li className="footer__socials-item">
                <a href="http://www.instagram.com/" target="_blank" rel="noreferrer" className="footer__socials-link">
                  <InstagramIcon />
                </a>
              </li>
              <li className="footer__socials-item">
                <a href="http://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__socials-link">
                  <FacebookIcon />
                </a>
              </li>
              <li className="footer__socials-item">
                <a href="http://www.twitter.com/" target="_blank" rel="noreferrer" className="footer__socials-link">
                  <TwitterIcon />
                </a>
              </li>
            </ul>
            <img src={paymentImg} alt="Способы оплаты" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
