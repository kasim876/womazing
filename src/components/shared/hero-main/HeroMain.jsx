import {Link} from 'react-router-dom';

import {SHOP_ROUTE} from '../../../utils/consts';


import {ReactComponent as Arrow} from '../../../assets/images/svg/arrow.svg';
import mainImage from '../../../assets/images/hero-image1.jpg';
import secondImage from '../../../assets/images/hero-image2.jpg';
import thirdImage from '../../../assets/images/hero-image3.jpg';

import GreenButton from '../../ui/green-button/GreenButton';

import HeroSlider from './hero-slider/HeroSlider';

import styles from './HeroMain.module.scss';

const HeroMain = () => {
  const scrollToSection = (e) => {
    e.preventDefault();

    const targetSection = document.querySelector(e.target.getAttribute('href'));
    const scrollY = targetSection.offsetTop - document.querySelector('.js-header').clientHeight;

    window.scrollTo({
      top: scrollY,
      behavior: 'smooth',
    });
  };
  
  return (
    <section>
      <div className={styles.container}>
        <div className={styles['slider-wrap']}>
          <HeroSlider />
          <div className={styles['links-wrap']}>
            <a href="#products" className={styles['next-section-link']} onClick={scrollToSection}>
              <Arrow />
            </a>
            <Link to={SHOP_ROUTE} className={styles['shop-link']}>
              <GreenButton>Открыть магазин</GreenButton>
            </Link>
          </div>
          <div className={`js-hero-pagination ${styles.pagination}`}></div>
        </div>
        <div className={styles['images-wrap']}>
          <img src={mainImage} alt="Девушка в пальто" className={styles['first-img']}/>
          <img src={secondImage} alt="Девушка в шляпе" className={styles['second-img']}/>
          <img src={thirdImage} alt="Девушка в шляпе" className={styles['third-img']}/>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;