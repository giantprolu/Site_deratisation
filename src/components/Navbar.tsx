import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="src/Asset/logo.webp" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-2xl font-bold text-blue-600">Hygiène Protect 3D</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Accueil</a>
            <a href="/actualites-conseils" className="text-gray-700 hover:text-blue-600">Actualités et conseils</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="/avis" className="text-gray-700 hover:text-blue-600">Avis</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contacte</a>
            <a href="tel:0767393885" className="flex items-center text-blue-600">
              <PhoneCall className="w-4 h-4 mr-2" />
              <span>07 67 39 38 85</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Accueil</a>
            <a href="/actualites-conseils" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Actualités et conseils</a>
            <a href="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
            <a href="/avis" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Avis</a>
            <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contacte</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;