import {Link} from 'react-router-dom';

import {PRODUCT_ROUTE, SHOP_ROUTE} from '../../../utils/consts';

import productImage1 from '../../../assets/images/productImage1.jpg';
import productImage2 from '../../../assets/images/productImage2.jpg';
import productImage3 from '../../../assets/images/productImage3.jpg';

import Product from '../product/Product';

import styles from './ProductsSection.module.scss';

const ProductsSection = () => {
  return (
    <section className={styles.root} id="products">
      <div className="container">
        <h2 className={`title ${styles.title}`}>Новая коллекция</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Product
              route={PRODUCT_ROUTE + '/1'}
              image={productImage1}
              name="Футболка USA"
              oldPrice="229₽"
              price="129₽"
            />
          </li>
          <li className={styles.item}>
            <Product
              route={PRODUCT_ROUTE + '/9'}
              image={productImage2}
              name="Купальник Glow"
              price="1549₽"
            />
          </li>
          <li className={styles.item}>
            <Product
              route={PRODUCT_ROUTE + '/12'}
              image={productImage3}
              name="Свитшот Sweet Shot"
              price="999₽"
            />
          </li>
        </ul>
        <Link to={SHOP_ROUTE} className={`btn-reset ${styles.btn}`}>Открыть магазин</Link>
      </div>
    </section>
  );
};

export default ProductsSection;
