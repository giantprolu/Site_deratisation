import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import CookieBanner from '../components/CookieBanner';

const Home = () => {
  return (
    <>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Contact />
      <CookieBanner />

    </>
  );
};

export default Home;