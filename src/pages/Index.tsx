
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
  useEffect(() => {
    // Apply neon grid pattern
    const root = document.documentElement;
    root.style.setProperty(
      '--bg-grid-pattern',
      'radial-gradient(circle, #39FF14 1px, transparent 1px)' // Neon Green grid
    );
    root.style.backgroundSize = '30px 30px';

    // Ensure black background is applied
    document.body.style.backgroundColor = '#000000';
    document.documentElement.style.backgroundColor = '#000000';
    
    // Force to dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="bg-black min-h-screen text-portfolio-primary">
      <Navbar />
      <main className="bg-black">
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
