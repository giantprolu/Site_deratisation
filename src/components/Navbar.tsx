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


  const handlePhoneClick = () => {
    window.location.href = 'tel:0767393885';
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 w-full z-50 border-b border-gray-100" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">Hygiène Protect 3D</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className={`text-gray-700 hover:text-primary-600 transition-colors font-medium ${activeSection === 'about' ? 'text-primary-600' : ''}`} aria-label="Accueil">Accueil</a>
            <a href="#services" className={`text-gray-700 hover:text-primary-600 transition-colors font-medium ${activeSection === 'services' ? 'text-primary-600' : ''}`} aria-label="Services" onClick={handleServiceClick}>Services</a>
            <a href="#contact" className={`text-gray-700 hover:text-primary-600 transition-colors font-medium ${activeSection === 'contact' ? 'text-primary-600' : ''}`} aria-label="Contact" onClick={handleContactClick}>Contact</a>
            <button onClick={handlePhoneClick} className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-dark text-white rounded-lg transition-colors font-medium" aria-label="Phone Number">
              <PhoneCall className="w-4 h-4" />
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
        <div ref={menuRef} className="md:hidden bg-white border-t border-gray-100" aria-label="Mobile Navigation">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="/" className={`block text-gray-700 hover:text-primary-600 py-2 transition-colors ${activeSection === 'accueil' ? 'text-primary-600' : ''}`} aria-label="Accueil" onClick={() => setIsOpen(false)}>Accueil</a>
            <a href="#services" className={`block text-gray-700 hover:text-primary-600 py-2 transition-colors ${activeSection === 'services' ? 'text-primary-600' : ''}`} aria-label="Services" onClick={handleServiceClick}>Services</a>
            <a href="#contact" className={`block text-gray-700 hover:text-primary-600 py-2 transition-colors ${activeSection === 'contact' ? 'text-primary-600' : ''}`} aria-label="Contact" onClick={handleContactClick}>Contact</a>
            <button onClick={handlePhoneClick} className="flex items-center gap-2 w-full px-4 py-2 bg-primary-600 hover:bg-primary-dark text-white rounded-lg transition-colors mt-2" aria-label="Phone Number">
              <PhoneCall className="w-4 h-4" />
              <span>07 67 39 38 85</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;