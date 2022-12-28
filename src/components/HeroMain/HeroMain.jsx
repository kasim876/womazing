import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade, Pagination} from 'swiper'

import {SHOP_ROUTE} from "../../utils/consts";

import {ReactComponent as Arrow} from "../../assets/images/svg/arrow.svg";
import mainImage from "../../assets/images/hero-image1.jpg";
import secondImage from "../../assets/images/hero-image2.jpg";
import thirdImage from "../../assets/images/hero-image3.jpg";

import 'swiper/scss';
import 'swiper/css/effect-fade';

import './HeroMain.scss';

const HeroMain = () => {
  return (
    <section className="hero-main">
      <div className="hero-main__container">
        <div className="hero-main-slider">
          <Swiper
            slidesPerView={1}
            modules={[Pagination, EffectFade]}
            allowTouchMove={false}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            pagination={{
              el: '.hero-main-slider__pagination',
              type: 'bullets',
              bulletClass: 'hero-main-slider__bullet',
              bulletActiveClass: 'hero-main-slider__bullet--current',
              clickable: true,
            }}
          >
            <SwiperSlide>
              <h1 className="hero-main__title">Новые поступления в этом сезоне</h1>
              <p className="hero-main__descr">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
            </SwiperSlide>
            <SwiperSlide>
              <h1 className="hero-main__title">Что-то новенькое. Мы заждались тебя.</h1>
              <p className="hero-main__descr">Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!</p>
            </SwiperSlide>
            <SwiperSlide>
              <h1 className="hero-main__title">Включай новый сезон с WOMAZING</h1>
              <p className="hero-main__descr">Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров</p>
            </SwiperSlide>
          </Swiper>
          <div className="hero-main__links">
            <a href="#products" className="hero-main__next-section-link">
              <Arrow />
            </a>
            <Link to={SHOP_ROUTE} className="hero-main__shop-link">Открыть магазин</Link>
          </div>
          <div className="hero-main-slider__pagination swiper-pagination">
            <button className="btn-reset hero-main-slider__pagination-item swiper-pagination-bullet"></button>
            <button className="btn-reset hero-main-slider__pagination-item swiper-pagination-bullet"></button>
            <button className="btn-reset hero-main-slider__pagination-item swiper-pagination-bullet"></button>
          </div>
        </div>
        <div className="hero-main__images">
          <img src={mainImage} alt="Девушка в пальто" className="hero-main__first-image"/>
          <img src={secondImage} alt="Девушка в шляпе" className="hero-main__second-image"/>
          <img src={thirdImage} alt="Девушка в шляпе" className="hero-main__third-image"/>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;