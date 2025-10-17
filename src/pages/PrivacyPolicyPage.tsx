import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Politique de Confidentialité RGPD"
        description="Découvrez notre politique de confidentialité et de protection des données personnelles RGPD. Hygiène Protect 3D respecte votre vie privée et sécurise vos informations personnelles conformément au RGPD et à la législation française."
        canonical="/politique-de-confidentialite"
        keywords="politique de confidentialité, RGPD, protection données personnelles, vie privée, cookies, Hygiène Protect 3D, CNIL"
      />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité et Protection des Données</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chez <strong>Hygiène Protect 3D</strong>, nous accordons une importance primordiale à la protection de vos données personnelles. Cette politique de confidentialité détaille la manière dont nous collectons, utilisons, stockons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD) et à la législation française en vigueur. En utilisant notre site web ou nos services de dératisation, désinsectisation et désinfection, vous acceptez les pratiques décrites dans cette politique.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Collecte des données personnelles</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nous collectons les informations que vous nous fournissez directement lorsque vous utilisez nos services, demandez un devis, remplissez notre formulaire de contact ou nous contactez par téléphone. Les données collectées peuvent inclure :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Informations d'identification</strong> : Nom, prénom, raison sociale pour les professionnels</li>
                <li><strong>Coordonnées</strong> : Adresse email, numéro de téléphone fixe et/ou mobile</li>
                <li><strong>Adresse</strong> : Adresse postale complète du lieu d'intervention (rue, code postal, ville)</li>
                <li><strong>Informations de service</strong> : Nature de l'infestation, type de nuisibles (rats, souris, cafards, punaises de lit, frelons), surface à traiter, photos du problème</li>
                <li><strong>Données de navigation</strong> : Adresse IP, type de navigateur, pages visitées, durée de visite via cookies</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nous ne collectons jamais de données sensibles (origine ethnique, opinions politiques, convictions religieuses, santé) sauf si elles sont strictement nécessaires pour la prestation de nos services (par exemple, allergies aux produits biocides).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Base légale et finalités du traitement</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nous traitons vos données personnelles sur les bases légales suivantes, conformément à l'article 6 du RGPD :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Exécution d'un contrat</strong> : Pour traiter vos demandes de devis, planifier nos interventions de dératisation, désinsectisation ou désinfection, et assurer le suivi de nos prestations</li>
                <li><strong>Obligations légales</strong> : Pour établir et conserver les factures, respecter nos obligations comptables et fiscales, et tenir le registre des traitements phytosanitaires</li>
                <li><strong>Intérêt légitime</strong> : Pour améliorer nos services, réaliser des statistiques d'utilisation, prévenir la fraude et assurer la sécurité de notre site web</li>
                <li><strong>Consentement</strong> : Pour l'envoi de notre newsletter, communications commerciales et utilisation de certains cookies non essentiels (vous pouvez retirer ce consentement à tout moment)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Durée de conservation des données</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Vos données personnelles sont conservées aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Données clients actifs</strong> : Pendant toute la durée de la relation commerciale et jusqu'à 3 ans après la dernière interaction</li>
                <li><strong>Documents comptables et factures</strong> : 10 ans conformément au Code de commerce français</li>
                <li><strong>Données de prospection commerciale</strong> : 3 ans à compter du dernier contact avec le prospect</li>
                <li><strong>Cookies et traceurs</strong> : Maximum 13 mois conformément aux recommandations de la CNIL</li>
                <li><strong>Données d'archivage légal</strong> : Durées imposées par la réglementation applicable (registres phytosanitaires, etc.)</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                À l'issue de ces délais, vos données sont soit supprimées définitivement, soit anonymisées de manière irréversible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Partage et transfert des données</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Vos données peuvent être partagées avec des partenaires de confiance uniquement dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Prestataires de services</strong> : Hébergeur web (Vercel), service d'emailing, outils de gestion (sous-traitants RGPD avec contrat de conformité)</li>
                <li><strong>Fournisseurs de produits</strong> : Pour la commande de produits biocides spécifiques nécessaires à votre intervention</li>
                <li><strong>Obligations légales</strong> : Autorités administratives, fiscales ou judiciaires en cas de réquisition légale</li>
                <li><strong>Partenaires commerciaux</strong> : Uniquement avec votre consentement explicite préalable</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nous nous assurons que ces partenaires respectent le RGPD et offrent des garanties suffisantes de protection. Vos données ne sont jamais vendues à des tiers. Aucun transfert de données n'est effectué hors de l'Union Européenne.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Sécurité et protection des données</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation, perte ou destruction :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Chiffrement</strong> : Protocole HTTPS/SSL pour toutes les communications avec notre site web</li>
                <li><strong>Contrôle d'accès</strong> : Accès limité aux seuls personnels autorisés avec authentification forte</li>
                <li><strong>Sauvegardes régulières</strong> : Copies de sécurité chiffrées et stockées dans des environnements sécurisés</li>
                <li><strong>Mises à jour</strong> : Systèmes et logiciels maintenus à jour avec les derniers correctifs de sécurité</li>
                <li><strong>Formation du personnel</strong> : Sensibilisation régulière de nos équipes aux bonnes pratiques RGPD et sécurité informatique</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Vos droits RGPD</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Droit d'accès</strong> : Obtenir une copie de toutes les données personnelles que nous détenons sur vous</li>
                <li><strong>Droit de rectification</strong> : Corriger ou mettre à jour vos informations inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement (droit à l'oubli)</strong> : Demander la suppression de vos données dans certaines conditions</li>
                <li><strong>Droit à la limitation du traitement</strong> : Restreindre temporairement l'utilisation de vos données</li>
                <li><strong>Droit à la portabilité</strong> : Recevoir vos données dans un format structuré et lisible par machine</li>
                <li><strong>Droit d'opposition</strong> : Vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière</li>
                <li><strong>Droit de retirer votre consentement</strong> : À tout moment pour les traitements basés sur le consentement</li>
                <li><strong>Droit de définir des directives post-mortem</strong> : Concernant la conservation, l'effacement et la communication de vos données après votre décès</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Pour exercer ces droits, contactez-nous par email à <strong>hygieneprotect3d@hotmail.com</strong> ou par téléphone au <strong>07 67 39 38 85</strong>. Nous vous répondrons dans un délai maximum d'un mois. Une pièce d'identité pourra vous être demandée pour vérifier votre identité.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Vous avez également le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) si vous estimez que vos droits ne sont pas respectés : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">www.cnil.fr</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies et technologies de suivi</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Notre site utilise des cookies et autres technologies similaires pour améliorer votre expérience utilisateur, mesurer l'audience et optimiser nos services de dératisation, désinsectisation et désinfection :
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Types de cookies utilisés :</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Cookies essentiels</strong> : Nécessaires au fonctionnement du site (navigation, sécurité, session). Ils ne nécessitent pas de consentement.</li>
                <li><strong>Cookies de performance</strong> : Google Analytics pour mesurer l'audience et analyser le comportement des visiteurs (données anonymisées)</li>
                <li><strong>Cookies fonctionnels</strong> : Mémorisation de vos préférences (langue, consentement cookies, formulaires)</li>
              </ul>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Vous pouvez à tout moment modifier vos préférences de cookies via les paramètres de votre navigateur ou notre bannière de gestion des cookies. Le refus de certains cookies peut limiter certaines fonctionnalités du site. Pour plus d'informations sur la gestion des cookies, consultez : <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">Guide CNIL sur les cookies</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modifications de la politique</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment pour refléter les évolutions légales, réglementaires ou de nos pratiques. Toute modification substantielle sera portée à votre connaissance via un avis sur notre site web ou par email si vous êtes client. La version actualisée sera datée et accessible en permanence sur cette page. Nous vous encourageons à consulter régulièrement cette politique.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                Dernière mise à jour : 17 octobre 2025
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact et délégué à la protection des données</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Pour toute question concernant notre politique de confidentialité, l'exercice de vos droits RGPD ou nos pratiques de protection des données personnelles, vous pouvez nous contacter :
              </p>
              <div className="bg-primary-50 p-6 rounded-lg border-2 border-primary-200">
                <p className="text-gray-900 mb-3 text-lg font-bold">Hygiène Protect 3D</p>
                <p className="text-gray-700 mb-2"><strong>Email</strong> : <a href="mailto:HYGIENEPROTECT3D@hotmail.com" className="text-primary-600 hover:underline font-semibold">hygieneprotect3d@hotmail.com</a></p>
                <p className="text-gray-700 mb-2"><strong>Téléphone</strong> : <a href="tel:+33767393885" className="text-primary-600 hover:underline font-semibold">07 67 39 38 85</a></p>
                <p className="text-gray-700 mb-2"><strong>Horaires</strong> : Lundi - Vendredi : 8h00 - 18h00</p>
                <p className="text-gray-700 mb-2"><strong>Zone d'intervention</strong> : Bondy et Île-de-France (Seine-Saint-Denis, Paris, Val-de-Marne, Seine-et-Marne)</p>
                <p className="text-gray-700 mt-4"><strong>Services</strong> : Dératisation professionnelle, désinsectisation (cafards, punaises de lit, frelons asiatiques), désinfection, dépigeonnage</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
