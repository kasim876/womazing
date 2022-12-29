import {useEffect} from "react";

import Header from "../../components/Header/Header";
import HeroMain from "../../components/HeroMain/HeroMain";
import Products from "../../components/Products/Products";
import Advantages from "../../components/Advantages/Advantages";
import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";

import './Home.scss';

const Home = () => {
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
    observer.observe(document.querySelector('.hero-main'));
  })

  return (
    <>
      <Header />
      <main>
        <HeroMain />
        <Products />
        <Advantages />
        <Team />
      </main>
      <Footer />
    </>
  );
};

export default Home;