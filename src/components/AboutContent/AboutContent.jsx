import {Link} from 'react-router-dom';

import {SHOP_ROUTE} from '../../utils/consts';

import image1 from '../../assets/images/about_image_1.jpg';
import image2 from '../../assets/images/about_image_2.jpg';

import './AboutContent.scss';

const AboutContent = () => {
  return (
    <section className="about-content">
      <div className="container">
        <ul className="about-content__list">
          <li className="about-content__item">
            <img src={image1} alt="" width={442} height={457} className="about-content__img" />
            <article className="about-content__article">
              <h3 className="subtitle about-content__subtitle">Идея и женщина</h3>
              <p className="text-md about-content__text">
                Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.
              </p>
              <p className="text-md about-content__text">
                Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.
              </p>
            </article>
          </li>
          <li className="about-content__item">
            <img src={image2} alt="" width={442} height={457} className="about-content__img" />
            <article className="about-content__article">
              <h3 className="subtitle about-content__subtitle">Магия в деталях</h3>
              <p className="text-md about-content__text">
                Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.
              </p>
              <p className="text-md about-content__text">
                Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.
              </p>
            </article>
          </li>
        </ul>
        <Link to={SHOP_ROUTE} className="btn-reset btn-green about-content__btn">Перейти в магазин</Link>
      </div>
    </section>
  );
};

export default AboutContent;
