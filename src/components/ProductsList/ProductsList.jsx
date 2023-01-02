import { observer } from 'mobx-react-lite';

import product from '../../store/ProductStore';

import Pagination from '../Pagination/Pagination';

import './ProductsList.scss';

const ProductsList = observer(({items}) => {
  return (
    <>
      <ul className="products-list">
        {items}
      </ul>
      {product.totalCount > product.limit && <Pagination />}
    </>
  );
});

export default ProductsList;
