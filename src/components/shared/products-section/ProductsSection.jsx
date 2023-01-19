import axios from 'axios';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

import {PRODUCT_ROUTE, SHOP_ROUTE} from '../../../utils/consts';

import ProductStore from '../../../store/ProductStore';

import {fetchProducts} from '../../../http/productAPI';

import OutlinedButton from '../../ui/button/outlined-button/OutlinedButton';

import Product from '../product/Product';
import Loader from '../../ui/loader/Loader';

import styles from './ProductsSection.module.scss';

const ProductsSection = observer(() => {

  useEffect(() => {
    const source = axios.CancelToken.source();

    ProductStore.setLoading(true);
    ProductStore.setCurrentType('Все');


    fetchProducts(
      {
        category: ProductStore.currentType,
        limit: 4,
      },
      source.token
    )
      .then(data => {
        ProductStore.setProducts(data.rows);
      })
      .then(() => {
        ProductStore.setLoading(false);
      })
      .catch(function(error) {
        if (axios.isCancel(error)) {
          console.error('Запрос отменён');
        }
      });

    return () => source.cancel();
  }, []);

  const products = ProductStore.products.map(({id, img, name, oldPrice, price}) => (
    <li key={name} className={styles.item}>
      <Product
        route={PRODUCT_ROUTE + '/' + id}
        image={process.env.REACT_APP_API_URL + img}
        name={name}
        oldPrice={oldPrice && oldPrice + '₽'}
        price={price + '₽'}
      />
    </li>
  ));
  
  return (
    <section className={styles.root} id="products">
      <div className="container">
        <h2 className={`title ${styles.title}`}>Новая коллекция</h2>
        {
          ProductStore.loading ?
            <Loader />
            :
            <ul className={styles.list}>
              {products}
            </ul>
        }
        <Link to={SHOP_ROUTE} className={styles.link}>
          <OutlinedButton>
            Открыть магазин
          </OutlinedButton>
        </Link>
      </div>
    </section>
  );
});

export default ProductsSection;
