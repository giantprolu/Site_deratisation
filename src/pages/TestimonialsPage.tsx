import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Star, Send } from 'lucide-react';

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
  },
  {
    name: 'Julien Garnier',
    content: 'Après avoir découvert une infestation de punaises de lit dans notre maison, nous avons contacté HygièneProtect3D, et nous ne pourrions pas être plus satisfaits de leur service. L\'équipe est arrivée rapidement et a effectué une inspection détaillée pour localiser tous les foyers d\'infestation. Leur traitement thermique combiné à une pulvérisation ciblée a éliminé toutes les punaises de lit, et nous avons pu retrouver notre tranquillité d\'esprit. Leurs techniciens sont très compétents et ont pris le temps de nous expliquer chaque étape du processus. Je recommande vivement HygièneProtect3D pour leur efficacité et leur professionnalisme.',
    rating: 5
  },
  {
    name: 'Nicolas Lemoine',
    content: 'Un grand merci à HygièneProtect3D pour leur intervention rapide et efficace dans notre restaurant. Nous avions un problème récurrent avec des nuisibles, et leur équipe a su proposer une solution adaptée à notre établissement. Ils ont utilisé des méthodes discrètes et sécurisées, ce qui était essentiel pour nous. Grâce à leur suivi rigoureux, nous n’avons plus aucun souci. Je recommande vivement leurs services pour tout professionnel de la restauration !',
    rating: 5
},
{
    name: 'Isabelle',
    content: 'Service impeccable de la part de HygièneProtect3D ! J’avais des soucis avec des cafards dans mon appartement, et leur équipe est intervenue avec un grand professionnalisme. L’évaluation initiale a été très détaillée, et le traitement appliqué a été radical. Après quelques jours, plus aucune trace d’insectes. De plus, ils m’ont donné de très bons conseils pour éviter une récidive. Je suis ravie du résultat et recommande leurs services les yeux fermés !',
    rating: 5
}
];

const TestimonialsPage = () => {
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    console.log({ name, company, role, content, rating });
    
    // Clear form
    setName('');
    setCompany('');
    setRole('');
    setContent('');
    setRating(5);
  };

  return (
    <>
      <SEO
        title="Avis Clients"
        description="Découvrez les témoignages de nos clients satisfaits. Des années d'expérience et d'excellence dans le nettoyage professionnel."
        canonical="/avis"
      />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Témoignages Clients</h1>
            <p className="text-xl text-gray-600">Ce que nos clients disent de nos services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
                <p className="text-gray-600">{review.content}</p>
                <div className="flex items-center mt-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;