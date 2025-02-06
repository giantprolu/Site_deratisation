import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Services Professionnels de Nettoyage"
        description="Hygiène Protect 3D offre des services professionnels de nettoyage et d'hygiène pour entreprises. Solutions sur mesure et expertise reconnue."
        canonical="/"
      />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Contact />
    </>
  );
};

export default HomePage;