import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

import styles from './Hero.module.scss';

const Hero = ({title}) => {
  const breadcrumbsItems = ['Главная', title];
  
  return (
    <section className={`js-hero ${styles.root}`}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>{title}</h1>
        <Breadcrumbs list={breadcrumbsItems} />
      </div>
    </section>
  );
};

export default Hero;
