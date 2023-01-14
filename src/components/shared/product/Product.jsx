import {Link} from 'react-router-dom';

import styles from './Product.module.scss';

const Product = ({route, image, name, oldPrice, price}) => {
  oldPrice = oldPrice && <del>{oldPrice}</del>;

  return (
    <div className={styles.root}>
      <Link to={route} className={styles['img-wrap']}>
        <img src={image} alt="" width="350" height="478" className={styles.img} />
      </Link>
      <Link to={route} className={`animation-link ${styles['name-wrap']}`}>
        <h3 className={styles.name}>{name}</h3>
      </Link>
      <span className={`text-md ${styles.price}`}>{oldPrice}{price}</span>
    </div>
  );
};

export default Product;