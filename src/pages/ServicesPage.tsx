import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { services } from '../data/services';

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
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h1>
            <p className="text-xl text-gray-600">Des solutions professionnelles adaptées à vos besoins</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={handleClick}
                >
                  <div className="text-primary-600 mb-4">
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;