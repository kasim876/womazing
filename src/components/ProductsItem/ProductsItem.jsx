import {Link} from 'react-router-dom';

import './ProductsItem.scss';

const ProductItem = ({route, image, name, oldPrice, price}) => {
  oldPrice = oldPrice && <del>{oldPrice}</del>;

  return (
    <div className="product-item">
      <Link to={route} className="product-item__img-link">
        <img src={image} alt="Фотография товара" width="350" height="478" className="product-item__img" />
      </Link>
      <Link to={route} className="animation-link product-item__name-link">
        <h3 className="product-item__name">{name}</h3>
      </Link>
      <span className="text-md product-item__price">{oldPrice}{price}</span>
    </div>
  );
};

export default ProductItem;