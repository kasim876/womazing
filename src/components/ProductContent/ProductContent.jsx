import {observer} from 'mobx-react-lite';
import {useEffect, useState} from 'react';

import basket from '../../store/BasketStore';

import './ProductContent.scss';

const ProductContent = observer(({image, oldPrice, price}) => {
  const [count, setCount] = useState(1);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (size) {
      const ACTIVE_CLASS = 'sizes-list__btn--select';

      const activeBtnNode = document.getElementsByClassName(ACTIVE_CLASS)[0];

      activeBtnNode && activeBtnNode.classList.remove(ACTIVE_CLASS);
      document.querySelector(`[value="${size}"]`).classList.add(ACTIVE_CLASS);
    }
  }, [size]);

  useEffect(() => {
    if (color) {
      const ACTIVE_CLASS = 'colors-list__btn--select';

      const activeBtnNode = document.getElementsByClassName(ACTIVE_CLASS)[0];

      activeBtnNode && activeBtnNode.classList.remove(ACTIVE_CLASS);
      document.querySelector(`[value="${color}"]`).classList.add(ACTIVE_CLASS);
    }
  }, [color]);

  const countValidate = () => {
    if (count < 1) {
      setCount(1);
    }

    const arrOfCountNumber = count.split('');
    
    if (+arrOfCountNumber[0] === 0) {
      const countNew = arrOfCountNumber
        .slice(1)
        .join('');

      setCount(countNew);
    }
  };

  const addToBasket = () => {
    basket.setBasket(+count, size, color, price, price * count);
  };
  
  return (
    <section className="product-content">
      <div className="container product-content__container">
        <img src={process.env.REACT_APP_API_URL + image} alt="" width={536} height={729} className="product-content__img" />
        <div className="product-content__info">
          <div className="product-content__price-wrap">
            <span className="product-content__price">{price + '₽'}</span>
            <del className="product-content__price-old">{oldPrice && oldPrice + '₽'}</del>
          </div>
          <div className="product-content__select-wrap">
            <h3 className="product-content__subtitle">Выберите размер</h3>
            <ul className="sizes-list">
              <li className="sizes-list__item">
                <button
                  className="btn-reset text-md sizes-list__btn"
                  value="s"
                  onClick={(e) => setSize(e.target.value)}
                >
                  s
                </button>
              </li>
              <li className="sizes-list__item">
                <button
                  className="btn-reset text-md sizes-list__btn"
                  value="m"
                  onClick={(e) => setSize(e.target.value)}
                >
                  m
                </button>
              </li>
              <li className="sizes-list__item">
                <button
                  className="btn-reset text-md sizes-list__btn"
                  value="l"
                  onClick={(e) => setSize(e.target.value)}
                >
                  l
                </button>
              </li>
              <li className="sizes-list__item">
                <button
                  className="btn-reset text-md sizes-list__btn"
                  value="xl"
                  onClick={(e) => setSize(e.target.value)}
                >
                  xl
                </button>
              </li>
            </ul>
          </div>
          <div className="product-content__select-wrap">
            <h3 className="product-content__subtitle">Выберите цвет</h3>
            <ul className="colors-list">
              <li className="colors-list__item">
                <button
                  onClick={(e) => setColor(e.target.value)}
                  value="white"
                  className="btn-reset colors-list__btn colors-list__btn--white"
                ></button>
              </li>
              <li className="colors-list__item">
                <button
                  onClick={(e) => setColor(e.target.value)}
                  value="black"
                  className="btn-reset colors-list__btn colors-list__btn--black"></button>
              </li>
              <li className="colors-list__item">
                <button
                  onClick={(e) => setColor(e.target.value)}
                  value="gray"
                  className="btn-reset colors-list__btn colors-list__btn--gray"></button>
              </li>
              <li className="colors-list__item">
                <button
                  onClick={(e) => setColor(e.target.value)}
                  value="pink"
                  className="btn-reset colors-list__btn colors-list__btn--pink"></button>
              </li>
            </ul>
          </div>
          <div className="product-content__bottom">
            <input
              type="number"
              className="input-reset product-content__count"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              onBlur={countValidate}
            />
            <button
              className="btn-reset btn-green product-content__btn"
              onClick={addToBasket}
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