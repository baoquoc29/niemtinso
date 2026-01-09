import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import FeaturedProjects from './components/FeaturedProjects';
import Members from './components/Members';
import Library from './components/Library';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Programs />
        <FeaturedProjects />
        <Members />
        <Library />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
