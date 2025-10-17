import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import InterventionProcess from '../components/InterventionProcess';
import Contact from '../components/Contact';
import ContactSidebar from '../components/ContactSidebar';

const Home = () => {
  return (
    <>
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