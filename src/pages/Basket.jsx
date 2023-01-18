import Hero from '../components/shared/hero/Hero';
import BasketContent from '../components/shared/basket-content/BasketContent';

const Basket = () => {
  return (
    <main className="page__main">
      <Hero title="Корзина" breadcrumbs={['Корзина']} />
      <BasketContent />
    </main>
  );
};

export default Basket;