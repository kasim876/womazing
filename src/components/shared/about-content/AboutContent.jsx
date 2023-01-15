import {Link} from 'react-router-dom';

import {SHOP_ROUTE} from '../../../utils/consts';

import image1 from '../../../assets/images/about_image_1.jpg';
import image2 from '../../../assets/images/about_image_2.jpg';

import styles from './AboutContent.module.scss';

const AboutContent = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <ul className={styles.list}>
          <li className={styles.item}>
            <img src={image1} alt="" width={442} height={457} className={styles.img} />
            <article className={styles.article}>
              <h3 className={`subtitle ${styles.subtitle}`}>Идея и женщина</h3>
              <p className={`text-md ${styles.text}`}>
                Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.
              </p>
              <p className={`text-md ${styles.text}`}>
                Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.
              </p>
            </article>
          </li>
          <li className={styles.item}>
            <img src={image2} alt="" width={442} height={457} className={styles.img} />
            <article className={styles.article}>
              <h3 className={`subtitle ${styles.subtitle}`}>Магия в деталях</h3>
              <p className={`text-md ${styles.text}`}>
                Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.
              </p>
              <p className={`text-md ${styles.text}`}>
                Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.
              </p>
            </article>
          </li>
        </ul>
        <Link to={SHOP_ROUTE} className={`btn-reset btn-green ${styles.btn}`}>Перейти в магазин</Link>
      </div>
    </section>
  );
};

export default AboutContent;
