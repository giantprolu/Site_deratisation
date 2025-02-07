import { CheckCircle } from 'lucide-react';
import SEO from './SEO';

const About = () => {
  return (
    <>
      <SEO
        title="À Propos"
        description="Découvrez Hygiène Protect 3D, votre partenaire de confiance pour des solutions complètes d'hygiène et de désinsectisation."
        canonical="/#about"
      />
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Propos 
              </h2>
              <p className="text-lg text-gray-600 mb-6">
              <strong>HygièneProtect3D</strong> est votre partenaire de confiance pour des solutions complètes d'hygiène et de désinsectisation.
              Basés à Bondy, nous intervenons rapidement et efficacement à travers toute l'Île-de-France également l'Est et
              le Nord pour assurer la propreté et la sécurité de vos espaces, qu'ils soient résidentiels, commerciaux
              ou industriels.
              </p>
              
              <div className="space-y-4">
                {[
                  'Expertise et Expérience',
                  'Engagement Écologique',
                  '24h/24 & 7j/7',
                  'Solutions Personnalisées',
                  'Interventions Rapides'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Cleaning professional at work"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Clean office space"
                className="rounded-lg shadow-md mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;