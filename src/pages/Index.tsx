
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  // Add background grid pattern to the root element's style
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      '--bg-grid-pattern',
      'radial-gradient(circle, #6E59A5 1px, transparent 1px)'
    );
    root.style.backgroundSize = '30px 30px';
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
