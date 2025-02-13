import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import TestimonialsPage from './pages/TestimonialsPage';
import LegalNoticePage from './pages/LegalNoticePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';
import CookieBanner from './components/CookieBanner';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
              <Route path="/avis" element={<TestimonialsPage />} />
              <Route path="/mentions-legales" element={<LegalNoticePage />} />
              <Route path="/politique-de-confidentialite" element={<PrivacyPolicyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" />} />
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