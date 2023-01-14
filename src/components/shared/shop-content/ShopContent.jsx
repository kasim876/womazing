import {observer} from 'mobx-react-lite';

import ProductStore from '../../../store/ProductStore';

import Loader from '../loader/Loader';

import ShopNav from './shop-nav/ShopNav';
import ShopList from './shop-list/ShopList';

import styles from './ShopContent.module.scss';

const ShopContent = observer(() => {
  return (
    <section className={styles.root}>
      <div className="container">
        <ShopNav />
        {ProductStore.loading ? <Loader /> : <ShopList />}
      </div>
    </section>
  );
});

export default ShopContent;
