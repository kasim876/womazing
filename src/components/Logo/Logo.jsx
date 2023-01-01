import {Link} from 'react-router-dom';

import {HOME_ROUTE} from '../../utils/consts';

import logo from '../../assets/images/logo.png';

import './Logo.scss';

const Logo = () => {
  return (
    <Link to={HOME_ROUTE} className="logo">
      <img className="logo__img" src={logo} alt="Логотип" />
    </Link>
  );
};

export default Logo;