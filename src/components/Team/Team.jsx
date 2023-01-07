import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper';

import {ABOUT_ROUTE} from '../../utils/consts';

import {ReactComponent as PrevArrow} from '../../assets/images/svg/nav-arrow-prev.svg';
import {ReactComponent as NextArrow} from '../../assets/images/svg/nav-arrow-next.svg';
import team1 from '../../assets/images/team1.jpg';
import team2 from '../../assets/images/team2.jpg';
import team3 from '../../assets/images/team3.jpg';

import 'swiper/scss';

import './Team.scss';

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <h2 className="title team__title">Команда мечты Womazing</h2>
        <div className="team__content">
          <div className="team__slider-wrapper">
            <button className="btn-reset team__slider-nav-btn team__slider-nav-btn-prev">
              <PrevArrow className="team__slider-nav-icon" />
            </button>
            <Swiper
              slidesPerView={1}
              modules={[Pagination, Navigation]}
              allowTouchMove={false}
              navigation={{
                nextEl: '.team__slider-nav-btn-next',
                prevEl: '.team__slider-nav-btn-prev',
                enabled: true,
              }}
              pagination={{
                el: '.team__slider-pagination',
                type: 'bullets',
                bulletClass: 'team__slider-bullet',
                bulletActiveClass: 'team__slider-bullet--current',
                clickable: true,
              }}
              className="team__slider"
              spaceBetween={50}
            >
              <SwiperSlide>
                <img className="team__img" src={team1} alt="Команда 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="team__img" src={team2} alt="Команда 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="team__img" src={team3} alt="Команда 3" />
              </SwiperSlide>
            </Swiper>
            <button className="btn-reset team__slider-nav-btn team__slider-nav-btn-next">
              <NextArrow className="team__slider-nav-icon" />
            </button>
            <div className="team__slider-pagination"></div>
          </div>
          <div className="team__descr">
            <h3 className="subtitle team__subtitle">Для каждой</h3>
            <p className="text-md team__text">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
            <p className="text-md team__text">Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
            <Link to={ABOUT_ROUTE} className="animation-link text-md team__link">Подробнее о бренде</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
