import { services } from '../data/services';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const Services = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SEO 
        title="Nos Services" 
        description="Découvrez nos services professionnels de dératisation, désinsectisation, désinfection et plus encore. Hygiène Protect 3D, votre partenaire en hygiène." 
      />
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600">Solutions complètes de nettoyage adaptées à vos besoins</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => {
              const IconComponent = service.icon;
              return (
              
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Link to={`/services/${service.slug}`} onClick={handleClick}>
                  <div className="text-blue-600 mb-4">
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.shortDescription}</p>
                  </Link>
                </div>
                
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;