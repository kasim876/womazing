import {PRODUCT_ROUTE} from '../../utils/consts';

import Spinner from '../Spinner/Spinner';
import ShopNav from '../ShopNav/ShopNav';
import ProductsItem from '../ProductsItem/ProductsItem';
import ProductsList from '../ProductsList/ProductsList';

import './ShopContent.scss';

const ShopContent = ({products, isLoading}) => {
  const items = products.map(({id, img, name, oldPrice, price}) => {
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
    )
  })
  
  return (
    <section className="shop-content">
      <div className="container">
        <ShopNav />
        {isLoading ? <Spinner /> : <ProductsList items={items} />}
      </div>
    </section>
  )
}

export default ShopContent
