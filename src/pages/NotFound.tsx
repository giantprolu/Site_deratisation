import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="relative">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-gray-900">
            Page non trouvée
          </p>
        </div>
        
        <p className="mt-6 text-gray-600 text-lg">
            Oups! La page que vous recherchez semble s’être égarée dans le désert numérique.
        </p>

        <div className="mt-10 flex justify-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200"
          >
            <Home size={20} className="mr-2" />
            Accueil
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;