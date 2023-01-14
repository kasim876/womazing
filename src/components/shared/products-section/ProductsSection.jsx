import {Link} from 'react-router-dom';

import {PRODUCT_ROUTE, SHOP_ROUTE} from '../../../utils/consts';

import productImage1 from '../../../assets/images/productImage1.jpg';
import productImage2 from '../../../assets/images/productImage2.jpg';
import productImage3 from '../../../assets/images/productImage3.jpg';

import styles from './ProductsSection.module.scss';

const ProductsSection = () => {
  return (
    <section className={styles.root} id="products">
      <div className="container">
        <h2 className={`title ${styles.title}`}>Новая коллекция</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to={PRODUCT_ROUTE + '/1'} className={styles['link-img']}>
              <img src={productImage1} alt="" className={styles.img} />
            </Link>
            <Link to={PRODUCT_ROUTE + '/1'} className={`animation-link ${styles['link-name']}`}>
              <h3 className={styles.name}>Футболка USA</h3>
            </Link>
            <span className={styles.price}><del>$229</del>$129</span>
          </li>
          <li className={styles.item}>
            <Link to={PRODUCT_ROUTE + '/9'}  className={styles['link-img']}>
              <img src={productImage2} alt="Девушка в купальнике Glow" className={styles.img} />
            </Link>
            <Link to={PRODUCT_ROUTE + '/9'} className={`animation-link ${styles['link-name']}`}>
              <h3 className={styles.name}>Купальник Glow</h3>
            </Link>
            <span className={styles.price}>$129</span>
          </li>
          <li className={styles.item}>
            <Link to={PRODUCT_ROUTE + '/12'} className={styles['link-img']}>
              <img src={productImage3} alt="Девушка в свитшоте Sweet Shot" className={styles.img} />
            </Link>
            <Link to={PRODUCT_ROUTE + '/12'} className={`animation-link ${styles['link-name']}`}>
              <h3 className={styles.name}>Свитшот Sweet Shot</h3>
            </Link>
            <span className={styles.price}>$129</span>
          </li>
        </ul>
        <Link to={SHOP_ROUTE} className={`btn-reset ${styles.btn}`}>Открыть магазин</Link>
      </div>
    </section>
  );
};

export default ProductsSection;
