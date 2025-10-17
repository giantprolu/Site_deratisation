import { Clock, Zap, FileText, Calendar, User } from 'lucide-react';

const InterventionProcess = () => {
  const processSteps = [
    {
      icon: Clock,
      title: 'Délai d\'intervention standard',
      description: '12 heures maximum pour une réponse rapide.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Zap,
      title: 'Intervention urgente',
      description: '4 heures pour les situations critiques.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: FileText,
      title: 'Traçabilité',
      description: 'Bon d\'intervention détaillé après chaque prestation.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Calendar,
      title: 'Planification',
      description: 'Planning prévisionnel annuel établi en début d\'année.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: User,
      title: 'Interlocuteur dédié',
      description: 'Un responsable assigné pour chaque contrat.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium mb-4">
            Notre engagement
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Processus d'Intervention
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un service professionnel avec des engagements clairs pour votre tranquillité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section Contact du Responsable Technique */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border-2 border-primary-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Responsable Technique
              </h3>
              <div className="space-y-3">
                <p className="text-xl font-semibold text-primary-600">Sami RIK</p>
                <a
                  href="tel:+33767393885"
                  className="inline-flex items-center gap-2 text-lg text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +33 7 67 39 38 85
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Équipe technique</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Techniciens certifiés Certibiocide</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Formation continue et expertise terrain</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterventionProcess;
