import SEO from './SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import InterventionProcess from '../components/InterventionProcess';
import Contact from '../components/Contact';
import ContactSidebar from '../components/ContactSidebar';

const Home = () => {
  return (
    <>
      <SEO
        title="Accueil"
        description="Hygiène Protect 3D : Expert en dératisation, désinsectisation et désinfection à Bondy et en Île-de-France. Intervention rapide 7j/7 contre rats, souris, cafards, punaises de lit. Devis gratuit ☎ 07 67 39 38 85"
        canonical="/"
        keywords="dératisation Bondy, désinsectisation Île-de-France, extermination nuisibles 93, dératisation Paris, punaises de lit, cafards, rats, souris, désinfection professionnelle"
      />
      <Hero />
      
      {/* Content with Sidebar */}
      <div className="section-container py-16">
        <div className="grid-with-sidebar">
          {/* Main Content */}
          <div className="grid-main-content">
            <About />
            <Services />
            <InterventionProcess />
            <Contact />
          </div>
          
          {/* Sidebar - visible uniquement sur desktop */}
          <div className="grid-sidebar">
            <ContactSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;