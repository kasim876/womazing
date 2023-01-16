import {observer} from 'mobx-react-lite';
import {useState} from 'react';

import validateCount from '../../../helpers/validateCount';
import BasketStore from '../../../store/BasketStore';

import Loader from '../loader/Loader';

import SizeSelect from './size-select/SizeSelect';
import ColorSelect from './color-select/ColorSelect';

import styles from './SelectedProduct.module.scss';

const addToBasket = (product, size, color, count) => {
  if (size && color && count) {
    BasketStore.addProduct(
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

const SelectedProduct = observer(({currentProduct}) => {
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [count, setCount] = useState(1);

  if (!currentProduct) {
    return <Loader />;
  }
  
  return (
    currentProduct ? (
      <section className={styles.root}>
        <div className={`container ${styles.container}`}>
          <img src={process.env.REACT_APP_API_URL + currentProduct.img} alt="" width={536} className={styles.img} />
          <div className={styles.info}>
            <div className={styles['price-wrap']}>
              <span className={styles.price}>{currentProduct.price + '₽'}</span>
              {
                currentProduct.oldPrice && <del className={styles['price-old']}>{currentProduct.oldPrice + '₽'}</del>
              }
            </div>
            <div className={styles['select-wrap']}>
              <h3 className={styles['select-title']}>Выберите размер</h3>
              <SizeSelect setValue={setSize} />
            </div>
            <div className={styles['select-wrap']}>
              <h3 className={styles['select-title']}>Выберите цвет</h3>
              <ColorSelect setValue={setColor} />
            </div>
            <div className={styles.bottom}>
              <input
                className={`input-reset ${styles.count}`}
                value={count}
                onChange={(e) => setCount(validateCount(e.target.value))}
              />
              <button
                className={`btn-reset btn-green ${styles.btn}`}
                onClick={() => addToBasket(currentProduct, size, color, count)}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </section>        
    ) : (
      <Loader />
    )
  );
});

export default SelectedProduct;