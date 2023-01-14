import {observer} from 'mobx-react-lite';

import ProductStore from '../../../store/ProductStore';

import styles from './Pagination.module.scss';

const Pagination = observer(() => {
  const pageCount = Math.ceil(ProductStore.totalCount / ProductStore.limit);
  const pages = [];

  for(let i = 1; i <= pageCount; i++) {
    const activeClass = ProductStore.page === i ? ' ' + styles['current-btn'] : '';
    
    pages.push(
      <li className={styles.item} key={i}>
        <button
          className={'btn-reset ' + styles.btn + activeClass}
          onClick={() => ProductStore.setPage(i)}
        >
          {i}
        </button>
      </li>
    );
  }
  
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {pages}
      </ul>
    </div>
  );
});

export default Pagination;
