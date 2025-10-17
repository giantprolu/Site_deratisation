import { CheckCircle, MapPin, Award, Users } from 'lucide-react';
import SEO from './SEO';

const About = () => {
  return (
    <>
      <SEO
        title="À Propos"
        description="Découvrez Hygiène Protect 3D, votre partenaire de confiance pour des solutions complètes d'hygiène et de désinsectisation écoresponsables."
        canonical="/#about"
      />
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
              À propos de nous
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Votre partenaire de confiance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions professionnelles et écoresponsables pour un environnement sain
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong className="text-primary-600">HygièneProtect3D</strong> est votre partenaire de confiance pour des solutions complètes d'hygiène et de désinsectisation.
                Basés à Bondy, nous intervenons rapidement et efficacement à travers toute l'Île-de-France pour assurer la propreté et la sécurité de vos espaces, qu'ils soient résidentiels, commerciaux
                ou industriels.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Award, text: 'Expertise et Expérience' },
                  { icon: CheckCircle, text: 'Engagement Écologique' },
                  { icon: CheckCircle, text: '24h/24 & 7j/7' },
                  { icon: Users, text: 'Solutions Personnalisées' },
                  { icon: CheckCircle, text: 'Interventions Rapides' }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                        <IconComponent className="h-5 w-5 text-primary-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/personnes-desinfectant.webp"
                alt="Professionnel du nettoyage au travail"
                className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />  
              <img
                src="/images/hygienedubat.webp"
                alt="Espace de bureau propre"
                className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zone d'intervention</h3>
                <p className="text-gray-600">
                  Île-de-France
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Certifications</h3>
                <p className="text-gray-600">
                  Experts certifiés et agréés
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clients satisfaits</h3>
                <p className="text-gray-600">
                  Particuliers, entreprises et collectivités
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;