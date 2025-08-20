'use client'

import React, { useState } from 'react';
import NavBar from './ui/NavBar';
import HeroSection from './ui/HeroSection';
import AboutSection from './ui/AboutSection';
import ProjectsSection from './ui/ProjectsSection';
import ArticlesSection from './ui/ArticlesSection';
import ContactSection from './ui/ContactSection';
import Footer from './ui/Footer';

export default function Page() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HeroSection setPage={setPage} />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'articles':
        return <ArticlesSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection setPage={setPage} />;
    }
  };

  return (
    <div className="bg-gray-900">
      <NavBar setPage={setPage} />
      <main>{renderPage()}</main>
      {page !== 'home' && <Footer />}
    </div>
  );
}