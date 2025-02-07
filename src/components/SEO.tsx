import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  name?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description ="Hygiène Protect 3D : spécialiste de la dératisation, désinsectisation et désinfection. Contactez-nous pour un service rapide et efficace.",
  canonical,
  type = 'website',
  name = 'Hygiène Protect 3D',
  image = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
}) => {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://site-deratisation.vercel.app";
  const url = canonical && canonical.startsWith("/") ? `${siteUrl}${canonical}` : siteUrl;
  const isHomePage = url === siteUrl;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{isHomePage ? name : `${title} | ${name}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="dératisation, désinsectisation, désinfection, hygiène, nettoyage, entreprise, services" />
      <meta name="author" content="Hygiène Protect 3D" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: name,
          url: siteUrl,
          logo: image,
          description: description,
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'FR'
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;