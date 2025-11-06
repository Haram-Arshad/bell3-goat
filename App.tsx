
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VisionSection from './components/VisionSection';
import CommunitySection from './components/CommunitySection';
import JoinSection from './components/JoinSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <CommunitySection />
        <JoinSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
