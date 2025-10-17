import { services } from '../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from './SEO';

const Services = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SEO
        title="Nos Services"
        description="Découvrez nos services professionnels de dératisation, désinsectisation, désinfection et plus encore. Hygiène Protect 3D, votre partenaire en hygiène écoresponsable."
      />
      <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
              Nos expertises
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions complètes et écoresponsables adaptées à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  onClick={handleClick}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all duration-300">
                      <span>En savoir plus</span>
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-0 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-primary-600 hover:bg-primary-dark rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Demander un devis gratuit
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;