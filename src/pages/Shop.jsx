import {useState, useEffect} from "react";
import {useLocation} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import axios from 'axios';

import loading from "../store/loading";

import Hero from "../components/Hero/Hero";
import ShopContent from "../components/ShopContent/ShopContent"

const Shop = observer(() => {
  const location = useLocation();
  const [products, setProducts] = useState([]);

  
  const observer = new IntersectionObserver((entries, observer) => {
    const HEADER_FIXED_CLASS = 'header--fixed';

    entries.forEach(entry => {
      if(entry.intersectionRatio >= 0.99) {
        document.querySelector('.header').classList.remove(HEADER_FIXED_CLASS);
      } else {
        document.querySelector('.header').classList.add(HEADER_FIXED_CLASS);
      }
    })
  }, { threshold: 0.99 })

  useEffect(() => {
    const hero = document.querySelector('.js-hero');

    observer.observe(hero);

    return () => observer.unobserve(hero)
  }, [])

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    
    loading.setIsLoading(true);

    axios
      .get(process.env.REACT_APP_API_URL + 'product', {
        cancelToken: source.token,
        params: {
          category: document.querySelector('.shop-nav__link--current').dataset.category,
        }
      })
      .then((res) => {
        setProducts(res.data);
      })
      .then(() => {
        loading.setIsLoading(false);
      })
      .catch(function(error) {
        if (axios.isCancel(error)) {
          return
        }
      })

    return () => source.cancel()
  }, [location.pathname]);

  return (
    <main>
      <Hero />
      <ShopContent products={products} isLoading={loading.isLoading} />
    </main>
  );
});

export default Shop;