import {observer} from 'mobx-react-lite';

import product from '../../store/ProductStore';

import './Pagination.scss';

const Pagination = observer(() => {
  const pageCount = Math.ceil(product.totalCount / product.limit);
  const pages = [];

  for(let i = 1; i <= pageCount; i++) {
    const activeClass = product.page === i ? ' pagination-list__btn--current' : '';
    
    pages.push(
      <li className="pagination-list__item" key={i}>
        <button
          className={'btn-reset pagination-list__btn' + activeClass}
          onClick={() => product.setPage(i)}
        >
          {i}
        </button>
      </li>
    );
  }
  
  return (
    <div className="pagination">
      <ul className="pagination-list">
        {pages}
      </ul>
    </div>
  );
});

export default Pagination;
