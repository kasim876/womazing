import {useEffect} from 'react';
import {BrowserRouter, useLocation} from 'react-router-dom';

import 'normalize.css';
import './styles/App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './components/AppRouter';

function App() {
  const handleScroll = () => {
    const header = document.querySelector('.header');
    const HEADER_FIXED_CLASS = 'header--fixed';
    
    if (window.scrollY) {
      header.classList.add(HEADER_FIXED_CLASS);
    } else {
      header.classList.remove(HEADER_FIXED_CLASS);
    }
  };
  
  const AppWrapper = ({children}) => {
    const location = useLocation();

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
  };

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
