import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoData, generateLocationKeywords, generateFAQSchema } from '../data/seoData';

interface ServiceSEOProps {
  serviceName: string;
  serviceSlug: string;
  description?: string;
  city?: string;
  department?: string;
}

const ServiceSEO: React.FC<ServiceSEOProps> = ({
  serviceName,
  serviceSlug,
  description,
  city = 'Paris',
  department = '75'
}) => {
  const siteUrl = "https://hygiene-protect-3d.fr";
  const canonicalUrl = `${siteUrl}/services/${serviceSlug}`;
  
  // Générer des mots-clés hyper-localisés
  const locationKeywords = generateLocationKeywords(serviceName.toLowerCase(), department);
  const allKeywords = [
    ...locationKeywords,
    `${serviceName} ${city}`,
    `${serviceName} urgence ${city}`,
    `${serviceName} pas cher ${city}`,
    `${serviceName} professionnel ${city}`,
    `devis gratuit ${serviceName} ${city}`,
    `expert ${serviceName} ${city}`,
    `société ${serviceName} ${city}`,
    `entreprise ${serviceName} ${city}`
  ].join(', ');

  // Titre ultra-optimisé
  const pageTitle = `${serviceName} ${city} & IDF  Expert N°1 | Hygiène Protect 3D`;
  
  // Description avec émojis et éléments de conversion
  const metaDescription = description || 
    ` ${serviceName} ${city} & Île-de-France par expert certifié  Intervention 1H  Garantie résultat  Devis gratuit 24h/24 ☎ 07 67 39 38 85`;

  // Schema FAQ spécialisé selon le service
  const getFAQType = () => {
    if (serviceSlug.includes('deratisation')) return 'deratisation';
    return 'general';
  };

  return (
    <Helmet>
      {/* Standard metadata ultra-optimisé */}
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="Hygiène Protect 3D - Expert Certifié" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Geo-targeting précis */}
      <meta name="geo.region" content="FR-IDF" />
      <meta name="geo.placename" content={`${city}, Île-de-France`} />
      <meta name="ICBM" content="48.8566, 2.3522" />
      
      {/* Open Graph optimisé */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="service" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="business:contact_data:locality" content={city} />
      <meta property="business:contact_data:region" content="Île-de-France" />
      <meta property="business:contact_data:postal_code" content="75000" />
      <meta property="business:contact_data:country_name" content="France" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {/* Schema Service ultra-détaillé */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${canonicalUrl}#service`,
          name: `${serviceName} ${city}`,
          description: metaDescription,
          serviceType: serviceName,
          provider: {
            '@type': 'LocalBusiness',
            '@id': `${siteUrl}#organization`,
            name: 'Hygiène Protect 3D',
            url: siteUrl,
            telephone: '+33767393885',
            email: 'contact@hygiene-protect-3d.fr',
            address: {
              '@type': 'PostalAddress',
              addressLocality: city,
              addressRegion: 'Île-de-France',
              addressCountry: 'FR'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 48.8566,
              longitude: 2.3522
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '127'
            }
          },
          areaServed: [
            {
              '@type': 'City',
              name: city
            },
            {
              '@type': 'AdministrativeArea',
              name: 'Île-de-France'
            }
          ],
          offers: {
            '@type': 'Offer',
            description: `${serviceName} professionnel à ${city}`,
            priceRange: '80€-300€',
            availability: 'https://schema.org/InStock',
            validThrough: '2025-12-31',
            areaServed: {
              '@type': 'State',
              name: 'Île-de-France'
            }
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `Services ${serviceName} ${city}`,
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: `${serviceName} d'urgence ${city}`,
                  description: `Intervention d'urgence 24h/24 pour ${serviceName} à ${city}`
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: `${serviceName} préventif ${city}`,
                  description: `${serviceName} préventif pour éviter les infestations à ${city}`
                }
              }
            ]
          }
        })}
      </script>

      {/* FAQ Schema spécialisé */}
      <script type="application/ld+json">
        {JSON.stringify(generateFAQSchema(getFAQType() as keyof typeof seoData.faqs))}
      </script>

      {/* How-to Schema pour améliorer les featured snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: `Comment choisir un expert ${serviceName} à ${city}`,
          description: `Guide pour bien choisir votre professionnel ${serviceName} à ${city}`,
          step: [
            {
              '@type': 'HowToStep',
              name: 'Vérifier les certifications',
              text: 'Assurez-vous que l\'entreprise possède les agréments nécessaires'
            },
            {
              '@type': 'HowToStep',
              name: 'Demander un devis gratuit',
              text: 'Obtenez plusieurs devis pour comparer les prestations'
            },
            {
              '@type': 'HowToStep',
              name: 'Vérifier la garantie',
              text: 'Une entreprise sérieuse propose toujours une garantie de résultat'
            }
          ]
        })}
      </script>

      {/* Review Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Service',
            name: `${serviceName} ${city}`
          },
          author: {
            '@type': 'Person',
            name: 'Client Vérifié'
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5'
          },
          reviewBody: `Excellent service de ${serviceName} à ${city}. Intervention rapide et efficace. Je recommande vivement !`
        })}
      </script>
    </Helmet>
  );
};

export default ServiceSEO;