
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 staggered-animation">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-800 dark:text-gray-100">Hi, I'm </span>
              <span className="gradient-text">Ashmeet Singh</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
              AI Developer & ML Engineer
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              Building intelligent systems that solve real-world problems through data science, 
              machine learning, and artificial intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-portfolio-primary hover:bg-portfolio-secondary text-white"
                onClick={() => window.location.href = '#projects'}
              >
                View Projects
              </Button>
              
              <Button 
                variant="outline" 
                className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white"
                onClick={() => window.location.href = '#contact'}
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-portfolio-primary/20 rounded-full absolute -inset-4 blur-3xl opacity-30"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-portfolio-accent rounded-full absolute -right-4 -bottom-4 blur-3xl opacity-20"></div>
              <div className="relative z-10 bg-gradient-to-br from-portfolio-primary to-portfolio-accent p-1 rounded-2xl shadow-xl">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-2">
                  <div className="aspect-square w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                    {/* Placeholder for profile image */}
                    <div className="text-6xl font-bold text-gray-400 dark:text-gray-600">AS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-portfolio-primary">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
