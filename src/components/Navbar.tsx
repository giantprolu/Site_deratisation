import { useState, useRef, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import {  useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    setIsOpen(false);
    navigate('/#contact');
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleServiceClick = () => {
    setIsOpen(false);
    navigate('/#services');
    setTimeout(() => {
      const serviceElement = document.getElementById('services');
      if (serviceElement) {
        serviceElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleAvisClick = () => {
    setIsOpen(false);
    navigate('/#reviews');
    setTimeout(() => {
      const avisElement = document.getElementById('reviews');
      if (avisElement) {
        avisElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };


  const handlePhoneClick = () => {
    window.location.href = 'tel:0767393885';
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Hygiène Protect 3D</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className={`text-blue-900 hover:text-blue-700 ${activeSection === 'about' ? 'bg-blue-100 rounded-md px-3 py-2' : ''}`} aria-label="Accueil">Accueil</a>
            <a href="#services" className={`text-blue-900 hover:text-blue-700 ${activeSection === 'services' ? 'bg-blue-100 rounded-md px-3 py-2' : ''}`} aria-label="Services" onClick={handleServiceClick}>Services</a>
            <a href="#reviews" className={`text-blue-900 hover:text-blue-700 ${activeSection === 'reviews' ? 'bg-blue-100 rounded-md px-3 py-2' : ''}`} aria-label="Avis" onClick={handleAvisClick}>Avis</a>
            <a href="#contact" className={`text-blue-900 hover:text-blue-700 ${activeSection === 'contact' ? 'bg-blue-100 rounded-md px-3 py-2' : ''}`} aria-label="Contact" onClick={handleContactClick}>Contact</a>
            <button onClick={handlePhoneClick} className="flex items-center text-blue-600" aria-label="Phone Number">
              <PhoneCall className="w-4 h-4 mr-2" />
              <span>07 67 39 38 85</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700" aria-label="Menu Button">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div ref={menuRef} className="md:hidden" aria-label="Mobile Navigation">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <a href="/" className={`text-blue-900 hover:text-blue-700 py-2 ${activeSection === 'accueil' ? 'bg-blue-100 rounded-md px-3 py-2' : ''}`} aria-label="Accueil" onClick={() => setIsOpen(false)}>Accueil</a>
            <a href="#services" className={`text-blue-900 hover:text-blue-700 py-2 ${activeSection === 'services' ? 'bg-blue-100 rounded-md px-3 py-2' : ''}`} aria-label="Services" onClick={handleServiceClick}>Services</a>
            <a href="#reviews" className={`text-blue-900 hover:text-blue-700 py-2 ${activeSection === 'reviews' ? 'bg-blue-100 rounded-md px-3 py-2' : ''}`} aria-label="Avis" onClick={handleAvisClick}>Avis</a>
            <a href="#contact" className={`text-blue-900 hover:text-blue-700 py-2 ${activeSection === 'contact' ? 'bg-blue-100 rounded-md px-3 py-2' : ''}`} aria-label="Contact" onClick={handleContactClick}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;