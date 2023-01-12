import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {fetchOneProduct} from '../http/productAPI';

import Hero from '../components/Hero/Hero';
import ProductContent from '../components/ProductContent/ProductContent';
import Spinner from '../components/Spinner/Spinner';

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
    <main>
      {
        product ? (
          <>
            <Hero title = {product.name} />
            <ProductContent currentProduct = {product} />
          </>
        ) : (
          <Spinner />
        )
      }
    </main>
  );
};

export default Product;