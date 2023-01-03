import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import axios from 'axios';

import {fetchProducts} from '../http/productAPI';

import product from '../store/ProductStore';

import Hero from '../components/Hero/Hero';
import ShopContent from '../components/ShopContent/ShopContent';

const Shop = observer(() => {
  const location = useLocation();

  useEffect(() => {
    const source = axios.CancelToken.source();
    
    document.documentElement.scrollTo(0, 0);
    product.setLoading(true);
    product.setCurrentType(document.querySelector('.shop-nav__link--current').dataset.category);

    fetchProducts(
      {
        category: product.currentType,
        page: product.page,
      },
      source.token
    )
      .then(data => {
        product.setTotalCount(data.count);
        product.setProducts(data.rows);
      })
      .then(() => {
        product.setLoading(false);
      })
      .catch(function(error) {
        if (axios.isCancel(error)) {
          return;
        }
      });

    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, product.page]);

  return (
    <main>
      <Hero title="Магазин" />
      <ShopContent />
    </main>
  );
});

export default Shop;