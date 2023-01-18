import Hero from '../components/shared/hero/Hero';
import AboutContent from '../components/shared/about-content/AboutContent';

const About = () => {
  return (
    <main className="page__main">
      <Hero title="О бренде" breadcrumbs={['О бренде']} />
      <AboutContent />
    </main>
  );
};

export default About;