import { useState, useRef, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event:any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
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
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Hygiène Protect 3D</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600" aria-label="Accueil">Accueil</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600" aria-label="Services">Services</a>
            <a href="/avis" className="text-gray-700 hover:text-blue-600" aria-label="Avis">Avis</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600" aria-label="Contact">Contact</a>
            <a href="tel:0767393885" className="flex items-center text-blue-600" aria-label="Phone Number">
              <PhoneCall className="w-4 h-4 mr-2" />
              <span>07 67 39 38 85</span>
            </a>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-gray-700 hover:text-blue-600" aria-label="Accueil">Accueil</a>
            <a href="/services" className="block text-gray-700 hover:text-blue-600" aria-label="Services">Services</a>
            <a href="/avis" className="block text-gray-700 hover:text-blue-600" aria-label="Avis">Avis</a>
            <a href="/contact" className="block text-gray-700 hover:text-blue-600" aria-label="Contact">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;