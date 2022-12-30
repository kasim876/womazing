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
