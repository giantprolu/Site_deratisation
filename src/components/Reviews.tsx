import { Star, Quote } from 'lucide-react';
import SEO from './SEO';

const reviews = [
  {
    name: 'Louisa',
    content: 'Je suis extrêmement satisfaite des services de dératisation fournis par HygièneProtect3D. Leur équipe est arrivée rapidement après ma demande et a procédé à une inspection complète de mon domicile. Grâce à leur expertise et à leur équipement moderne, ils ont éradiqué efficacement le problème de rongeurs que nous avions. En plus, ils m\'ont donné de précieux conseils pour éviter de futures infestations. Je recommande vivement leurs services à tous ceux qui recherchent une intervention rapide et professionnelle.',
    rating: 5
  },
  {
    name: 'Marc Lefebvre',
    content: 'Nous avons fait appel à HygièneProtect3D pour un traitement de désinsectisation dans nos bureaux, et le résultat a été impressionnant. Les techniciens étaient très professionnels et ont utilisé des méthodes respectueuses de l\'environnement, ce qui était très important pour nous. Ils ont pris le temps d\'expliquer chaque étape du processus et ont assuré un suivi après l\'intervention. Nos locaux sont maintenant exempts d\'insectes, et nous sommes très satisfaits du service. Merci à toute l\'équipe pour leur excellent travail.',
    rating: 5
  },
  {
    name: 'Sophie Martin',
    content: 'HygièneProtect3D a été formidable pour notre hôtel. Nous avions besoin d\'un service de désinfection en urgence, et leur équipe a su intervenir très rapidement. Ils ont effectué un nettoyage en profondeur et une désinfection complète de toutes nos chambres et parties communes. Les produits utilisés étaient de haute qualité et ont laissé nos installations parfaitement propres et sûres pour nos clients. Leur service client est également très réactif et aimable. Je les recommande sans hésitation !',
    rating: 5
  }
];

const Reviews = () => {
  return (
    <>
      <SEO
        title="Avis Clients"
        description="Lisez les avis de nos clients satisfaits par nos services de dératisation, désinsectisation et désinfection écoresponsables. HygièneProtect3D offre des interventions rapides et professionnelles pour garantir un environnement sain et sûr."
      />
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-eco-green-100 text-eco-green-700 rounded-full text-sm font-medium mb-4">
              Témoignages
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-nature-gray-900 mb-4">Avis Clients</h2>
            <p className="text-xl text-nature-gray-600 max-w-3xl mx-auto">
              Votre satisfaction est notre priorité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gradient-to-br from-eco-green-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-eco-green-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-eco-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-nature-gray-600 mb-6 leading-relaxed italic">
                  {review.content}
                </p>
                <div className="border-t border-eco-green-200 pt-4">
                  <p className="font-bold text-nature-gray-900">{review.name}</p>
                  <p className="text-sm text-nature-gray-500">Client vérifié</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-gradient-to-br from-eco-green-50 to-eco-green-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-nature-gray-900 mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-lg text-nature-gray-600 mb-6 max-w-2xl mx-auto">
              Des centaines de particuliers et d'entreprises nous font confiance pour leurs besoins en hygiène et lutte anti-nuisibles
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-eco-green-600 hover:bg-eco-green-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;