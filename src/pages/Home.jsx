import HeroMain from '../components/shared/hero-main/HeroMain';
import ProductsSection from '../components/shared/products-section/ProductsSection';
import ImportantsSection from '../components/shared/importants-section/ImportantsSection';
import TeamSection from '../components/shared/team-section/TeamSection';

const Home = () => {
  return (
    <main>
      <HeroMain />
      <ProductsSection />
      <ImportantsSection />
      <TeamSection />
    </main>
  );
};

export default Home;