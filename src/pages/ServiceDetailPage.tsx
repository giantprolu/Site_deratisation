import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactSidebar from '../components/ContactSidebar';
import { services } from '../data/services';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import InterventionProcess from '../components/InterventionProcess';

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const service = services.find(s => s.slug === serviceSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = service.icon;

  return (
    <>
      <SEO
        title={service.title}
        description={service.metaDescription}
        canonical={`/services/${service.slug}`}
        image={service.image}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary-600 hover:text-primary-dark mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux services
          </Link>
          
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
              <IconComponent className="h-8 w-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{service.title}</h1>
          </div>
          
          <p className="text-xl text-gray-600 max-w-4xl">{service.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-3">
              {/* Image principale */}
              <div className="mb-12 flex justify-start">
                <img
                  src={service.image}
                  alt={service.imageAlt || service.title}
                  title={service.imageTitle || service.title}
                  className="rounded-2xl shadow-xl w-full max-w-4xl h-auto object-cover"
                />
              </div>

              {/* Description complète */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">
                  Notre service professionnel
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line text-left">
                  {service.fullDescription}
                </p>
              </div>

              {/* Caractéristiques */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">
                  Ce que nous faisons
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white border border-primary-100 rounded-lg hover:shadow-md transition-shadow">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Avantages */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">
                  Pourquoi nous choisir
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start bg-blue-50 p-4 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Équipements */}
              {service.equipments && service.equipments.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
                    Nos équipements professionnels
                  </h2>
                  <div className="space-y-8">
                    {service.equipments.map((equipment, index) => (
                      <div key={index} className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8 border border-primary-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="md:col-span-1">
                            <img
                              src={equipment.image}
                              alt={equipment.imageAlt || equipment.name}
                              title={equipment.imageTitle || equipment.name}
                              className="rounded-xl shadow-lg w-full h-auto max-h-80 object-contain bg-white"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{equipment.name}</h3>
                            <p className="text-gray-700 leading-relaxed">{equipment.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <ContactSidebar />

              {/* Autres services */}
              <div className="bg-blue-50 p-6 rounded-2xl mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Autres services</h3>
                <ul className="space-y-2">
                  {services
                    .filter(s => s.id !== service.id)
                    .slice(0, 4)
                    .map(otherService => (
                      <li key={otherService.id}>
                        <Link
                          to={`/services/${otherService.slug}`}
                          className="text-primary-600 hover:text-primary-dark hover:underline transition-colors"
                        >
                          {otherService.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Processus d'Intervention - Composant Global */}
      <InterventionProcess />
    </>
  );
};

export default ServiceDetailPage;
