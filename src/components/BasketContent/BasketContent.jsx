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
          <tbody className="basket-table__body">
            {
              basketStore.products.length ? <BasketList /> : <h1 align="center">В корзине нет товаров</h1>
            }
          </tbody>
        </table>
      </div>
    </section>
  );
});

export default BasketContent;