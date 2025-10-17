import { ArrowRight, Shield, Leaf, Clock } from 'lucide-react';
import SEO from './SEO';

const Hero = () => {
  return (
    <>
      <SEO
        title="Accueil"
        description="Bienvenue sur Hygiène Protect 3D, votre spécialiste en dératisation, désinsectisation et désinfection. Découvrez nos services professionnels écoresponsables."
      />
      <div id="home" className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                Solutions écoresponsables
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hygiène Protect 3D
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Votre partenaire de confiance pour des solutions professionnelles de dératisation, désinsectisation et désinfection en Île-de-France.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-primary-600 hover:bg-primary-dark rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Demander un devis gratuit
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-primary-600 bg-white border-2 border-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300"
                >
                  Découvrir nos services
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Certifiés</div>
                    <div className="text-sm text-gray-600">Experts qualifiés</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Écologique</div>
                    <div className="text-sm text-gray-600">Produits respectueux</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Disponibles</div>
                    <div className="text-sm text-gray-600">24h/24 & 7j/7</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Professionnel de la désinfection"
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