import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { services } from '../data/services';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';

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
      <div className="bg-gradient-to-br from-eco-green-50 to-nature-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/services" 
            className="inline-flex items-center text-eco-green-600 hover:text-eco-green-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux services
          </Link>
          
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-eco-green-100 rounded-xl flex items-center justify-center mr-4">
              <IconComponent className="h-8 w-8 text-eco-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-nature-gray-900">{service.title}</h1>
          </div>
          
          <p className="text-xl text-nature-gray-600 max-w-4xl">{service.description}</p>
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
                <h2 className="text-3xl font-bold text-nature-gray-900 mb-6 text-left">
                  Notre service professionnel
                </h2>
                <p className="text-lg text-nature-gray-700 leading-relaxed whitespace-pre-line text-left">
                  {service.fullDescription}
                </p>
              </div>

              {/* Caractéristiques */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-nature-gray-900 mb-6 text-left">
                  Ce que nous faisons
                </h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start bg-eco-green-50 p-4 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-eco-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-nature-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Avantages */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-nature-gray-900 mb-6 text-left">
                  Pourquoi nous choisir
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start bg-nature-gray-50 p-4 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-eco-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-nature-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Étapes d'intervention */}
              {service.interventionSteps && service.interventionSteps.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-nature-gray-900 mb-8 text-left">
                    Notre processus d'intervention
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.interventionSteps.map((step, index) => (
                      <div key={index} className="relative bg-white border-2 border-eco-green-100 rounded-xl p-6 hover:border-eco-green-300 transition-colors">
                        <div className="absolute -top-4 left-6 w-8 h-8 bg-eco-green-600 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div className="mb-4 mt-2">
                          <img src={step.icon} alt={step.title} className="h-12 w-12 opacity-70" />
                        </div>
                        <h3 className="text-xl font-bold text-nature-gray-900 mb-3">{step.title}</h3>
                        <p className="text-nature-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Équipements */}
              {service.equipments && service.equipments.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-nature-gray-900 mb-8 text-left">
                    Nos équipements professionnels
                  </h2>
                  <div className="space-y-8">
                    {service.equipments.map((equipment, index) => (
                      <div key={index} className="bg-gradient-to-br from-nature-gray-50 to-eco-green-50 rounded-2xl p-8 border border-eco-green-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="md:col-span-1">
                            <img
                              src={equipment.image}
                              alt={equipment.imageAlt || equipment.name}
                              title={equipment.imageTitle || equipment.name}
                              className="rounded-xl shadow-lg w-full h-48 object-cover"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold text-nature-gray-900 mb-4">{equipment.name}</h3>
                            <p className="text-nature-gray-700 leading-relaxed">{equipment.description}</p>
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
              <div className="sticky top-24 space-y-6">
                {/* CTA Contact */}
                <div className="bg-gradient-to-br from-eco-green-600 to-eco-green-700 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Besoin de ce service ?</h3>
                  <p className="mb-6 opacity-90">
                    Contactez-nous pour un devis gratuit et personnalisé adapté à vos besoins.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full bg-white text-eco-green-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-nature-gray-50 transition-colors mb-3"
                  >
                    Demander un devis
                  </Link>
                  <a
                    href="tel:+33123456789"
                    className="flex items-center justify-center w-full bg-eco-green-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-eco-green-900 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Appel d'urgence
                  </a>
                </div>

                {/* Points clés */}
                <div className="bg-white border-2 border-eco-green-100 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-nature-gray-900 mb-4">Points clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-nature-gray-700">
                      <CheckCircle className="h-5 w-5 text-eco-green-600 mr-2 flex-shrink-0" />
                      Intervention rapide 24h/7j
                    </li>
                    <li className="flex items-center text-nature-gray-700">
                      <CheckCircle className="h-5 w-5 text-eco-green-600 mr-2 flex-shrink-0" />
                      Techniciens certifiés
                    </li>
                    <li className="flex items-center text-nature-gray-700">
                      <CheckCircle className="h-5 w-5 text-eco-green-600 mr-2 flex-shrink-0" />
                      Produits éco-responsables
                    </li>
                    <li className="flex items-center text-nature-gray-700">
                      <CheckCircle className="h-5 w-5 text-eco-green-600 mr-2 flex-shrink-0" />
                      Garantie de résultat
                    </li>
                    <li className="flex items-center text-nature-gray-700">
                      <CheckCircle className="h-5 w-5 text-eco-green-600 mr-2 flex-shrink-0" />
                      Devis gratuit
                    </li>
                  </ul>
                </div>

                {/* Autres services */}
                <div className="bg-nature-gray-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-nature-gray-900 mb-4">Autres services</h3>
                  <ul className="space-y-2">
                    {services
                      .filter(s => s.id !== service.id)
                      .slice(0, 4)
                      .map(otherService => (
                        <li key={otherService.id}>
                          <Link
                            to={`/services/${otherService.slug}`}
                            className="text-eco-green-600 hover:text-eco-green-700 hover:underline transition-colors"
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
      </div>
    </>
  );
};

export default ServiceDetailPage;