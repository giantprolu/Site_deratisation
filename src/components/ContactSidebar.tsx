import { Link } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';

const ContactSidebar = () => {
  return (
    <div className="sticky top-24 list-spaced-lg">
      {/* CTA Contact */}
      <div className="group cta-card">
        <h3 className="heading-4 text-white mb-4">Besoin d'un service ?</h3>
        <p className="mb-6 opacity-90 text-sm sm:text-base">
          Contactez-nous pour un devis gratuit et personnalisé adapté à vos besoins.
        </p>
        <Link to="/contact" className="btn-white mb-3 group-hover:scale-105 transition-transform duration-300">
          Demander un devis
        </Link>
        <a href="tel:+337673985" className="btn-dark group-hover:scale-105 transition-transform duration-300">
          <Phone className="icon-md mr-2" />
          Appel d'urgence
        </a>
      </div>

      {/* Points clés */}
      <div className="group info-card">
        <h3 className="heading-4 mb-4">Points clés</h3>
        <ul className="list-spaced">
          <li className="list-item-icon group hover:bg-primary-50 rounded-lg p-2 -m-2 transition-all duration-300">
            <CheckCircle className="icon-check" />
            Intervention rapide 24h/7j
          </li>
          <li className="list-item-icon group hover:bg-primary-50 rounded-lg p-2 -m-2 transition-all duration-300">
            <CheckCircle className="icon-check" />
            Techniciens certifiés
          </li>
          <li className="list-item-icon group hover:bg-primary-50 rounded-lg p-2 -m-2 transition-all duration-300">
            <CheckCircle className="icon-check" />
            Produits éco-responsables
          </li>
          <li className="list-item-icon group hover:bg-primary-50 rounded-lg p-2 -m-2 transition-all duration-300">
            <CheckCircle className="icon-check" />
            Garantie de résultat
          </li>
          <li className="list-item-icon group hover:bg-primary-50 rounded-lg p-2 -m-2 transition-all duration-300">
            <CheckCircle className="icon-check" />
            Devis gratuit
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSidebar;
