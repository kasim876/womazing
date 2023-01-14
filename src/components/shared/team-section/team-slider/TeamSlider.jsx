import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper';

import team1 from '../../../../assets/images/team1.jpg';
import team2 from '../../../../assets/images/team2.jpg';
import team3 from '../../../../assets/images/team3.jpg';

import styles from './TeamSlider.module.scss';

const TeamSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination, Navigation]}
      allowTouchMove={false}
      navigation={{
        nextEl: '.js-team-btn-next',
        prevEl: '.js-team-btn-prev',
        enabled: true,
      }}
      pagination={{
        el: '.js-team-pagination',
        type: 'bullets',
        bulletClass: 'bullet',
        bulletActiveClass: 'bullet-current',
        clickable: true,
      }}
      className={styles.root}
      spaceBetween={50}
    >
      <SwiperSlide>
        <img className={styles.img} src={team1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.img} src={team2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.img} src={team3} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default TeamSlider;