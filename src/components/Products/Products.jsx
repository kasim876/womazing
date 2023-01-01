import {Link} from 'react-router-dom';

import {PRODUCT_ROUTE} from '../../utils/consts';

import productImage1 from '../../assets/images/productImage1.jpg';
import productImage2 from '../../assets/images/productImage2.jpg';
import productImage3 from '../../assets/images/productImage3.jpg';

import './Products.scss';

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="title products__title">Новая коллекция</h2>
        <ul className="products__list">
          <li className="products__item">
            <Link to={PRODUCT_ROUTE} className="products__img-link">
              <img src={productImage1} alt="Девушка в футболке USA" className="products__img" />
            </Link>
            <Link to={PRODUCT_ROUTE} className="animation-link products__name-link">
              <h3 className="products__name">Футболка USA</h3>
            </Link>
            <span className="products__price"><del>$229</del>$129</span>
          </li>
          <li className="products__item">
            <Link to={PRODUCT_ROUTE} className="products__img-link">
              <img src={productImage2} alt="Девушка в купальнике Glow" className="products__img" />
            </Link>
            <Link to={PRODUCT_ROUTE} className="animation-link products__name-link">
              <h3 className="products__name">Купальник Glow</h3>
            </Link>
            <span className="products__price">$129</span>
          </li>
          <li className="products__item">
            <Link to={PRODUCT_ROUTE} className="products__img-link">
              <img src={productImage3} alt="Девушка в свитшоте Sweet Shot" className="products__img" />
            </Link>
            <Link to={PRODUCT_ROUTE} className="animation-link products__name-link">
              <h3 className="products__name">Свитшот Sweet Shot</h3>
            </Link>
            <span className="products__price">$129</span>
          </li>
        </ul>
        <button className="btn-reset products__btn">Открыть магазин</button>
      </div>
    </section>
  );
};

export default Products;
