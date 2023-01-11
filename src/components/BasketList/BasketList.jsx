import {observer} from 'mobx-react-lite';

import basketStore from '../../store/BasketStore';

import {ReactComponent as CrossIcon} from '../../assets/images/svg/cross.svg';

import './BasketList.scss';

const BasketList = observer(() => {
  return (
    basketStore.products.map(product => (
      <tr className="basket-item" key={product.id}>
        <td className="basket-item__cell">
          <button
            className="btn-reset basket-item__btn-delete"
            onClick={() => basketStore.deleteProduct(product)}
          >
            <CrossIcon />
          </button>
          <img src={process.env.REACT_APP_API_URL + product.img} alt="" width={125} height={179} className="basket-item__img" />
          <span className="text-md">{product.name}</span>
        </td>
        <td className="basket-item__cell">
          <span className="text-md">{product.price + '₽'}</span>
        </td>
        <td className="basket-item__cell">
          <input
            className="input-reset basket-item__count"
            value={product.count}
            onChange={(e) => basketStore.updateCount(product.id, e.target.value)}
          />
        </td>
        <td className="basket-item__cell">
          <span className="text-md">{product.price * product.count + '₽'}</span>
        </td>
      </tr>
    ))
  );
});

export default BasketList;