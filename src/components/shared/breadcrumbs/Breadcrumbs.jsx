import {Link} from 'react-router-dom';

import {HOME_ROUTE} from '../../../utils/consts';

import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({list}) => {
  return (
    <ul className={styles.root}>
      {
        list.map((item, index) => (
          <li className={`text-md ${styles.item}`} key={index}>
            <Link to={HOME_ROUTE} className={styles.link}>{item}</Link>
          </li>
        ))
      }
    </ul>
  );
};

export default Breadcrumbs;
