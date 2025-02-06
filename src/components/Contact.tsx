import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactez Nous</h2>
          <p className="text-xl text-gray-600">Obtenez un devis gratuitement</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Services</label>
                <select
                  id="service"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option>Dératisation</option>
                  <option>Désinfection</option>
                  <option>Dépigeonnage</option>
                  <option>Hygiène du bâtiment</option>
                  <option>Debarras Pro</option>
                  <option>Assainissement VMC</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="tel:0767393885"className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>07 67 39 38 85</span>
                </a>
                <a href="mailto:contact@hygieneprotect3d.fr"className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span>contact@hygieneprotect3d.fr</span>
                </a>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Torcy, 77200</span>
                </div>
              </div>
            </div>
            
            <div className="h-80 bg-gray-200 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.3610361325333!2d2.6365203562451467!3d48.84974048397198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61aad94e49cdf%3A0x40b82c3688c4980!2s77200%20Torcy!5e0!3m2!1sfr!2sfr!4v1738837299686!5m2!1sfr!2sfr"
                width="600" 
                height="450" 
                loading="lazy" 
                title="map"
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;