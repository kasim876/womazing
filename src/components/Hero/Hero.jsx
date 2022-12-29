import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

import './Hero.scss';

const Hero = () => {
  const breadcrumbsItems = ["Главная", "Магазин"]
  
  return (
    <section className="js-hero hero">
      <div className="container">
        <h1 className="hero__title">Магазин</h1>
        <Breadcrumbs list={breadcrumbsItems} />
      </div>
    </section>
  )
}

export default Hero
