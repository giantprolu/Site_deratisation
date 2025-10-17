import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SEO
        title="Services Dératisation & Désinsectisation Bondy"
        description="Nos services professionnels : dératisation (rats, souris), désinsectisation (cafards, punaises), désinfection à Bondy et Île-de-France. Devis gratuit ☎ 07 67 39 38 85"
        canonical="/services"
        keywords="services dératisation, désinsectisation professionnelle, extermination nuisibles, traitement punaises de lit, élimination cafards, dératisation entreprise"
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Nos expertises
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos Services Professionnels</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions complètes et écoresponsables de dératisation, désinsectisation et désinfection adaptées à vos besoins en Île-de-France
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid - Même design que la page d'accueil */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid-services">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  onClick={handleClick}
                  className="group service-card"
                >
                  {/* Header avec icône et gradient */}
                  <div className="service-card-header">
                    <div className="bg-decoration-card group-hover:bg-primary-300/30"></div>
                    <div className="relative">
                      <div className="icon-card group-hover:shadow-xl group-hover:scale-110">
                        <IconComponent className="icon-lg text-primary-600 group-hover:text-primary-700 transition-colors duration-500" />
                      </div>
                      <h2 className="heading-card text-clamp-2 text-min-height-sm group-hover:text-primary-600">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Contenu de la carte */}
                  <div className="service-card-body">
                    <p className="text-description-sm text-clamp-3 flex-grow">
                      {service.description}
                    </p>

                    {/* Call to Action */}
                    <div className="service-card-footer">
                      <div className="btn-cta group-hover:text-primary-700">
                        <span className="text-responsive-base">En savoir plus</span>
                        <div className="btn-icon-circle group-hover:bg-primary-600">
                          <ArrowRight className="icon-md group-hover:text-white group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>Demander un devis gratuit</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;