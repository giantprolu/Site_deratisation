import { Star } from 'lucide-react';
import SEO from './SEO';

const reviews = [
  {
    name: 'Louisa ',
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
        description="Lisez les avis de nos clients satisfaits par nos services de dératisation, désinsectisation et désinfection. HygièneProtect3D offre des interventions rapides et professionnelles pour garantir un environnement sain et sûr."
      />
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Avis Clients</h2>
            <p className="text-xl text-gray-600">Votre avis compte pour nous !</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <div className="border-t pt-4">
                  <p className="text-gray-600 mb-4">{review.content}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Reviews;