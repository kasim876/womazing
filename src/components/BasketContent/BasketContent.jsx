import {observer} from 'mobx-react-lite';

import basketStore from '../../store/BasketStore';

import BasketList from '../BasketList/BasketList';

import './BasketContent.scss';

const BasketContent = observer(() => {
  return (
    <section className="basket">
      <div className="container">
        <table className="basket-table">
          <thead className="basket-table__header">
            <tr className="basket-table__row">
              <th>Товар</th>
              <th>Цена</th>
              <th>Количество</th>
              <th>Всего</th>
            </tr>
          </thead>
          {
            basketStore.products.length ? 
              <>
                <tbody className="basket-table__body">
                  <BasketList />
                </tbody>
                <div className="basket__bottom">
                  <div className="basket__price-wrap">
                    <h3 className="basket__price-caption">Итого:</h3>
                    <span className="basket__price">{basketStore.totalPrice() + '₽'}</span>
                  </div>
                  <button className="btn-reset btn-green basket__btn">Оформить заказ</button>
                </div>
              </>
              :
              <h2 align="center" style={{'margin-top': '50px'}}>В корзине нет товаров</h2>
          }
        </table>
      </div>
    </section>
  );
});

export default BasketContent;