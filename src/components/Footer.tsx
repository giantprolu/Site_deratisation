import { PhoneCall, Mail, MapPin, Leaf } from 'lucide-react';

const Footer = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:0767393885';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@hygieneprotect3d.fr';
  };

  return (
    <footer className="bg-gradient-to-br from-nature-gray-900 to-nature-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-bold text-eco-green-400">Hygiène Protect 3D</h3>
            </div>
            <p className="text-nature-gray-300 leading-relaxed mb-4">
              Services professionnels de dératisation, désinsectisation et désinfection écoresponsables pour les entreprises et particuliers.
            </p>
            <div className="flex items-center gap-2 text-eco-green-400">
              <Leaf className="w-5 h-5" />
              <span className="text-sm">Solutions écologiques</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-eco-green-400">Liens Rapides</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-nature-gray-300 hover:text-eco-green-400 transition-colors">Accueil</a></li>
              <li><a href="/#about" className="text-nature-gray-300 hover:text-eco-green-400 transition-colors">À Propos</a></li>
              <li><a href="/services" className="text-nature-gray-300 hover:text-eco-green-400 transition-colors">Services</a></li>
              <li><a href="/contact" className="text-nature-gray-300 hover:text-eco-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-eco-green-400">Nos Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/deratisation" className="text-nature-gray-300 hover:text-eco-green-400 transition-colors">Dératisation</a></li>
              <li><a href="/services/desinsectisation" className="text-nature-gray-300 hover:text-eco-green-400 transition-colors">Désinsectisation</a></li>
              <li><a href="/services/desinfection" className="text-nature-gray-300 hover:text-eco-green-400 transition-colors">Désinfection</a></li>
              <li><a href="/services/depigeonnage" className="text-nature-gray-300 hover:text-eco-green-400 transition-colors">Dépigeonnage</a></li>
              <li><a href="/services/hygiene-du-batiment" className="text-nature-gray-300 hover:text-eco-green-400 transition-colors">Hygiène du Bâtiment</a></li>
              <li><a href="/services/debarras-pro" className="text-nature-gray-300 hover:text-eco-green-400 transition-colors">Débarras Pro</a></li>
              <li><a href="/services/assainissement-vmc" className="text-nature-gray-300 hover:text-eco-green-400 transition-colors">Assainissement</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-eco-green-400">Contact</h4>
            <div className="space-y-4">
              <button onClick={handlePhoneClick} className="flex items-start gap-3 text-nature-gray-300 hover:text-eco-green-400 transition-colors group">
                <PhoneCall className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <div>07 67 39 38 85</div>
                  <div className="text-sm text-nature-gray-400">24h/24 & 7j/7</div>
                </div>
              </button>
              <button onClick={handleEmailClick} className="flex items-start gap-3 text-nature-gray-300 hover:text-eco-green-400 transition-colors group">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                <div className="break-all">contact@hygieneprotect3d.fr</div>
              </button>
              <div className="flex items-start gap-3 text-nature-gray-300">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <div>Bondy, 93140</div>
                  <div className="text-sm text-nature-gray-400">Île-de-France</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-nature-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-nature-gray-400 text-sm">
              © 2024 HygièneProtect3D. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/politique-de-confidentialite" className="text-nature-gray-400 hover:text-eco-green-400 transition-colors text-sm">
                Politique de confidentialité
              </a>
              <a href="/mentions-legales" className="text-nature-gray-400 hover:text-eco-green-400 transition-colors text-sm">
                Mentions Légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;