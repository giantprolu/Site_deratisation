import { ArrowRight, Shield, Leaf, Clock } from 'lucide-react';
import SEO from './SEO';

const Hero = () => {
  return (
    <>
      <SEO
        title="Accueil"
        description="Expert dératisation Paris & IDF. Intervention 1H, garantie résultat. Devis gratuit 24h/24 ☎ 07 67 39 38 85"
      />
      <div id="home" className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="badge badge-primary mb-6">
                <Leaf className="icon-sm" />
                Solutions écoresponsables
              </div>
              <h1 className="heading-1 mb-6">
                Hygiène Protect 3D
              </h1>
              <p className="text-description mb-8">
                Expert certifié en dératisation, désinsectisation et désinfection. Intervention d'urgence 24h/24 en Île-de-France. Garantie résultat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#contact" className="btn-primary">
                  Demander un devis gratuit
                  <ArrowRight className="icon-md" />
                </a>
                <a href="#services" className="btn-secondary">
                  Découvrir nos services
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="list-item-icon-start-lg">
                  <div className="icon-box icon-primary flex-shrink-0">
                    <Shield className="icon-lg text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Certifiés</div>
                    <div className="text-label">Experts qualifiés</div>
                  </div>
                </div>
                <div className="list-item-icon-start-lg">
                  <div className="icon-box icon-primary flex-shrink-0">
                    <Leaf className="icon-lg text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Écologique</div>
                    <div className="text-label">Produits respectueux</div>
                  </div>
                </div>
                <div className="list-item-icon-start-lg">
                  <div className="icon-box icon-primary flex-shrink-0">
                    <Clock className="icon-lg text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Disponibles</div>
                    <div className="text-label">24h/24 & 7j/7</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Expert dératisation Paris - Professionnel anti-nuisibles Île-de-France"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    15+
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Années d'expérience</div>
                    <div className="text-sm text-gray-600">À votre service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;