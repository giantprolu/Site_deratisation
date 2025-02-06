import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Politique de Confidentialité"
        description="Politique de confidentialité et protection des données personnelles de CleanPro."
        canonical="/politique-de-confidentialite"
      />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
          
          <div className="prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Collecte des données</h2>
              <p className="text-gray-600 mb-4">
                Nous collectons les informations que vous nous fournissez directement, notamment :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Base légale du traitement</h2>
              <p className="text-gray-600 mb-4">
                Nous traitons vos données personnelles sur les bases légales suivantes :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Votre consentement (ex. : abonnement à une newsletter)</li>
                <li>L'exécution d'un contrat (ex. : fourniture de services)</li>
                <li>Nos obligations légales (ex. : facturation, comptabilité)</li>
                <li>Notre intérêt légitime (ex. : amélioration de nos services, prévention de la fraude)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Durée de conservation des données</h2>
              <p className="text-gray-600 mb-4">
                Vos données personnelles sont conservées aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, dans le respect des exigences légales et réglementaires en vigueur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Partage des données</h2>
              <p className="text-gray-600 mb-4">
                Vos données peuvent être partagées avec des partenaires de confiance uniquement dans le cadre des finalités mentionnées dans cette politique. Nous nous assurons que ces partenaires respectent les réglementations en vigueur, notamment le RGPD.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Protection des données</h2>
              <p className="text-gray-600 mb-4">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisée.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Vos droits</h2>
              <p className="text-gray-600 mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Vous pouvez exercer ces droits en nous contactant via les coordonnées ci-dessous.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies et traceurs</h2>
              <p className="text-gray-600 mb-4">
                Nous utilisons des cookies et autres technologies similaires pour améliorer votre expérience utilisateur et mesurer l’audience de notre site. Vous pouvez gérer vos préférences via notre bannière de gestion des cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact</h2>
              <p className="text-gray-600 mb-4">
                Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter à :<br />
                <strong>Email :</strong> privacy@cleanpro.fr<br />
                <strong>Adresse :</strong> 1 rue de la Propreté, 75001 Paris
              </p>
              <p className="text-gray-600 text-sm">
                Dernière mise à jour : [insérer la date]
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;