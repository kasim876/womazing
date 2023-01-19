import {Link} from 'react-router-dom';

import {SHOP_ROUTE} from '../../../utils/consts';

import scrollToSection from '../../../helpers/scrollToSection';

import {ReactComponent as Arrow} from '../../../assets/images/svg/arrow.svg';
import mainImage from '../../../assets/images/hero-image1.jpg';
import secondImage from '../../../assets/images/hero-image2.jpg';
import thirdImage from '../../../assets/images/hero-image3.jpg';

import GreenButton from '../../ui/button/green-button/GreenButton';

import HeroSlider from './hero-slider/HeroSlider';

import styles from './HeroMain.module.scss';

const HeroMain = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles['slider-wrap']}>
          <HeroSlider />
          <div className={styles['links-wrap']}>
            <Link to="#products" className={styles['next-section-link']} onClick={scrollToSection}>
              <Arrow />
            </Link>
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