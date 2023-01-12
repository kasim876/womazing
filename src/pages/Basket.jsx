import Hero from '../components/Hero/Hero';
import BasketContent from '../components/BasketContent/BasketContent';

const Basket = () => {
  return (
    <main className="page__main">
      <Hero title="Корзина" />
      <BasketContent />
    </main>
  );
};

export default Basket;