import { observer } from 'mobx-react-lite';

import {PRODUCT_ROUTE} from '../../../../utils/consts';

import ProductStore from '../../../../store/ProductStore';

import Pagination from '../../pagination/Pagination';
import Product from '../../product/Product';

import styles from './ShopList.module.scss';

const ProductsList = observer(() => {
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
    <>
      <ul className={styles.root}>
        {products}
      </ul>
      {ProductStore.totalCount > ProductStore.limit && <Pagination />}
    </>
  );
});

export default ProductsList;
