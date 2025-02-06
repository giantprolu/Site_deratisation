import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { services } from '../data/services';
import { CheckCircle } from 'lucide-react';

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
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <IconComponent className="h-10 w-10 text-blue-600 mr-4" />
                <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
              </div>
              
              <p className="text-xl text-gray-600 mb-8">{service.longDescription}</p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Caractéristiques</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Avantages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-lg w-full h-auto"
              />
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Besoin de ce service ?</h3>
                <p className="text-gray-600 mb-4">
                  Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;