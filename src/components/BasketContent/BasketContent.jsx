import BasketList from '../BasketList/BasketList';

import './BasketContent.scss';

const BasketContent = () => {
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
            <BasketList />
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BasketContent;