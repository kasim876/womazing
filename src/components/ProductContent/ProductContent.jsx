import {observer} from 'mobx-react-lite';
import {useState} from 'react';

import validateCount from '../../helpers/validateCount';
import basketStore from '../../store/BasketStore';

import SizesSelect from '../SizesSelect/SizesSelect';
import ColorsSelect from '../ColorsSelect/ColorsSelect';

import './ProductContent.scss';

const addToBasket = (product, size, color, count) => {
  if (size && color && count) {
    basketStore.addProduct(
      Object.assign(
        product,
        {
          size,
          color,
          count: +count,
        }
      )
    );
  } else {
    alert('Выберите цвет, размер и количество');
  }
};

const ProductContent = observer(({product}) => {
  const [count, setCount] = useState(1);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  return (
    <section className="product-content">
      <div className="container product-content__container">
        <img src={process.env.REACT_APP_API_URL + product.img} alt="" width={536} height={729} className="product-content__img" />
        <div className="product-content__info">
          <div className="product-content__price-wrap">
            <span className="product-content__price">{product.price + '₽'}</span>
            <del className="product-content__price-old">{product.oldPrice && product.oldPrice + '₽'}</del>
          </div>
          <div className="product-content__select-wrap">
            <h3 className="product-content__subtitle">Выберите размер</h3>
            <SizesSelect setValue={setSize} />
          </div>
          <div className="product-content__select-wrap">
            <h3 className="product-content__subtitle">Выберите цвет</h3>
            <ColorsSelect setValue={setColor} />
          </div>
          <div className="product-content__bottom">
            <input
              type="number"
              className="input-reset product-content__count"
              value={count}
              min={1}
              onChange={(e) => setCount(validateCount(e.target.value))}
            />
            <button
              className="btn-reset btn-green product-content__btn"
              onClick={() => addToBasket(product, size, color, count)}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ProductContent;