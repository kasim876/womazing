import {Link} from 'react-router-dom';

import {ABOUT_ROUTE} from '../../../utils/consts';

import {ReactComponent as PrevArrow} from '../../../assets/images/svg/nav-arrow-prev.svg';
import {ReactComponent as NextArrow} from '../../../assets/images/svg/nav-arrow-next.svg';

import TeamSlider from './team-slider/TeamSlider';

import 'swiper/scss';
import styles from './TeamSection.module.scss';

const TeamSection = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={`title ${styles.title}`}>Команда мечты Womazing</h2>
        <div className={styles.wrapper}>
          <div className={styles['slider-wrapper']}>
            <button className={`btn-reset js-team-btn-prev ${styles.btn} ${styles['btn-prev']}`}>
              <PrevArrow className={styles.icon} />
            </button>
            <TeamSlider />
            <button className={`btn-reset js-team-btn-next ${styles.btn} ${styles['btn-next']}`}>
              <NextArrow className={styles.icon} />
            </button>
            <div className={`js-team-pagination ${styles.pagination}`}></div>
          </div>
          <div className={styles.descr}>
            <h3 className={`subtitle ${styles.subtitle}`}>Для каждой</h3>
            <p className={`text-md ${styles.text}`}>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
            <p className={`text-md ${styles.text}`}>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
            <Link to={ABOUT_ROUTE} className={`animation-link ${styles.link}`}>Подробнее о бренде</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
