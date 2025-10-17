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
      <section id="services" className="section section-gradient-primary">
        <div className="section-container">
          {/* Header Section */}
          <div className="section-header">
            <div className="badge badge-primary">
              Nos expertises
            </div>
            <h2 className="section-title">Nos Services</h2>
            <p className="section-subtitle">
              Solutions complètes et écoresponsables adaptées à vos besoins
            </p>
          </div>

          {/* Services Grid - Amélioration responsive */}
          <div className="grid-services">
            {services.map(service => {
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
                      <h3 className="heading-card text-clamp-2 text-min-height-sm group-hover:text-primary-600">
                        {service.title}
                      </h3>
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
          <div className="mt-12 sm:mt-16 text-center">
            <a href="#contact" className="btn-primary">
              <span>Demander un devis gratuit</span>
              <ArrowRight className="icon-md" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;