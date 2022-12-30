import {useEffect} from "react";

import Hero from "../components/Hero/Hero";

const Shop = () => {
  const HEADER_FIXED_CLASS = 'header--fixed';
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.intersectionRatio >= 0.99) {
        document.querySelector('.header').classList.remove(HEADER_FIXED_CLASS);
      } else {
        document.querySelector('.header').classList.add(HEADER_FIXED_CLASS);
      }
    })
  }, { threshold: 0.99 })

  useEffect(() => {
    observer.observe(document.querySelector('.js-hero'));
  }, [])

  return (
    <main>
      <Hero />
    </main>
  );
};

export default Shop;