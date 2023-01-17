import {Link} from 'react-router-dom';

import styles from './Product.module.scss';

const Product = ({route, image, name, oldPrice, price}) => {
  oldPrice = oldPrice && <del>{oldPrice}</del>;

  return (
    <Link to={route} className={styles.root}>
      <div className={styles['img-wrap']}>
        <img src={image} alt="" width="350" height="478" className={styles.img} />
      </div>
      <h3 className={`text-md ${styles.name}`}>{name}</h3>
      <div className={styles['price-wrap']}>
        <span className={`text-md ${styles.price}`}>{price}</span>
        {
          oldPrice ? <del className={styles['price-old']}>{oldPrice}</del> : ''
        }
      </div>
    </Link>
  );
};

export default Product;