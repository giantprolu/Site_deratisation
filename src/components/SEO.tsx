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
  description = "Hygiène Protect 3D : Expert en dératisation, désinsectisation et désinfection à Bondy et Île-de-France. Intervention rapide 7j/7. Devis gratuit ☎ 07 67 39 38 85",
  canonical,
  type = 'website',
  name = 'Hygiène Protect 3D',
  image = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  keywords = 'dératisation Bondy, désinsectisation Île-de-France, désinfection 93, extermination nuisibles, dératisation Paris, punaises de lit, cafards, rats, souris, hygiène 3D, devis gratuit dératisation',
}) => {
  const siteUrl = "https://site-deratisation.vercel.app";
  
  // Construire l'URL canonique correctement
  const canonicalUrl = canonical 
    ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}`)
    : (typeof window !== "undefined" ? window.location.href : siteUrl);
  
  const isHomePage = !canonical || canonical === "/";
  
  // Titre optimisé SEO (50-60 caractères)
  const pageTitle = isHomePage 
    ? `${name} - Dératisation Bondy & Île-de-France | Devis Gratuit` 
    : `${title} | ${name}`;

  return (
    <Helmet>
      {/* Standard metadata */}
      <html lang="fr" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Hygiène Protect 3D" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
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

      {/* Local Business Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': `${siteUrl}#organization`,
          name: 'Hygiène Protect 3D',
          url: siteUrl,
          logo: image,
          image: image,
          description: description,
          priceRange: '$$',
          telephone: '+33767393885',
          areaServed: [
            {
              '@type': 'City',
              name: 'Bondy',
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: 'Île-de-France'
              }
            },
            {
              '@type': 'AdministrativeArea',
              name: 'Île-de-France'
            }
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bondy',
            addressRegion: 'Île-de-France',
            addressCountry: 'FR'
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '18:00'
            }
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services de dératisation et désinsectisation',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Dératisation',
                  description: 'Service professionnel de dératisation pour éliminer rats et souris'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Désinsectisation',
                  description: 'Traitement contre cafards, punaises de lit et autres insectes nuisibles'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Désinfection',
                  description: 'Désinfection professionnelle des locaux'
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