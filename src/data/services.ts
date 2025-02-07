import { Building2, Bug, Rat, Bird, Sparkles, BoxesIcon, Fan } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  icon: any;
  metaDescription: string;
  features: string[];
  benefits: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Dératisation',
    slug: 'deratisation',
    shortDescription: 'Solutions professionnelles de contrôle des rongeurs',
    longDescription: 'Notre service de dératisation utilise des méthodes modernes et efficaces pour éliminer et prévenir les infestations de rongeurs. Nous proposons des solutions durables adaptées à vos besoins spécifiques.',
    icon: Rat,
    metaDescription: 'Services professionnels de dératisation pour entreprises et particuliers. Solutions efficaces et durables pour le contrôle des rongeurs.',
    features: [
      'Inspection complète des lieux',
      'Traitement préventif et curatif',
      'Suivi régulier',
      'Conseils personnalisés'
    ],
    benefits: [
      'Élimination rapide des rongeurs',
      'Protection durable',
      'Respect des normes d\'hygiène',
      'Solutions écologiques'
    ],
    image: 'https://github.com/giantprolu/Site_deratisation/blob/master/src/Asset/deratisation2.webp'
  },
  {
    id: '2',
    title: 'Désinfection',
    slug: 'desinfection',
    shortDescription: 'Services de désinfection professionnelle',
    longDescription: 'Nos services de désinfection garantissent l\'élimination des agents pathogènes dans vos locaux. Nous utilisons des produits homologués et des techniques avancées pour assurer votre sécurité.',
    icon: Sparkles,
    metaDescription: 'Services de désinfection professionnelle pour tous types de locaux. Élimination efficace des agents pathogènes et assainissement complet.',
    features: [
      'Désinfection complète des surfaces',
      'Produits homologués',
      'Protocoles adaptés',
      'Certification de traitement'
    ],
    benefits: [
      'Environnement sain',
      'Conformité aux normes sanitaires',
      'Protection de la santé',
      'Tranquillité d\'esprit'
    ],
    image: 'https://example.com/path/to/desinfection.webp'
  },
  {
    id: '3',
    title: 'Désinsectisation',
    slug: 'desinsectisation',
    shortDescription: 'Contrôle et élimination des insectes nuisibles',
    longDescription: 'Service professionnel de désinsectisation pour éliminer tous types d\'insectes nuisibles. Nos experts utilisent des méthodes ciblées et efficaces.',
    icon: Bug,
    metaDescription: 'Services de désinsectisation professionnelle. Élimination garantie des insectes nuisibles avec des solutions adaptées et durables.',
    features: [
      'Diagnostic précis',
      'Traitement ciblé',
      'Solutions préventives',
      'Suivi post-traitement'
    ],
    benefits: [
      'Élimination rapide',
      'Protection long terme',
      'Méthodes sécurisées',
      'Expertise reconnue'
    ],
    image: 'https://example.com/path/to/désinsectisation.webp'
  },
  {
    id: '4',
    title: 'Dépigeonnage',
    slug: 'depigeonnage',
    shortDescription: 'Solutions de contrôle des pigeons',
    longDescription: 'Services professionnels de dépigeonnage pour protéger vos bâtiments. Nous proposons des solutions respectueuses et efficaces.',
    icon: Bird,
    metaDescription: 'Services de dépigeonnage professionnel. Protection efficace des bâtiments contre les nuisances causées par les pigeons.',
    features: [
      'Pose de pics anti-pigeons',
      'Filets de protection',
      'Systèmes d\'effarouchement',
      'Nettoyage des surfaces'
    ],
    benefits: [
      'Protection du bâtiment',
      'Solutions durables',
      'Méthodes éthiques',
      'Maintenance régulière'
    ],
    image: 'https://images.unsplash.com/photo-1583407733101-dea598145d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: '5',
    title: 'Hygiène du Bâtiment',
    slug: 'hygiene-du-batiment',
    shortDescription: 'Services complets d\'hygiène pour bâtiments',
    longDescription: 'Maintenez vos locaux dans un état d\'hygiène optimal avec nos services professionnels d\'entretien et de nettoyage.',
    icon: Building2,
    metaDescription: 'Services professionnels d\'hygiène et d\'entretien pour bâtiments. Solutions complètes pour maintenir la propreté et l\'hygiène de vos locaux.',
    features: [
      'Nettoyage professionnel',
      'Désinfection régulière',
      'Entretien préventif',
      'Audits d\'hygiène'
    ],
    benefits: [
      'Environnement sain',
      'Image professionnelle',
      'Conformité aux normes',
      'Satisfaction garantie'
    ],
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: '6',
    title: 'Débarras Pro',
    slug: 'debarras-pro',
    shortDescription: 'Services de débarras professionnel',
    longDescription: 'Service complet de débarras pour professionnels. Nous prenons en charge l\'évacuation et le tri de tous types de déchets.',
    icon: BoxesIcon,
    metaDescription: 'Services professionnels de débarras pour entreprises. Solutions complètes d\'évacuation et de tri des déchets.',
    features: [
      'Devis personnalisé',
      'Intervention rapide',
      'Tri sélectif',
      'Évacuation conforme'
    ],
    benefits: [
      'Gain de temps',
      'Service clé en main',
      'Respect environnemental',
      'Traçabilité garantie'
    ],
    image: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: '7',
    title: 'Assainissement VMC',
    slug: 'assainissement-vmc',
    shortDescription: 'Entretien et nettoyage des systèmes de ventilation',
    longDescription: 'Services professionnels de nettoyage et d\'entretien des systèmes de ventilation pour garantir une qualité d\'air optimale.',
    icon: Fan,
    metaDescription: 'Services d\'assainissement et d\'entretien des systèmes VMC. Solutions professionnelles pour une ventilation optimale.',
    features: [
      'Inspection vidéo',
      'Nettoyage complet',
      'Désinfection',
      'Maintenance préventive'
    ],
    benefits: [
      'Air plus sain',
      'Économies d\'énergie',
      'Conformité réglementaire',
      'Performance optimale'
    ],
    image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];
