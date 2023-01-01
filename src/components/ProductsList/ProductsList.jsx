import './ProductsList.scss';

const ProductsList = ({items}) => {
  return (
    <ul className="products-list">
      {items}
    </ul>
  );
};

export default ProductsList;
