import React from 'react';
import SEO from '../components/SEO';
import { MapPin, CheckCircle } from 'lucide-react';

const regions = [
  {
    name: 'Île-de-France',
    departments: ['Paris (75)', 'Seine-et-Marne (77)', 'Yvelines (78)', 'Essonne (91)', 'Hauts-de-Seine (92)', 'Seine-Saint-Denis (93)', 'Val-de-Marne (94)', 'Val-d\'Oise (95)']
  },
  {
    name: 'Auvergne-Rhône-Alpes',
    departments: ['Rhône (69)', 'Isère (38)', 'Loire (42)', 'Haute-Savoie (74)']
  },
  {
    name: 'Provence-Alpes-Côte d\'Azur',
    departments: ['Bouches-du-Rhône (13)', 'Alpes-Maritimes (06)', 'Var (83)']
  }
];

const ServiceAreasPage = () => {
  return (
    <>
      <SEO
        title="Zones d'Intervention"
        description="Découvrez nos zones d'intervention pour nos services de nettoyage professionnel. Présents dans toute la France pour répondre à vos besoins."
        canonical="/nos-interventions"
      />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Zones d'Intervention</h1>
            <p className="text-xl text-gray-600">Des équipes locales à votre service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => (
              <div key={region.name} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">{region.name}</h2>
                </div>
                <ul className="space-y-2">
                  {region.departments.map((department) => (
                    <li key={department} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-600">{department}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intervention sur toute la France</h2>
            <p className="text-gray-600 mb-4">
              Nos équipes sont mobilisables sur l'ensemble du territoire français pour des interventions
              ponctuelles ou des contrats d'entretien régulier. N'hésitez pas à nous contacter pour
              étudier vos besoins, même si votre région n'est pas listée ci-dessus.
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
    </>
  );
};

export default ServiceAreasPage;