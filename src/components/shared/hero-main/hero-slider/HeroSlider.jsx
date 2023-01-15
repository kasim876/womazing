import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade, Pagination} from 'swiper';

import 'swiper/scss';
import 'swiper/css/effect-fade';

import styles from './HeroSlider.module.scss';

const HeroSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination, EffectFade]}
      allowTouchMove={false}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      pagination={{
        el: '.js-hero-pagination',
        type: 'bullets',
        bulletClass: 'bullet',
        bulletActiveClass: 'bullet-current',
        clickable: true,
      }}
      className={styles.root}
    >
      <SwiperSlide className={styles.slide}>
        <h1 className={styles.title}>Новые поступления в этом сезоне</h1>
        <p className={styles.descr}>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <h1 className={styles.title}>Что-то новенькое. Мы заждались тебя.</h1>
        <p className={styles.descr}>Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!</p>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <h1 className={styles.title}>Включай новый сезон с WOMAZING</h1>
        <p className={styles.descr}>Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;