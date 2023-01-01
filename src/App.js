import {useEffect} from "react";
import {BrowserRouter, useLocation} from "react-router-dom";

import 'normalize.css';
import './styles/App.scss';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter";

function App() {
  const AppWrapper = ({children}) => {
    const location = useLocation();
    
    useEffect(() => {
      const hero = document.querySelector('.js-hero');
      const header = document.querySelector('.header');

      const observer = new IntersectionObserver((entries, observer) => {
        const HEADER_FIXED_CLASS = 'header--fixed';
    
        entries.forEach(entry => {
          if(entry.intersectionRatio >= 0.99) {
            header.classList.remove(HEADER_FIXED_CLASS);
          } else {
            header.classList.add(HEADER_FIXED_CLASS);
          }
        })
      }, { threshold: 0.99 })
  
      observer.observe(hero);
  
      return () => observer.unobserve(hero)
    }, [location.pathname])

    useEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return children
  }

  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <AppRouter />
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
