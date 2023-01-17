import {observer} from 'mobx-react-lite';

import BasketStore from '../../../../store/BasketStore';

import {ReactComponent as CrossIcon} from '../../../../assets/images/svg/cross.svg';

import styles from './BasketList.module.scss';

const BasketList = observer(() => {
  return (
    <tbody className={styles.root}>
      {
        BasketStore.products.map(product => (
          <tr className={styles.item} key={product.id}>
            <td className={styles.cell}>
              <button
                className={`btn-reset ${styles.btn}`}
                onClick={() => BasketStore.deleteProduct(product)}
              >
                <CrossIcon />
              </button>
              <img
                src={process.env.REACT_APP_API_URL + product.img}
                alt=""
                width={125}
                height={179}
                className={styles.img}
              />
              <span className={styles.text}>{product.name}</span>
            </td>
            <td className={styles.cell}>
              <span className={styles.text}>{product.price + '₽'}</span>
            </td>
            <td className={styles.cell}>
              <input
                className={`text-md ${styles.count}`}
                value={product.count}
                onChange={(e) => BasketStore.updateCount(product.id, e.target.value)}
              />
            </td>
            <td className={styles.cell}>
              <span className={styles.text}>{product.price * product.count + '₽'}</span>
            </td>
          </tr>
        ))
      }
    </tbody>
  );
});

export default BasketList;