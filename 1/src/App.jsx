
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';

// Layout components
import Layout from '@/components/layout/Layout';

// Pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import PortfolioPage from '@/pages/PortfolioPage';
import TeamPage from '@/pages/TeamPage';
import PricingPage from '@/pages/PricingPage';
import BlogPage from '@/pages/BlogPage';
import ContactPage from '@/pages/ContactPage';
import FaqPage from '@/pages/FaqPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Toaster />
    </>
  );
}

export default App;
