import Hero from '../components/Hero/Hero';
import AboutContent from '../components/AboutContent/AboutContent';

const About = () => {
  return (
    <main className="page__main">
      <Hero title="О бренде" />
      <AboutContent />
    </main>
  );
};

export default About;