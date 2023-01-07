import {observer} from 'mobx-react-lite';

import {PRODUCT_ROUTE} from '../../utils/consts';

import product from '../../store/ProductStore';

import Spinner from '../Spinner/Spinner';
import ShopNav from '../ShopNav/ShopNav';
import ProductsItem from '../ProductsItem/ProductsItem';
import ProductsList from '../ProductsList/ProductsList';

import './ShopContent.scss';

const ShopContent = observer(() => {
  const items = product.products.map(({id, img, name, oldPrice, price}) => {
    return (
      <li key={name}>
        <ProductsItem
          route={PRODUCT_ROUTE + '/' + id}
          image={process.env.REACT_APP_API_URL + img}
          name={name}
          oldPrice={oldPrice && oldPrice + '₽'}
          price={price + '₽'}
        />
      </li>
    );
  });
  
  return (
    <section className="shop-content">
      <div className="container">
        <ShopNav />
        {product.loading ? <Spinner /> : <ProductsList items={items} />}
      </div>
    </section>
  );
});

export default ShopContent;
