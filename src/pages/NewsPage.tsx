import React from 'react';
import SEO from '../components/SEO';
import { Calendar, Clock } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Les nouvelles normes d\'hygiène en 2024',
    excerpt: 'Découvrez les dernières réglementations en matière d\'hygiène et de sécurité pour les entreprises.',
    date: '2024-03-15',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 2,
    title: 'Comment choisir son prestataire de nettoyage',
    excerpt: 'Guide complet pour sélectionner le meilleur service de nettoyage professionnel pour votre entreprise.',
    date: '2024-03-10',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 3,
    title: 'L\'importance de la désinfection régulière',
    excerpt: 'Pourquoi la désinfection régulière est cruciale pour la santé et la sécurité dans votre établissement.',
    date: '2024-03-05',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

const NewsPage = () => {
  return (
    <>
      <SEO
        title="Actualités et Conseils"
        description="Restez informé des dernières actualités et conseils en matière d'hygiène et de nettoyage professionnel."
        canonical="/actualites-conseils"
      />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Actualités et Conseils</h1>
            <p className="text-xl text-gray-600">Restez informé des dernières tendances et bonnes pratiques</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;