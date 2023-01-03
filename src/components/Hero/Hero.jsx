import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

import './Hero.scss';

const Hero = ({title}) => {
  const breadcrumbsItems = ['Главная', title];
  
  return (
    <section className="js-hero hero">
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <Breadcrumbs list={breadcrumbsItems} />
      </div>
    </section>
  );
};

export default Hero;
