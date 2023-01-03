import {Link} from 'react-router-dom';

import {HOME_ROUTE} from '../../utils/consts';

import './Breadcrumbs.scss';

const Breadcrumbs = ({list}) => {
  return (
    <ul className="breadcrumbs">
      {
        list.map(item => (
          <li className="text-md breadcrumbs__item" key={item}>
            <Link to={HOME_ROUTE} className="breadcrumbs__link">{item}</Link>
          </li>
        ))
      }
    </ul>
  );
};

export default Breadcrumbs;
