import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import TestimonialsPage from './pages/TestimonialsPage';
import NewsPage from './pages/NewsPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import LegalNoticePage from './pages/LegalNoticePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';
import CookieBanner from './components/CookieBanner';


function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
              <Route path="/avis" element={<TestimonialsPage />} />
              <Route path="/actualites-conseils" element={<NewsPage />} />
              <Route path="/nos-interventions" element={<ServiceAreasPage />} />
              <Route path="/mentions-legales" element={<LegalNoticePage />} />
              <Route path="/politique-de-confidentialite" element={<PrivacyPolicyPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <CookieBanner />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;