import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  name?: string;
  image?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "HYGIÈNE PROTECT 3D - Expert N°1 en dératisation Paris & Île-de-France Intervention en 1H  Garantie résultat  Devis gratuit 24h/24  07 67 39 38 85",
  canonical,
  type = 'website',
  name = 'Hygiène Protect 3D',
  image = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  keywords = 'dératisation Paris, dératisation Île-de-France, extermination rats Paris, désinsectisation Paris 75, dératisation urgence 24h, punaises de lit Paris, cafards Paris, dératiseur agréé Paris, désinfection COVID Paris, dératisation 93 94 95 77 78 91 92, extermination nuisibles Île-de-France, devis gratuit dératisation Paris',
}) => {
  const siteUrl = "https://hygiene-protect-3d.fr";
  
  // Construire l'URL canonique correctement
  const canonicalUrl = canonical 
    ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}`)
    : (typeof window !== "undefined" ? window.location.href : siteUrl);
  
  const isHomePage = !canonical || canonical === "/";
  
  // Titre optimisé SEO ultra-compétitif (50-60 caractères)
  const pageTitle = isHomePage 
    ? `🥇 Dératisation Paris & IDF - Expert N°1 | Hygiène Protect 3D` 
    : `${title} Paris & IDF | Expert Certifié | ${name}`;

  return (
    <Helmet>
      {/* Standard metadata */}
      <html lang="fr" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Hygiène Protect 3D - Expert Certifié" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="geo.region" content="FR-IDF" />
      <meta name="geo.placename" content="Paris, Île-de-France" />
      <meta name="geo.position" content="48.8566;2.3522" />
      <meta name="ICBM" content="48.8566, 2.3522" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang pour le français */}
      <link rel="alternate" hrefLang="fr" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Local Business Schema.org optimisé pour Paris */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': `${siteUrl}#organization`,
          name: 'Hygiène Protect 3D',
          alternateName: 'Expert Dératisation Paris',
          url: siteUrl,
          logo: image,
          image: image,
          description: 'Expert N°1 en dératisation, désinsectisation et désinfection à Paris et Île-de-France. Intervention d\'urgence 24h/24, 7j/7. Garantie résultat.',
          priceRange: '€€',
          telephone: '+33767393885',
          email: 'contact@hygiene-protect-3d.fr',
          foundingDate: '2020',
          slogan: 'Votre Expert Anti-Nuisibles N°1 en Île-de-France',
          knowsAbout: [
            'Dératisation professionnelle',
            'Désinsectisation certifiée',
            'Désinfection COVID-19',
            'Traitement punaises de lit',
            'Extermination cafards',
            'Élimination guêpes et frelons'
          ],
          areaServed: [
            {
              '@type': 'City',
              name: 'Paris',
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: 'Île-de-France'
              }
            },
            {
              '@type': 'AdministrativeArea', 
              name: 'Seine-Saint-Denis',
              alternateName: '93'
            },
            {
              '@type': 'AdministrativeArea',
              name: 'Val-de-Marne', 
              alternateName: '94'
            },
            {
              '@type': 'AdministrativeArea',
              name: 'Val-d\'Oise',
              alternateName: '95'
            },
            {
              '@type': 'AdministrativeArea',
              name: 'Seine-et-Marne',
              alternateName: '77'
            },
            {
              '@type': 'AdministrativeArea',
              name: 'Yvelines',
              alternateName: '78'
            },
            {
              '@type': 'AdministrativeArea',
              name: 'Essonne',
              alternateName: '91'
            },
            {
              '@type': 'AdministrativeArea',
              name: 'Hauts-de-Seine',
              alternateName: '92'
            }
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Paris',
            addressRegion: 'Île-de-France',
            addressCountry: 'FR',
            postalCode: '75000'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 48.8566,
            longitude: 2.3522
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '06:00',
              closes: '23:00'
            }
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '127',
            bestRating: '5',
            worstRating: '1'
          },
          review: [
            {
              '@type': 'Review',
              author: {
                '@type': 'Person',
                name: 'Marie D.'
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5'
              },
              reviewBody: 'Service exceptionnel ! Intervention rapide et efficace pour un problème de rats. Technicien très professionnel.'
            }
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services Anti-Nuisibles Paris & Île-de-France',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Dératisation Paris',
                  description: 'Service professionnel de dératisation à Paris. Élimination garantie de rats et souris. Intervention 24h/24.',
                  areaServed: 'Paris, Île-de-France'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Désinsectisation Paris',
                  description: 'Traitement professionnel contre cafards, punaises de lit, fourmis et autres insectes nuisibles à Paris.',
                  areaServed: 'Paris, Île-de-France'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Désinfection',
                  description: 'Désinfection professionnelle des locaux contre virus et bactéries.',
                  areaServed: 'Paris, Île-de-France'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Traitement Punaises de Lit',
                  description: 'Élimination complète des punaises de lit. Traitement thermique et chimique. Garantie anti-réinfestation.',
                  areaServed: 'Paris, Île-de-France'
                }
              }
            ]
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+33767393885',
            contactType: 'Service Client',
            availableLanguage: 'French',
            areaServed: 'FR'
          },
          sameAs: [
            'https://www.facebook.com/hygiene-protect-3d',
            'https://www.google.com/maps/place/hygiene-protect-3d'
          ]
        })}
      </script>

      {/* FAQ Schema pour améliorer les rich snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Combien coûte une dératisation à Paris ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Le prix d\'une dératisation à Paris varie entre 80€ et 300€ selon la superficie et le niveau d\'infestation. Devis gratuit sur simple appel au 07 67 39 38 85.'
              }
            },
            {
              '@type': 'Question',
              name: 'Intervenez-vous en urgence le weekend ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Oui, nous intervenons 7j/7 y compris weekends et jours fériés pour toute urgence de dératisation ou désinsectisation en Île-de-France.'
              }
            },
            {
              '@type': 'Question',
              name: 'Vos traitements sont-ils garantis ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tous nos traitements bénéficient d\'une garantie de résultat. En cas de réinfestation, nous repassons gratuitement.'
              }
            }
          ]
        })}
      </script>

      {/* Service Schema pour chaque service */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Dératisation et Désinsectisation',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Hygiène Protect 3D'
          },
          areaServed: {
            '@type': 'State',
            name: 'Île-de-France'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services Anti-Nuisibles',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Dératisation Express Paris',
                  description: 'Intervention d\'urgence dans l\'heure pour éliminer rats et souris à Paris et proche banlieue.'
                }
              }
            ]
          }
        })}
      </script>

      {/* Breadcrumb Schema (si applicable) */}
      {!isHomePage && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: siteUrl
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: title,
                item: canonicalUrl
              }
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;