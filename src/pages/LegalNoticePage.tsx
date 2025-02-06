import React from 'react';
import SEO from '../components/SEO';

const LegalNoticePage = () => {
  return (
    <>
      <SEO
        title="Mentions Légales"
        description="Mentions légales et informations juridiques de CleanPro."
        canonical="/mentions-legales"
      />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
          
          <div className="prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informations légales</h2>
              <p className="text-gray-600 mb-4">
                HygièneProtect3D<br />
                Numéro de SIRET : 510 856 032 00030<br />
                Téléphone : 07 67 39 38 85<br />
                Email : contact@hygieneprotect3D.fr<br />
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hébergement</h2>
              <p className="text-gray-600 mb-4">
                Ce site est hébergé par : OVH<br />
                Site web : https://www.ovh.com/<br />
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
              <p className="text-gray-600 mb-4">
              Le site et chacun des éléments qui le composent, y compris les textes, images, photographies, illustrations, 
              vidéos, représentations graphiques, logos et marques, sont la propriété exclusive de HygièneProtect3D ou sont 
              utilisés avec l'autorisation de leurs propriétaires respectifs. Toute reproduction, représentation, adaptation 
              ou modification, partielle ou totale, de tout ou partie du site ou de l'un de ses éléments, par quelque procédé 
              que ce soit, est interdite sans l'autorisation préalable écrite de HygièneProtect3D.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Données Personnelles</h2>
              <p className="text-gray-600 mb-4">
              HygièneProtect3D s'engage à protéger la vie privée de ses utilisateurs. Les informations collectées via le 
              site sont utilisées exclusivement par HygièneProtect3D pour répondre aux demandes d'information et de devis. 
              Conformément à la réglementation applicable en matière de protection des données, vous disposez d'un droit 
              d'accès, de rectification et de suppression des données personnelles vous concernant. Vous pouvez exercer ce 
              droit en contactant M. Rik Sami à l'adresse email contact@hygieneprotect3D.fr.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalNoticePage;