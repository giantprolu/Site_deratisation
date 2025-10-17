import { Clock, Zap, FileText, Calendar, User, CheckCircle, Phone } from 'lucide-react';

const InterventionProcess = () => {
  const processSteps = [
    {
      icon: Clock,
      number: '01',
      title: 'Délai d\'intervention standard',
      description: '12 heures maximum pour une réponse rapide.',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Zap,
      number: '02',
      title: 'Intervention urgente',
      description: '4 heures pour les situations critiques.',
      gradient: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: FileText,
      number: '03',
      title: 'Traçabilité',
      description: 'Bon d\'intervention détaillé après chaque prestation.',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Calendar,
      number: '04',
      title: 'Planification',
      description: 'Planning prévisionnel établi en début d\'année.',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: User,
      number: '05',
      title: 'Interlocuteur dédié',
      description: 'Un responsable assigné pour chaque contrat.',
      gradient: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section className="section section-gradient-complex">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="bg-decoration-top-left"></div>
      <div className="bg-decoration-bottom-right"></div>
      
      <div className="section-container-relative">
        {/* Header Section */}
        <div className="section-header">
          <div className="badge badge-gradient">
            <CheckCircle className="icon-sm" />
            Notre engagement
          </div>
          <h2 className="section-title">
            Processus d'Intervention
          </h2>
          <p className="section-subtitle">
            Un service professionnel avec des engagements clairs pour votre tranquillité
          </p>
        </div>

        {/* Cards en grille responsive */}
        <div className="grid-process mb-12 sm:mb-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="group process-card"
              >
                {/* Numéro d'étape en arrière-plan */}
                <div className="absolute top-4 right-4 text-number-lg group-hover:text-gray-200">
                  {step.number}
                </div>

                {/* Icône avec gradient */}
                <div className="relative mb-4">
                  <div className={`icon-box-md ${step.bgColor} icon-animated group-hover:scale-110 group-hover:shadow-xl`}>
                    <IconComponent className={`icon-lg ${step.iconColor} group-hover:scale-110`} />
                  </div>
                  {/* Badge gradient au hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-xl overlay-gradient-animated group-hover:opacity-10`}></div>
                </div>

                {/* Contenu */}
                <h3 className="heading-card text-min-height-sm relative z-10 group-hover:text-primary-600">
                  {step.title}
                </h3>
                <p className="text-description-sm relative z-10">
                  {step.description}
                </p>

                {/* Bordure animée au hover */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${step.gradient} animated-border group-hover:scale-x-100 rounded-b-2xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Section Contact du Responsable Technique - Redesign */}
        <div className="relative">
          {/* Card principale */}
          <div className="card rounded-3xl overflow-hidden border-0">
            <div className="grid-2-cols-lg gap-0">
              {/* Partie gauche - Contact */}
              <div className="card-gradient-primary text-white card-padded-lg card-container">
                {/* Éléments décoratifs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <h3 className="heading-3 text-white mb-4">
                    Responsable Technique
                  </h3>
                  <p className="text-label-light mb-10">
                    Disponible pour répondre à toutes vos questions
                  </p>
                  
                  <div className="space-y-8">
                    {/* Nom */}
                    <div className="list-item-icon-start-lg gap-5">
                      <div className="icon-circle-lg icon-glass">
                        <User className="icon-lg" />
                      </div>
                      <div>
                        <p className="text-label-light mb-2">Nom du responsable</p>
                        <p className="text-responsive-xl font-bold">Sami RIK</p>
                      </div>
                    </div>
                    
                    {/* Téléphone */}
                    <a
                      href="tel:+33767393885"
                      className="glass-card rounded-2xl p-6 sm:p-7 group flex items-center gap-5 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="icon-circle-lg bg-white text-primary-600 group-hover:scale-110 transition-transform duration-500">
                        <Phone className="icon-lg" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-label-light mb-2">Appelez maintenant</p>
                        <p className="text-responsive-lg font-bold"> 07 67 39 38 85</p>
                      </div>
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Partie droite - Équipe technique */}
              <div className="card-padded-lg bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="list-item-icon-start-lg mb-6">
                  <div className="icon-box icon-primary">
                    <CheckCircle className="icon-lg text-primary-600" />
                  </div>
                  <h4 className="heading-4">Équipe technique</h4>
                </div>
                
                <p className="text-description-sm mb-6">
                  Une équipe qualifiée et expérimentée à votre service
                </p>
                
                <ul className="list-spaced-lg">
                  <li className="list-card-item">
                    <div className="icon-box bg-primary-100 rounded-lg flex-shrink-0 mt-0.5">
                      <CheckCircle className="icon-md text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Certifications professionnelles</p>
                      <p className="text-label">Techniciens certifiés Certibiocide</p>
                    </div>
                  </li>
                  
                  <li className="list-card-item">
                    <div className="icon-box bg-primary-100 rounded-lg flex-shrink-0 mt-0.5">
                      <CheckCircle className="icon-md text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Expertise continue</p>
                      <p className="text-label">Formation continue et expertise terrain</p>
                    </div>
                  </li>
                  
                  <li className="list-card-item">
                    <div className="icon-box bg-primary-100 rounded-lg flex-shrink-0 mt-0.5">
                      <CheckCircle className="icon-md text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Équipements modernes</p>
                      <p className="text-label">Matériel professionnel de dernière génération</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterventionProcess;
