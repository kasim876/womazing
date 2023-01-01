import HeroMain from '../components/HeroMain/HeroMain';
import Products from '../components/Products/Products';
import Advantages from '../components/Advantages/Advantages';
import Team from '../components/Team/Team';

const Home = () => {
  return (
    <main>
      <HeroMain />
      <Products />
      <Advantages />
      <Team />
    </main>
  );
};

export default Home;