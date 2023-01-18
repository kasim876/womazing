import {observer} from 'mobx-react-lite';
import {Link} from 'react-router-dom';

import {BOOKING_ROUTE} from '../../../utils/consts';

import BasketStore from '../../../store/BasketStore';

import GreenButton from '../../ui/green-button/GreenButton';

import BasketList from './basket-list/BasketList';

import styles from './BasketContent.module.scss';

const BasketContent = observer(() => {
  return (
    <section className={styles.root}>
      <div className="container">
        {
          BasketStore.products.length ? 
            <>
              <table className={styles.table}>
                <thead className={styles['table-header']}>
                  <tr className={styles['table-row']}>
                    <th>Товар</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Всего</th>
                  </tr>
                </thead>
                <BasketList />
              </table>
              <div className={styles.bottom}>
                <div className={styles['price-wrap']}>
                  <h3 className={styles['price-caption']}>Итого:</h3>
                  <span className={styles.price}>{BasketStore.totalPrice() + '₽'}</span>
                </div>
                <Link to={BOOKING_ROUTE} className={styles.link}>
                  <GreenButton>Оформить заказ</GreenButton>
                </Link>
              </div>
            </>
            :
            <h2 align="center">В корзине нет товаров</h2>
        }
      </div>
    </section>
  );
});

export default BasketContent;