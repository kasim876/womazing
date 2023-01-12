import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {fetchOneProduct} from '../http/productAPI';

import Spinner from '../components/Spinner/Spinner';
import Hero from '../components/Hero/Hero';
import ProductContent from '../components/ProductContent/ProductContent';

const Product = () => {
  const {id} = useParams();

  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    fetchOneProduct(id)
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <main>
      <>
        <Hero title={product?.name} />
        {
          product ?
            <ProductContent
              currentProduct={product}
            />
            :
            <Spinner />
        }
      </>
    </main>
  );
};

export default Product;