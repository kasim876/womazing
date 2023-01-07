import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {fetchOneProduct} from '../http/productAPI';

import Spinner from '../components/Spinner/Spinner';
import Hero from '../components/Hero/Hero';
import ProductContent from '../components/ProductContent/ProductContent';

const Product = () => {
  const [product, setProduct] = useState(null);
  const {id} = useParams();
  
  useEffect(() => {

    fetchOneProduct(id)
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <main>
      {
        product ?
          <>
            <Hero title={product.name} />
            <ProductContent 
              image={product.img}
              oldPrice={product.oldPrice && product.oldPrice + '₽'}
              price={product.price + '₽'} 
            />
          </>
          :
          <Spinner />
      }
    </main>
  );
};

export default Product;