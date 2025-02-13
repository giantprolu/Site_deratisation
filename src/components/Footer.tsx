import { PhoneCall, Mail } from 'lucide-react';

const Footer = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0767393885';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@hygieneprotect3d.fr';
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Hygiène Protect 3D</h3>
            <p className="text-gray-400">
              Services de nettoyage professionnels pour les entreprises. Qualité, fiabilité et excellence dans les moindres détails.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapide</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Accueil</a></li>
              <li><a href="/#about" className="text-gray-400 hover:text-white">A Propos</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/reviews" className="text-gray-400 hover:text-white">Avis</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/deratisation" className="text-gray-400 hover:text-white">Dératisation</a></li>
              <li><a href="/services/desinfection" className="text-gray-400 hover:text-white">Désinfection</a></li>
              <li><a href="/services/desinsectisation" className="text-gray-400 hover:text-white">Désinsectisation</a></li>
              <li><a href="/services/depigeonnage" className="text-gray-400 hover:text-white">Dépigeonnage</a></li>
              <li><a href="/services/hygiene-du-batiment" className="text-gray-400 hover:text-white">Hygiène du Bâtiment</a></li>
              <li><a href="/services/debarras-pro" className="text-gray-400 hover:text-white">Débarras Pro</a></li>
              <li><a href="/services/assainissement-vmc" className="text-gray-400 hover:text-white">Assainissement VMC</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contactez nous !</h4>
            <div className="space-y-2">
              <button onClick={handlePhoneClick} className="text-gray-400 hover:text-white flex items-center">
                <PhoneCall className="h-6 w-6 mr-2" />
                <span>07 67 39 38 85</span>
              </button>
              <button onClick={handleEmailClick} className="text-gray-400 hover:text-white flex items-center">
                <Mail className="h-6 w-6 mr-2" />
                <span>contact@hygieneprotect3d.fr</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 HygieneProtect3D. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/politique-de-confidentialite" className="text-gray-400 hover:text-white">Politique de confidentialité</a>
              <a href="/mentions-legales" className="text-gray-400 hover:text-white">Mentions Légal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;