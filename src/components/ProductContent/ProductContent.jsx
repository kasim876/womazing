import {observer} from 'mobx-react-lite';
import {useState} from 'react';

import validateCount from '../../helpers/validateCount';
import basketStore from '../../store/BasketStore';

import SizesSelect from '../SizesSelect/SizesSelect';
import ColorsSelect from '../ColorsSelect/ColorsSelect';

import './ProductContent.scss';
import Spinner from '../Spinner/Spinner';

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

const ProductContent = observer(({currentProduct}) => {
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [count, setCount] = useState(1);

  if (!currentProduct) {
    return <Spinner />;
  }
  
  return (
    <section className="product-content">
      <div className="container product-content__container">
        <img src={process.env.REACT_APP_API_URL + currentProduct.img} alt="" width={536} height={729} className="product-content__img" />
        <div className="product-content__info">
          <div className="product-content__price-wrap">
            <span className="product-content__price">{currentProduct.price + '₽'}</span>
            <del className="product-content__price-old">{currentProduct.oldPrice && currentProduct.oldPrice + '₽'}</del>
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
              className="input-reset product-content__count"
              value={count}
              onChange={(e) => setCount(validateCount(e.target.value))}
            />
            <button
              className="btn-reset btn-green product-content__btn"
              onClick={() => addToBasket(currentProduct, size, color, count)}
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