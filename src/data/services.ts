import React from 'react';
import { Building2, Bug, Rat, Bird, Sparkles, BoxesIcon, Fan } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  metaDescription: string;
  features: string[];
  benefits: string[];
  image: string;
  imageAlt?: string;
  imageTitle?: string;
  interventionSteps: { icon: string; title: string; description: string }[];
  equipments?: { 
    name: string; 
    description: string; 
    image: string;
    imageAlt?: string;
    imageTitle?: string;
  }[];
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Dératisation Professionnelle à Paris',
    slug: 'deratisation',
    description: 'Expert en dératisation à Paris et Île-de-France. Élimination rapide et garantie des rats, souris et rongeurs nuisibles. Solutions professionnelles certifiées pour particuliers, entreprises, restaurants et commerces. Intervention d\'urgence 24h/7j avec techniciens diplômés.',
    fullDescription: `Notre service professionnel de dératisation à Paris et en région parisienne offre une protection complète contre toutes les infestations de rongeurs urbains (rats noirs, rats d'égout, souris domestiques, mulots). Spécialistes certifiés de la lutte antiparasitaire en milieu urbain dense, nous intervenons rapidement dans tous les arrondissements de Paris et en Île-de-France chez les particuliers, entreprises, restaurants, hôtels, commerces alimentaires, copropriétés et collectivités. Nos techniciens diplômés Certibiocide utilisent des méthodes éprouvées et des rodenticides professionnels homologués, respectueux de l'environnement et conformes aux normes sanitaires strictes. Nous garantissons une élimination durable et définitive des rongeurs grâce à une approche globale associant diagnostic précis, traitement curatif ciblé et prévention long terme. Discrétion assurée et conformité HACCP pour les professionnels de la restauration.`,
    icon: Rat,
    metaDescription: 'Dératisation Paris - Expert certifié anti-rats & souris. Intervention rapide 24h/7j tous arrondissements. Devis gratuit, garantie résultat. Traitement professionnel Île-de-France.',
    imageAlt: 'Intervention de dératisation professionnelle à Paris - Technicien expert éliminant les rongeurs nuisibles avec équipement certifié',
    imageTitle: 'Dératisation Paris - Traitement professionnel anti-rats et souris par expert certifié Certibiocide',
    features: [
      'Inspection approfondie et diagnostic expert : localisation des nids, identification des voies d\'accès et zones à risque dans vos locaux parisiens',
      'Identification précise des espèces (rats noirs communs à Paris, rats d\'égout, souris domestiques) et évaluation du niveau d\'infestation',
      'Traitement professionnel avec postes d\'appâtage sécurisés certifiés et rodenticides homologués à action rapide',
      'Colmatage hermétique et sécurisation de tous les points d\'entrée potentiels (fissures, gaines techniques, conduits, ventilations)',
      'Décontamination et désinfection complète des zones infestées pour éliminer bactéries et odeurs',
      'Installation de dispositifs de surveillance et de prévention pour détecter toute nouvelle activité',
      'Protection durable de vos installations contre les dommages (câblages électriques, isolation, cloisons, canalisations)',
      'Formation et conseils personnalisés sur les bonnes pratiques d\'hygiène urbaine et de prévention',
      'Suivi rigoureux post-traitement avec contrôles réguliers et ajustements si nécessaire',
      'Rapports d\'intervention détaillés et certificats de traitement pour vos obligations réglementaires'
    ],
    benefits: [
      'Intervention d\'urgence rapide sous 2h dans tous les arrondissements de Paris et petite couronne',
      'Élimination garantie à 100% avec engagement écrit de résultat et passages supplémentaires inclus si besoin',
      'Respect scrupuleux des normes HACCP pour restaurants et des réglementations sanitaires parisiennes',
      'Solutions éco-responsables prioritaires avec rodenticides certifiés et techniques de capture non toxiques',
      'Techniciens experts diplômés Certibiocide avec formation continue et équipements professionnels',
      'Discrétion absolue garantie : véhicules banalisés sans marquage, interventions hors heures si souhaité',
      'Tarifs transparents et compétitifs pour Paris avec devis détaillé gratuit et sans engagement',
      'Service après-vente et garantie de réintervention gratuite pendant 6 mois'
    ],
    image: '/images/deratisation.webp',
    interventionSteps: [
      { 
        icon: "https://img.icons8.com/sf-regular/48/search.png", 
        title: "Diagnostic Expert", 
        description: "Inspection minutieuse de votre établissement parisien : identification précise des espèces de rongeurs, localisation des nids et galeries, cartographie des passages utilisés, évaluation du niveau d'infestation et analyse des facteurs favorisants (déchets, stockage alimentaire, ouvertures)." 
      },
      { 
        icon: "https://img.icons8.com/ios/50/bug.png", 
        title: "Traitement Professionnel", 
        description: "Déploiement de notre stratégie d'éradication : installation stratégique de postes d'appâtage verrouillés, pose de pièges mécaniques nouvelle génération, application de rodenticides professionnels à action rapide et sécurisée. Techniques adaptées aux spécificités parisiennes (immeubles anciens, caves, sous-sols, gaines techniques)." 
      },
      { 
        icon: "https://img.icons8.com/ios/50/shield.png", 
        title: "Sécurisation & Suivi", 
        description: "Protection long terme de vos locaux : colmatage professionnel de tous les accès avec matériaux durables, installation de grilles anti-rongeurs sur aérations, pose de brosses sur seuils de portes. Programme de surveillance avec passages de contrôle réguliers et rapport détaillé après chaque visite." 
      },
    ],
    equipments: [
      {
        name: 'Postes d\'Appâtage Sécurisés Nouvelle Génération',
        description: 'Stations d\'appâtage professionnelles ultra-sécurisées avec système de verrouillage à clé inviolable, spécialement conçues pour les environnements urbains parisiens. Ces boîtiers robustes en plastique haute densité anti-UV protègent les rodenticides des intempéries et empêchent tout accès accidentel (enfants, animaux domestiques, oiseaux). Équipés de compartiments à appâts et de pièges mécaniques intégrés. Traçabilité optimale avec système de numérotation pour suivi GPS. Conformes aux normes européennes de sécurité biocides. Essentiels pour une dératisation responsable et efficace en milieu urbain dense.',
        image: '/images/deratisation.webp',
        imageAlt: 'Poste d\'appâtage sécurisé professionnel pour dératisation Paris avec verrouillage certifié',
        imageTitle: 'Station appâtage anti-rats Paris - Équipement sécurisé certifié pour milieu urbain'
      },
      {
        name: 'Pièges Mécaniques Professionnels Sans Toxique',
        description: 'Gamme complète de pièges mécaniques nouvelle génération pour capture sans poison : pièges à ressort haute performance, nasses métalliques multi-captures, pièges électroniques à détection infrarouge. Solutions alternatives écologiques privilégiées pour les zones sensibles parisiennes (écoles, crèches, hôpitaux, cuisines professionnelles). Installation stratégique le long des chemins de passage identifiés. Réarmement et vidage lors de chaque visite de contrôle. Respectueux de l\'environnement urbain et conformes aux exigences HACCP pour le secteur alimentaire.',
        image: '/images/deratisation.webp',
        imageAlt: 'Pièges mécaniques professionnels sans toxique pour capture de rongeurs Paris',
        imageTitle: 'Pièges anti-rats écologiques Paris - Capture sans poison certifiée professionnels'
      },
      {
        name: 'Équipements de Détection et Monitoring Connectés',
        description: 'Technologie de pointe pour surveillance continue des rongeurs : détecteurs de mouvement à capteurs infrarouges, caméras thermiques portables pour repérage dans les zones obscures (caves, sous-sols parisiens), systèmes de monitoring connectés avec alertes en temps réel. Poudre de tracking fluorescente pour visualiser les déplacements sous lumière UV. Kit d\'inspection complet avec lampe torche LED haute puissance, miroir télescopique, endoscope flexible pour gaines techniques. Ces outils professionnels permettent un diagnostic précis et un suivi rigoureux de l\'efficacité du traitement.',
        image: '/images/deratisation.webp',
        imageAlt: 'Équipements de détection professionnels pour surveillance rongeurs Paris',
        imageTitle: 'Système monitoring anti-rats Paris - Détection connectée professionnelle'
      }
    ]
  },
  {
    id: '2',
    title: 'Désinfection Professionnelle à Paris',
    slug: 'desinfection',
    description: 'Service professionnel de désinfection à Paris et Île-de-France. Élimination totale des bactéries, virus et parasites après infestation. Traitement complet des surfaces et de l\'air pour un environnement sain et sécurisé. Intervention rapide avec produits certifiés.',
    fullDescription: 'Notre service de désinfection professionnelle garantit un assainissement complet de vos locaux à Paris et en région parisienne. Après une infestation de nuisibles (rongeurs, insectes) ou en prévention, nous intervenons avec des protocoles rigoureux pour éliminer tous les agents pathogènes : bactéries, virus, champignons et parasites. Nous utilisons des produits biocides professionnels homologués par l\'ANSM et des techniques de nébulisation avancées pour traiter l\'ensemble des surfaces et volumes. Nos interventions respectent scrupuleusement les normes d\'hygiène HACCP et les protocoles sanitaires les plus stricts. Adaptées aux particuliers, professionnels de santé, restaurateurs, hôteliers et entreprises, nos prestations incluent la décontamination complète, le traitement de l\'air et la certification de salubrité.',
    icon: Sparkles,
    metaDescription: 'Désinfection Paris - Service professionnel certifié. Élimination bactéries, virus, parasites. Traitement post-infestation. Devis gratuit, intervention rapide 24h/7j.',
    imageAlt: 'Technicien en équipement de protection effectuant une désinfection professionnelle à Paris',
    imageTitle: 'Désinfection professionnelle Paris - Traitement certifié par experts sanitaires',
    features: [
      'Élimination complète des germes, bactéries pathogènes et virus (dont coronavirus)',
      'Désinfection professionnelle de toutes surfaces contaminées (sols, murs, mobilier, équipements)',
      'Traitement de l\'air ambiant par nébulisation ou thermo-nébulisation',
      'Décontamination après infestation de rongeurs ou d\'insectes',
      'Application de produits virucides, bactéricides et fongicides homologués',
      'Respect strict des protocoles sanitaires HACCP et des normes d\'hygiène',
      'Prévention des risques sanitaires et des maladies transmissibles',
      'Certification de traitement avec attestation de conformité',
      'Conseils pour maintenir un environnement sain durablement',
      'Intervention rapide 24h/24 et 7j/7 pour urgences sanitaires'
    ],
    benefits: [
      'Assainissement total et certifié de vos espaces professionnels ou résidentiels',
      'Protection maximale contre les maladies liées aux nuisibles (leptospirose, salmonellose, etc.)',
      'Produits professionnels respectueux de l\'environnement et sans danger après séchage',
      'Conformité garantie aux normes sanitaires pour audits et contrôles',
      'Intervention discrète avec respect de votre activité et de vos horaires',
      'Techniciens formés aux protocoles de biosécurité et équipés d\'EPI complets',
      'Traçabilité complète avec rapports d\'intervention détaillés',
      'Tarifs adaptés aux professionnels avec devis personnalisé gratuit'
    ],
    image: '/images/desinfection.webp',
    interventionSteps: [
      {
        icon: "https://img.icons8.com/ios/50/microscope.png",
        title: 'Diagnostic Sanitaire',
        description: 'Évaluation approfondie des zones contaminées, identification des agents pathogènes présents, analyse des risques sanitaires et définition du protocole de désinfection adapté.'
      },
      {
        icon: "https://img.icons8.com/ios/50/spray.png",
        title: 'Traitement Intensif',
        description: 'Application de solutions désinfectantes professionnelles par pulvérisation, nébulisation ou atomisation. Traitement complet des surfaces, volumes et circuits d\'air selon les normes en vigueur.'
      },
      {
        icon: "https://img.icons8.com/ios/50/shield.png",
        title: 'Prévention & Suivi',
        description: 'Mise en place de protocoles d\'hygiène préventifs, formation du personnel aux bonnes pratiques, contrôles post-traitement et certification sanitaire de vos locaux.'
      }
    ],
    equipments: [
      {
        name: 'Nébulisateurs Professionnels ULV',
        description: 'Équipements de nébulisation à froid dernière génération pour une diffusion optimale des produits désinfectants. Ces appareils ULV (Ultra Low Volume) produisent un brouillard ultra-fin qui atteint tous les recoins, surfaces et volumes. Idéals pour la désinfection complète de grands espaces, bureaux, restaurants, hôtels et locaux commerciaux. Efficacité maximale avec une consommation minimale de produits.',
        image: '/images/desinfection.webp',
        imageAlt: 'Nébulisateur professionnel ULV pour désinfection complète des locaux',
        imageTitle: 'Équipement de nébulisation professionnelle - Désinfection totale Paris'
      },
      {
        name: 'Produits Biocides Certifiés',
        description: 'Gamme complète de désinfectants professionnels homologués par l\'ANSM : virucides (efficaces contre coronavirus), bactéricides, fongicides et sporicides. Produits aux normes EN 14476, EN 1276 et EN 13697, adaptés aux secteurs alimentaire, médical et industriel. Solutions écologiques disponibles pour les environnements sensibles. Traçabilité complète avec fiches de données de sécurité.',
        image: '/images/desinfection.webp',
        imageAlt: 'Produits désinfectants professionnels certifiés pour assainissement',
        imageTitle: 'Biocides professionnels homologués - Désinfection certifiée Paris'
      },
      {
        name: 'Équipements de Protection Intégrale',
        description: 'Tenues de protection complètes pour interventions en zones contaminées : combinaisons jetables étanches, masques respiratoires FFP3, lunettes de protection, gants nitrile professionnels et sur-chaussures. Équipements conformes aux normes européennes EN 14126 pour la protection contre les agents infectieux. Sécurité maximale de nos techniciens et de vos occupants pendant et après l\'intervention.',
        image: '/images/desinfection.webp',
        imageAlt: 'Équipement de protection individuelle complet pour désinfection',
        imageTitle: 'EPI professionnel désinfection - Protection maximale techniciens Paris'
      }
    ]
  },
  {
    id: '3',
    title: 'Désinsectisation Professionnelle à Paris',
    slug: 'desinsectisation',
    description: 'Expert en désinsectisation à Paris et Île-de-France. Élimination définitive des cafards, punaises de lit, frelons asiatiques, guêpes, fourmis, mites et tous insectes nuisibles. Traitement garanti avec produits professionnels homologués. Intervention rapide particuliers et entreprises.',
    fullDescription: 'Notre service professionnel de désinsectisation à Paris offre une protection complète contre tous les types d\'insectes nuisibles et rampants. Spécialistes certifiés des infestations urbaines, nous intervenons rapidement contre les cafards (blattes germaniques et orientales), punaises de lit, frelons asiatiques, guêpes, frelons européens, fourmis, mites alimentaires et textiles, puces, araignées, poissons d\'argent et autres nuisibles. Nos techniciens diplômés Certibiocide utilisent des insecticides professionnels de dernière génération, respectueux de l\'environnement et conformes aux réglementations. Nous adaptons nos méthodes à chaque situation : pulvérisation, fumigation, gel appât, pièges à phéromones, traitement thermique pour les punaises de lit. Interventions garanties pour particuliers, restaurants, hôtels, commerces alimentaires, bureaux et copropriétés dans tout Paris et la région parisienne.',
    icon: Bug,
    metaDescription: 'Désinsectisation Paris - Élimination cafards, punaises de lit, frelons, guêpes. Traitement professionnel garanti. Intervention rapide 24h. Devis gratuit Île-de-France.',
    imageAlt: 'Intervention de désinsectisation professionnelle à Paris contre cafards et insectes',
    imageTitle: 'Désinsectisation Paris - Traitement professionnel anti-insectes certifié',
    features: [
      'Diagnostic entomologique complet avec identification précise des espèces d\'insectes',
      'Traitement professionnel contre cafards, blattes et insectes rampants',
      'Élimination totale des punaises de lit par traitement chimique et/ou thermique',
      'Destruction des nids de guêpes, frelons asiatiques et frelons européens',
      'Lutte ciblée contre les fourmis charpentières et autres espèces invasives',
      'Traitement des mites alimentaires et textiles avec pièges à phéromones',
      'Éradication des puces pour protéger vos animaux et votre famille',
      'Prévention durable avec barrières insecticides et conseils personnalisés',
      'Produits biocides professionnels rémanents pour une action longue durée',
      'Interventions discrètes adaptées aux normes HACCP pour les professionnels de l\'alimentaire'
    ],
    benefits: [
      'Élimination rapide et garantie des insectes sous 24 à 48h maximum',
      'Respect strict des normes d\'hygiène et de sécurité alimentaire',
      'Solutions éco-responsables avec insecticides certifiés faible impact environnemental',
      'Techniciens certifiés Certibiocide formés aux dernières techniques',
      'Traitement adapté à chaque insecte avec garantie de résultat',
      'Intervention d\'urgence 7j/7 pour les infestations sévères',
      'Protection longue durée grâce aux produits rémanents professionnels',
      'Devis gratuit et tarifs transparents pour particuliers et professionnels'
    ],
    image: '/images/désinsectisation.webp',
    interventionSteps: [
      { 
        icon: "https://img.icons8.com/sf-regular/48/search.png", 
        title: "Inspection Entomologique", 
        description: "Diagnostic précis de l'infestation : identification des espèces, localisation des nids et zones de reproduction, évaluation du niveau d'infestation et des facteurs favorisant la prolifération." 
      },
      { 
        icon: "https://img.icons8.com/ios/50/bug.png", 
        title: "Traitement Professionnel", 
        description: "Application de traitements ciblés adaptés à chaque insecte : pulvérisation d'insecticides rémanents, pose de gel appât, fumigation, pièges à phéromones ou traitement thermique selon la situation." 
      },
      { 
        icon: "https://img.icons8.com/ios/50/shield.png", 
        title: "Prévention & Contrôle", 
        description: "Mise en place de mesures préventives durables : barrières insecticides, colmatage des accès, pièges de monitoring, conseils d'hygiène et contrôles de suivi pour éviter toute réinfestation." 
      },
    ],
    equipments: [
      {
        name: 'Pulvérisateurs Professionnels Haute Pression',
        description: 'Équipements de pulvérisation professionnels pour application précise des insecticides sur toutes surfaces. Nos pulvérisateurs haute pression permettent de traiter efficacement les zones difficiles d\'accès, fissures, plinthes et recoins où se cachent les insectes. Buses réglables pour adapter le débit et la diffusion selon les besoins. Cuves en matériaux résistants aux produits chimiques pour une utilisation durable et sécurisée.',
        image: '/images/désinsectisation.webp',
        imageAlt: 'Pulvérisateur professionnel haute pression pour traitement anti-insectes',
        imageTitle: 'Équipement pulvérisation insecticide - Désinsectisation professionnelle Paris'
      },
      {
        name: 'Insecticides Biocides Certifiés',
        description: 'Gamme complète d\'insecticides professionnels homologués à action rémanente prolongée. Produits spécifiques pour chaque type d\'insecte : anti-cafards, anti-punaises de lit, anti-fourmis, anti-guêpes. Formulations en gel appât, liquide de pulvérisation, poudre insecticide et fumigène. Efficacité prouvée avec action choc et protection longue durée. Produits respectueux de l\'environnement conformes aux normes européennes et utilisables en présence alimentaire après séchage.',
        image: '/images/désinsectisation.webp',
        imageAlt: 'Produits insecticides professionnels certifiés pour désinsectisation',
        imageTitle: 'Biocides anti-insectes certifiés - Traitement professionnel Paris'
      },
      {
        name: 'Détecteurs et Pièges à Monitoring',
        description: 'Dispositifs de détection précoce et de surveillance continue des insectes. Pièges à phéromones pour mites et autres nuisibles, plaques de glu professionnelles, détecteurs de mouvement infrarouges pour identification des zones d\'activité. Ces équipements permettent un suivi précis de l\'infestation, l\'évaluation de l\'efficacité des traitements et la détection rapide de toute réapparition. Essentiels pour le monitoring HACCP dans les secteurs alimentaires et la prévention durable.',
        image: '/images/désinsectisation.webp',
        imageAlt: 'Détecteurs de présence et pièges de monitoring pour insectes',
        imageTitle: 'Système de détection insectes - Monitoring professionnel Paris'
      }
    ]
  },
  {
    id: '4',
    title: 'Dépigeonnage Professionnel à Paris',
    slug: 'depigeonnage',
    description: 'Spécialiste du dépigeonnage à Paris et Île-de-France. Solutions durables contre les pigeons et volatiles nuisibles. Installation de pics anti-pigeons, filets de protection, répulsifs ultrasoniques. Protection des façades, balcons, toitures. Intervention certifiée immeubles et monuments.',
    fullDescription: 'Notre service professionnel de dépigeonnage à Paris protège efficacement vos bâtiments contre les nuisances et dégradations causées par les pigeons et autres volatiles. Les pigeons urbains représentent un véritable fléau pour les immeubles parisiens : leurs fientes corrosives attaquent les façades, leurs nids obstruent les gouttières, et leurs parasites menacent la santé publique. Experts en effarouchement d\'oiseaux, nous proposons des solutions éthiques, durables et conformes à la réglementation sur la protection animale. Nos méthodes incluent l\'installation de pics anti-pigeons en acier inoxydable, la pose de filets de protection discrets, les systèmes répulsifs à ultrasons et les fils tendus. Nous intervenons sur tous types de bâtiments : immeubles résidentiels, monuments historiques, bâtiments industriels, commerces, hôtels, églises. Service complet incluant le nettoyage et la désinfection des zones souillées par les fientes.',
    icon: Bird,
    metaDescription: 'Dépigeonnage Paris - Installation pics anti-pigeons, filets protection. Solutions durables contre volatiles. Devis gratuit. Expert protection bâtiments Île-de-France.',
    imageAlt: 'Installation de pics anti-pigeons sur façade parisienne par professionnel',
    imageTitle: 'Dépigeonnage Paris - Protection professionnelle contre pigeons et volatiles',
    features: [
      'Diagnostic complet des zones infestées et des points de nidification des pigeons',
      'Installation de pics anti-pigeons en acier inoxydable sur rebords, corniches et toitures',
      'Pose de filets de protection transparents et résistants pour balcons et coursives',
      'Systèmes d\'effarouchement à ultrasons et répulsifs visuels non nuisibles',
      'Fils tendus discrets pour empêcher le perchage sur les façades',
      'Nettoyage professionnel et désinfection des zones souillées par les fientes',
      'Colmatage des accès aux combles et greniers pour éviter la nidification',
      'Solutions respectueuses du bien-être animal conformes à la réglementation',
      'Maintenance et contrôles réguliers des installations anti-pigeons',
      'Interventions en hauteur sécurisées avec cordistes professionnels qualifiés'
    ],
    benefits: [
      'Protection durable des façades contre la corrosion des fientes acides',
      'Préservation de l\'esthétique et de la valeur patrimoniale de vos bâtiments',
      'Réduction des nuisances sonores et olfactives liées aux pigeons',
      'Prévention des risques sanitaires (maladies, parasites, allergies)',
      'Solutions éthiques sans danger pour les oiseaux ni pour l\'environnement',
      'Installation discrète et esthétique respectant l\'architecture parisienne',
      'Économies sur les frais de nettoyage et d\'entretien des façades',
      'Conformité aux règles de copropriété et aux normes urbanistiques parisiennes'
    ],
    image: '/images/dépigeonnage.webp',
    interventionSteps: [
      { 
        icon: "https://img.icons8.com/sf-regular/48/search.png", 
        title: "Diagnostic Avifaune", 
        description: "Analyse détaillée des zones à risque, identification des points de perchage et de nidification, évaluation du niveau d'infestation et des comportements des pigeons pour définir la stratégie d'éloignement optimale." 
      },
      { 
        icon: "https://img.icons8.com/ios/50/dove.png", 
        title: "Installation Protection", 
        description: "Mise en place des dispositifs anti-pigeons adaptés : pics en acier inoxydable, filets de protection haute résistance, systèmes à ultrasons, fils tendus. Travaux en hauteur sécurisés par cordistes certifiés." 
      },
      { 
        icon: "https://img.icons8.com/ios/50/shield.png", 
        title: "Entretien & Suivi", 
        description: "Nettoyage et désinfection des zones souillées, vérification régulière de l'efficacité des installations, maintenance préventive et conseils pour éviter le retour des volatiles. Garantie de durabilité." 
      },
    ],
    equipments: [
      {
        name: 'Pics Anti-Pigeons en Acier Inoxydable',
        description: 'Systèmes de picots professionnels en acier inoxydable 316 pour empêcher définitivement les pigeons de se poser. Disponibles en différentes largeurs et configurations pour s\'adapter à tous les supports : rebords de fenêtres, corniches, gouttières, enseignes, climatiseurs. Installation sur base polycarbonate UV-résistante collée ou vissée. Discrets, durables (garantie 10 ans), résistants aux intempéries et conformes aux réglementations urbaines. Solution la plus efficace et la plus économique à long terme.',
        image: '/images/dépigeonnage.webp',
        imageAlt: 'Pics anti-pigeons professionnels en acier inoxydable pour façades',
        imageTitle: 'Pics anti-pigeons Paris - Protection durable façades et rebords'
      },
      {
        name: 'Filets de Protection Anti-Volatiles',
        description: 'Filets professionnels haute résistance en polyéthylène traité anti-UV pour protéger balcons, coursives, patios et grandes surfaces. Mailles adaptées (50mm ou 75mm) pour bloquer pigeons et mouettes tout en restant discrets. Installation sur câbles périmétriques en acier inoxydable avec fixations murales certifiées. Résistants aux intempéries, aux UV et au feu (classement M2). Respectent l\'esthétique des bâtiments parisiens, même classés monuments historiques. Durée de vie exceptionnelle de 15 à 20 ans.',
        image: '/images/dépigeonnage.webp',
        imageAlt: 'Filets de protection anti-pigeons pour balcons et façades',
        imageTitle: 'Filets anti-volatiles Paris - Protection invisible et durable'
      },
      {
        name: 'Répulsifs Ultrasoniques Professionnels',
        description: 'Dispositifs d\'effarouchement à ultrasons de haute technologie pour éloigner les pigeons sans nuisance pour les humains. Émission d\'ondes sonores variables et imprévisibles perturbant l\'installation des volatiles. Rayon d\'action jusqu\'à 200m², réglables en intensité et fréquence. Alimentation secteur ou solaire pour zones difficiles d\'accès. Résistants aux intempéries (IP65), discrets et respectueux du bien-être animal. Idéaux pour toitures-terrasses, cours intérieures et zones sensibles où les pics ne peuvent être installés.',
        image: '/images/dépigeonnage.webp',
        imageAlt: 'Système répulsif ultrasonique professionnel anti-pigeons',
        imageTitle: 'Répulsif ultrasons pigeons Paris - Effarouchement éthique et efficace'
      }
    ]
  },
  {
    id: '5',
    title: 'Hygiène du Bâtiment à Paris',
    slug: 'hygiene-du-batiment',
    description: 'Services professionnels d\'hygiène et d\'entretien pour bâtiments à Paris. Nettoyage, désinfection, désodorisation des locaux professionnels et résidentiels. Protocoles HACCP pour restaurants et commerces alimentaires. Audits d\'hygiène et mise aux normes sanitaires.',
    fullDescription: 'Notre service d\'hygiène du bâtiment à Paris garantit un environnement sain, propre et conforme aux normes sanitaires les plus strictes. Nous intervenons auprès des entreprises, commerces, restaurants, hôtels, établissements de santé, copropriétés et particuliers pour maintenir des locaux irréprochables. Nos prestations incluent le nettoyage professionnel approfondi, la désinfection régulière des surfaces et équipements, la désodorisation, le traitement des sols et des sanitaires. Nous mettons en place des protocoles d\'hygiène personnalisés conformes aux normes HACCP pour les secteurs alimentaires, et aux réglementations sanitaires pour les établissements recevant du public. Nos équipes formées utilisent des produits professionnels écologiques certifiés Ecolabel. Service sur-mesure avec planning d\'intervention adapté à votre activité pour ne pas perturber votre fonctionnement.',
    icon: Building2,
    metaDescription: 'Hygiène bâtiment Paris - Nettoyage professionnel, désinfection locaux. Protocoles HACCP restaurants. Audit hygiène. Devis gratuit entreprises et particuliers.',
    imageAlt: 'Agent d\'hygiène professionnel effectuant le nettoyage et la désinfection d\'un bâtiment à Paris',
    imageTitle: 'Hygiène du bâtiment Paris - Services professionnels nettoyage et désinfection',
    features: [
      'Nettoyage professionnel approfondi de tous types de locaux et surfaces',
      'Désinfection régulière des zones à risque et points de contact',
      'Traitement et entretien des sols (carrelage, parquet, moquette, béton)',
      'Nettoyage et désinfection des sanitaires avec produits bactéricides',
      'Désodorisation et assainissement de l\'air ambiant',
      'Dépoussiérage et entretien du mobilier et des équipements',
      'Protocoles HACCP pour cuisines professionnelles et zones alimentaires',
      'Audits d\'hygiène avec rapports détaillés et recommandations',
      'Mise en conformité sanitaire pour contrôles officiels et certifications',
      'Formation du personnel aux bonnes pratiques d\'hygiène et de nettoyage'
    ],
    benefits: [
      'Environnement de travail sain et agréable pour vos collaborateurs',
      'Image professionnelle irréprochable auprès de vos clients et partenaires',
      'Conformité garantie aux normes sanitaires et réglementations en vigueur',
      'Réduction de l\'absentéisme grâce à un environnement hygiénique',
      'Produits écologiques certifiés respectueux de l\'environnement',
      'Interventions planifiées en dehors de vos heures d\'activité',
      'Traçabilité complète avec rapports d\'intervention et certificats',
      'Tarifs professionnels dégressifs selon la fréquence d\'intervention'
    ],
    image: '/images/hygienedubat.webp',
    interventionSteps: [
      {
        icon: "https://img.icons8.com/ios/50/checklist.png",
        title: 'Audit & Diagnostic',
        description: 'Évaluation complète de l\'état d\'hygiène de vos locaux, identification des zones à risque, analyse des besoins spécifiques et définition d\'un protocole d\'entretien personnalisé adapté à votre activité.'
      },
      {
        icon: "https://img.icons8.com/ios/50/broom.png",
        title: 'Nettoyage & Désinfection',
        description: 'Application des protocoles d\'hygiène avec produits professionnels certifiés : nettoyage méthodique, désinfection des surfaces, traitement des sols, entretien des sanitaires et désodorisation complète.'
      },
      {
        icon: "https://img.icons8.com/ios/50/calendar.png",
        title: 'Suivi Régulier',
        description: 'Interventions programmées selon planning établi, contrôles qualité réguliers, ajustement des protocoles si nécessaire, traçabilité avec rapports détaillés et certification de conformité sanitaire.'
      }
    ],
    equipments: [
      {
        name: 'Matériel de Nettoyage Professionnel',
        description: 'Équipements de nettoyage professionnels dernière génération pour une efficacité optimale : autolaveuses pour grands espaces, mono-brosses pour traitement des sols, aspirateurs HEPA professionnels, nettoyeurs vapeur haute pression pour désinfection écologique sans produits chimiques. Chariots de ménage complets équipés de tous les accessoires nécessaires. Matériel ergonomique pour la sécurité et le confort de nos agents d\'hygiène.',
        image: '/images/hygienedubat.webp',
        imageAlt: 'Équipement de nettoyage professionnel pour entretien hygiène bâtiments',
        imageTitle: 'Matériel nettoyage professionnel Paris - Équipements haute performance'
      },
      {
        name: 'Produits d\'Entretien Écologiques Certifiés',
        description: 'Gamme complète de produits d\'entretien professionnels écologiques certifiés Ecolabel : détergents multi-surfaces biodégradables, désinfectants bactéricides sans javel, dégraissants alimentaires, détartrants sanitaires, produits de traitement des sols. Formulations concentrées économiques et efficaces, sans danger pour l\'utilisateur et l\'environnement. Conformes aux normes de sécurité alimentaire pour utilisation en zones HACCP.',
        image: '/images/hygienedubat.webp',
        imageAlt: 'Produits d\'entretien écologiques professionnels certifiés',
        imageTitle: 'Produits nettoyage écologiques Paris - Certifiés Ecolabel professionnels'
      },
      {
        name: 'Systèmes de Traçabilité et Contrôle Qualité',
        description: 'Outils digitaux de traçabilité pour documenter et garantir la qualité de nos interventions : planning d\'intervention digitalisé, check-lists de contrôle qualité, relevés de température pour zones réfrigérées, rapports d\'intervention détaillés avec photos avant/après. Certificats de conformité sanitaire pour vos audits et contrôles officiels. Tableau de bord en ligne pour suivre l\'historique des prestations et planifier les interventions futures.',
        image: '/images/hygienedubat.webp',
        imageAlt: 'Système de traçabilité digitale pour contrôle qualité hygiène',
        imageTitle: 'Traçabilité hygiène Paris - Reporting et certification qualité digitale'
      }
    ]
  },
  {
    id: '6',
    title: 'Débarras Professionnel à Paris',
    slug: 'debarras-pro',
    description: 'Service de débarras professionnel à Paris et Île-de-France. Évacuation rapide de locaux, bureaux, caves, greniers, appartements. Tri sélectif, recyclage, enlèvement d\'encombrants. Intervention pour entreprises, particuliers, successions. Devis gratuit et tarifs transparents.',
    fullDescription: 'Notre service de débarras professionnel à Paris prend en charge l\'évacuation complète de tous types de locaux et l\'enlèvement d\'encombrants. Que ce soit pour vider un appartement après succession, débarrasser des bureaux avant déménagement, évacuer une cave ou un grenier, nettoyer un local commercial, nous intervenons rapidement avec une équipe expérimentée et équipée. Nous assurons le tri sélectif des objets et déchets : valorisation et don des objets réutilisables, recyclage des matériaux (bois, métal, plastique, papier), évacuation conforme des déchets dangereux, traitement spécifique des DEEE (équipements électriques et électroniques). Service complet incluant le démontage du mobilier si nécessaire, le nettoyage après débarras, et la remise en état des lieux. Interventions respectueuses de l\'environnement avec traçabilité complète et bordereaux de suivi des déchets.',
    icon: BoxesIcon,
    metaDescription: 'Débarras Paris - Évacuation locaux, appartements, bureaux. Tri sélectif, recyclage. Devis gratuit. Intervention rapide entreprises et particuliers Île-de-France.',
    imageAlt: 'Équipe de débarras professionnel évacuant un local à Paris',
    imageTitle: 'Débarras professionnel Paris - Évacuation et tri sélectif conformes',
    features: [
      'Débarras complet d\'appartements, maisons, bureaux, locaux commerciaux',
      'Évacuation de caves, greniers, garages et espaces de stockage encombrés',
      'Tri sélectif professionnel et valorisation des objets réutilisables',
      'Recyclage des matériaux conformément aux filières agréées',
      'Traitement spécifique des déchets dangereux et polluants (amiante, plomb)',
      'Enlèvement et recyclage des DEEE (électroménager, informatique)',
      'Démontage et évacuation de mobilier encombrant',
      'Nettoyage complet après débarras pour remise en état des lieux',
      'Intervention rapide sur rendez-vous ou en urgence sous 48h',
      'Service discret adapté aux situations sensibles (succession, saisie)'
    ],
    benefits: [
      'Gain de temps considérable avec service clé en main tout compris',
      'Équipe professionnelle expérimentée et respectueuse de vos biens',
      'Respect de l\'environnement avec tri et recyclage systématiques',
      'Traçabilité complète avec bordereaux de suivi des déchets',
      'Tarifs transparents et compétitifs avec devis détaillé gratuit',
      'Assurance responsabilité civile professionnelle pour votre tranquillité',
      'Possibilité de valoriser certains objets pour réduire la facture',
      'Conformité aux réglementations parisiennes sur les déchets'
    ],
    image: '/images/debarras.webp',
    interventionSteps: [
      {
        icon: "https://img.icons8.com/ios/50/clipboard.png",
        title: 'Évaluation & Devis',
        description: 'Visite sur place pour évaluer le volume à débarrasser, identifier les objets valorisables et les déchets spécifiques. Établissement d\'un devis détaillé gratuit et transparent avec planning d\'intervention.'
      },
      {
        icon: "https://img.icons8.com/ios/50/truck.png",
        title: 'Débarras & Tri',
        description: 'Intervention de l\'équipe avec démontage si nécessaire, tri sélectif méthodique, chargement dans nos véhicules adaptés. Séparation des objets à donner, à recycler et à éliminer selon les filières appropriées.'
      },
      {
        icon: "https://img.icons8.com/ios/50/recycle-sign.png",
        title: 'Évacuation & Traçabilité',
        description: 'Évacuation conforme vers les centres de tri et déchetteries agréées, recyclage maximal, valorisation des objets réutilisables par don ou revente. Remise des bordereaux de suivi et certificats d\'élimination.'
      }
    ],
    equipments: [
      {
        name: 'Véhicules et Camions de Débarras',
        description: 'Flotte de véhicules adaptés à tous types de débarras : camions de 20m³ à 40m³ pour les gros volumes, camionnettes pour les accès difficiles dans Paris, monte-meubles pour les étages sans ascenseur. Équipements de protection pour les véhicules et les lieux (bâches, protections de sol et murs). Personnel qualifié pour le portage et la manutention en toute sécurité, même dans les escaliers étroits typiques des immeubles parisiens.',
        image: '/images/debarras.webp',
        imageAlt: 'Camion de débarras professionnel pour évacuation de locaux à Paris',
        imageTitle: 'Véhicules débarras Paris - Camions équipés pour évacuation rapide'
      },
      {
        name: 'Équipements de Manutention Professionnels',
        description: 'Matériel professionnel pour faciliter le débarras en toute sécurité : diables et transpalettes pour objets lourds, sangles et harnais de portage, caisses et bacs de tri, cartons renforcés, sacs à gravats résistants. Équipements de protection individuelle pour nos équipes. Outils de démontage pour mobilier et installations fixes. Monte-charge et élévateurs pour accès difficiles ou volumes importants.',
        image: '/images/debarras.webp',
        imageAlt: 'Équipements de manutention professionnels pour débarras',
        imageTitle: 'Matériel manutention Paris - Équipements professionnels débarras'
      },
      {
        name: 'Système de Tri et Traçabilité des Déchets',
        description: 'Organisation professionnelle du tri sélectif avec contenants spécifiques par catégorie : bois, métaux, plastiques, cartons, textiles, verre, déchets dangereux, DEEE. Partenariats avec déchetteries agréées, centres de tri, associations caritatives et structures de réemploi. Documentation complète avec bordereaux de suivi des déchets (BSD), certificats d\'élimination, justificatifs de don. Respect total de la réglementation environnementale et des filières REP (Responsabilité Élargie des Producteurs).',
        image: '/images/debarras.webp',
        imageAlt: 'Système de tri sélectif et traçabilité des déchets de débarras',
        imageTitle: 'Tri sélectif débarras Paris - Traçabilité et recyclage conformes'
      }
    ]
  },
  {
    id: '7',
    title: 'Assainissement à Paris',
    slug: 'assainissement-vmc',
    description: 'Service professionnel d\'assainissement et entretien à Paris. Nettoyage, désinfection et maintenance des systèmes de ventilation. Inspection vidéo, décontamination des gaines, amélioration de la qualité de l\'air intérieur. Conformité réglementaire garantie.',
    fullDescription: 'Notre service d\'assainissement à Paris garantit la qualité de l\'air intérieur et le bon fonctionnement de vos systèmes de ventilation. Les réseaux de ventilation mal entretenus accumulent poussières, moisissures, bactéries et allergènes, dégradant la qualité de l\'air et favorisant les problèmes respiratoires. Nous intervenons sur tous types de systèmes : VMC simple flux, VMC double flux, VMC hygroréglable, ventilation par extraction, centrales de traitement d\'air (CTA). Nos prestations incluent l\'inspection vidéo endoscopique des gaines, le nettoyage mécanique et aspiration des conduits, la désinfection antibactérienne des réseaux, le remplacement des filtres, le contrôle des débits d\'air et le réglage des installations. Service essentiel pour la santé, obligatoire pour les ERP (Établissements Recevant du Public) et fortement recommandé pour les bureaux, commerces, restaurants et habitations collectives.',
    icon: Fan,
    metaDescription: 'Assainissement Paris - Nettoyage et désinfection ventilation. Inspection vidéo, maintenance système. Qualité air intérieur. Devis gratuit Île-de-France.',
    imageAlt: 'Technicien effectuant l\'assainissement et le nettoyage d\'un système à Paris',
    imageTitle: 'Assainissement Paris - Entretien professionnel ventilation et qualité air',
    features: [
      'Inspection vidéo endoscopique complète des réseaux de ventilation',
      'Nettoyage mécanique approfondi des gaines et conduits d\'air',
      'Aspiration haute puissance des poussières, suies et résidus accumulés',
      'Désinfection antibactérienne et antivirale des circuits de ventilation',
      'Remplacement des filtres encrassés par des filtres neufs haute efficacité',
      'Contrôle et mesure des débits d\'air pour vérifier la conformité',
      'Réglage et optimisation des installations pour performances maximales',
      'Détection et réparation des fuites et dysfonctionnements',
      'Maintenance préventive programmée pour éviter l\'encrassement',
      'Certification de conformité réglementaire pour contrôles officiels'
    ],
    benefits: [
      'Amélioration significative de la qualité de l\'air intérieur',
      'Réduction des allergies, asthme et problèmes respiratoires',
      'Économies d\'énergie jusqu\'à 30% grâce à l\'optimisation du système',
      'Conformité aux réglementations sanitaires et obligations légales (ERP)',
      'Performance optimale et durée de vie prolongée de votre',
      'Élimination des odeurs désagréables et des moisissures',
      'Prévention des risques d\'incendie liés à l\'accumulation de poussières',
      'Traçabilité complète avec rapports d\'intervention et certificats de conformité'
    ],
    image: '/images/assainissement.webp',
    interventionSteps: [
      {
        icon: "https://img.icons8.com/ios/50/video-camera.png",
        title: 'Inspection Vidéo',
        description: 'Inspection endoscopique complète des réseaux de ventilation avec caméra haute définition. Identification de l\'encrassement, détection des anomalies, évaluation de l\'état général et localisation précise des zones à traiter.'
      },
      {
        icon: "https://img.icons8.com/ios/50/broom.png",
        title: 'Nettoyage & Désinfection',
        description: 'Nettoyage mécanique approfondi avec brossage rotatif, aspiration haute puissance des résidus, pulvérisation de désinfectants antibactériens dans les conduits. Remplacement des filtres et nettoyage des bouches d\'extraction.'
      },
      {
        icon: "https://img.icons8.com/ios/50/speed.png",
        title: 'Contrôle & Optimisation',
        description: 'Mesure des débits d\'air avec anémomètre, vérification de la conformité aux normes, réglage des ventilateurs, optimisation des performances. Remise d\'un rapport détaillé avec certificat de conformité.'
      }
    ],
    equipments: [
      {
        name: 'Caméras d\'Inspection Endoscopique',
        description: 'Caméras vidéo endoscopiques professionnelles haute définition avec éclairage LED intégré pour l\'inspection des réseaux de ventilation. Têtes rotatives à 360° pour visualiser l\'intérieur des gaines, même dans les coudes et zones difficiles d\'accès. Enregistrement vidéo pour documenter l\'état avant/après intervention. Câbles flexibles de 20 à 50 mètres pour explorer l\'intégralité des réseaux. Écrans de contrôle HD pour analyse en temps réel. Indispensables pour diagnostiquer l\'encrassement et planifier l\'intervention.',
        image: '/images/assainissement.webp',
        imageAlt: 'Caméra d\'inspection endoscopique pour diagnostic',
        imageTitle: 'Inspection vidéo Paris - Diagnostic professionnel ventilation'
      },
      {
        name: 'Équipements de Nettoyage Spécialisés',
        description: 'Matériel professionnel spécifique au nettoyage : brosses rotatives motorisées adaptées aux différents diamètres de gaines, aspirateurs industriels haute puissance avec filtres HEPA pour capturer les particules fines, système de brossage pneumatique pour zones difficiles, kit de nettoyage pour bouches d\'extraction et grilles. Perches télescopiques et rallonges pour atteindre tous les points du réseau. Équipements conformes aux normes de sécurité pour intervention en toute sérénité.',
        image: '/images/assainissement.webp',
        imageAlt: 'Équipements de nettoyage professionnel',
        imageTitle: 'Matériel nettoyage  Paris - Équipements professionnels assainissement'
      },
      {
        name: 'Appareils de Mesure et Contrôle',
        description: 'Instruments de mesure professionnels pour vérifier les performances et la conformité : anémomètres pour mesure des vitesses et débits d\'air, manomètres différentiels pour contrôle de pression, thermo-hygromètres pour température et humidité, détecteurs de CO2 pour qualité de l\'air. Enregistreurs de données pour suivi dans le temps. Équipements calibrés et certifiés pour garantir la fiabilité des mesures et la conformité aux normes réglementaires (Règlement Sanitaire Départemental, Code du Travail).',
        image: '/images/assainissement.webp',
        imageAlt: 'Appareils de mesure professionnels',
        imageTitle: 'Instruments de mesure Paris - Contrôle conformité ventilation'
      }
    ]
  }
];
