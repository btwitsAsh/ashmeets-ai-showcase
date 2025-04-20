
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Code, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <Card className="card-hover">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 mx-auto bg-portfolio-primary/10 w-16 h-16 flex items-center justify-center rounded-full">
                <Code className="text-portfolio-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Developer</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Passionate about creating intelligent systems that can learn and adapt
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 mx-auto bg-portfolio-primary/10 w-16 h-16 flex items-center justify-center rounded-full">
                <Database className="text-portfolio-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Scientist</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Extracting insights and knowledge from structured and unstructured data
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 mx-auto bg-portfolio-primary/10 w-16 h-16 flex items-center justify-center rounded-full">
                <Users className="text-portfolio-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ML Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building and deploying machine learning models to solve real-world problems
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Computer Science Student & <span className="gradient-text">AI Enthusiast</span>
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300">
              I'm Ashmeet Singh, a BTech Computer Science student at GGSIPU with a passion for Data Science, 
              Machine Learning, and AI Development. My journey in computer science has been driven by a 
              fascination with how AI can transform industries and improve lives.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              My academic foundation in computer science, combined with hands-on experience in ML projects,
              has equipped me with the knowledge and skills to tackle complex problems. I enjoy working with
              data, identifying patterns, and developing models that can make predictions or automate tasks.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              My goal is to become a leading expert in the field of AI and Machine Learning,
              contributing to innovations that address real-world challenges. I'm particularly interested
              in the application of AI in areas like healthcare, finance, and sustainable development.
            </p>
            
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-inner">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b border-gray-200 dark:border-gray-700 pb-2">Education</h4>
              
              <div>
                <h5 className="font-medium">BTech Computer Science</h5>
                <p className="text-gray-600 dark:text-gray-400">GGSIPU (Guru Gobind Singh Indraprastha University)</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2020 - Present</p>
              </div>
              
              <h4 className="font-semibold text-lg border-b border-gray-200 dark:border-gray-700 pb-2 pt-4">Current Focus</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Deep Learning techniques for NLP and Computer Vision</li>
                <li>Building end-to-end ML pipelines</li>
                <li>Data analysis and visualization</li>
                <li>Full-stack AI application development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
