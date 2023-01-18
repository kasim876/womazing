import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {fetchOneProduct} from '../http/productAPI';

import Hero from '../components/shared/hero/Hero';
import SelectedProduct from '../components/shared/selected-product/SelectedProduct';
import Loader from '../components/shared/loader/Loader';

const Product = () => {
  const {id} = useParams();

  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    fetchOneProduct(id)
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <main className="page__main">
      {
        product ? (
          <>
            <Hero title={product.name} breadcrumbs={[product.category, product.name]} />
            <SelectedProduct currentProduct={product} />
          </>
        ) : (
          <Loader />
        )
      }
    </main>
  );
};

export default Product;