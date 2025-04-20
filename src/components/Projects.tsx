
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  longDescription,
  tags,
  image,
  github,
  demo,
}) => {
  return (
    <Card className="card-hover overflow-hidden flex flex-col h-full">
      <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="w-full h-full flex items-center justify-center">
          {/* You can replace with an actual image later */}
          <div className="text-gray-400 dark:text-gray-600 text-2xl font-bold">{image}</div>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 dark:text-gray-300 mb-4">{longDescription}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-portfolio-primary/10 text-portfolio-primary hover:bg-portfolio-primary/20">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        {github && (
          <Button variant="outline" size="sm" className="flex gap-2 items-center" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </Button>
        )}
        {demo && (
          <Button size="sm" className="bg-portfolio-primary hover:bg-portfolio-secondary" asChild>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Real Estate ML Web Application",
      description: "Price prediction and property analysis tool",
      longDescription: "A full-stack web application leveraging ML models to predict real estate prices and analyze property data. Built with TypeScript, Drizzle ORM, PostgreSQL, and modern ML techniques.",
      tags: ["Machine Learning", "TypeScript", "PostgreSQL", "Drizzle ORM", "Zod", "React"],
      image: "Real Estate ML App",
      github: "#",
      demo: "#",
    },
    {
      title: "Ames Housing Dataset Analysis",
      description: "Comprehensive data analysis and visualization project",
      longDescription: "In-depth analysis of the Ames Housing dataset, implementing a robust data pipeline for data inspection, missing value handling, and exploratory analysis with advanced visualization techniques.",
      tags: ["Python", "Pandas", "Data Analysis", "scikit-learn", "Statistical Modeling"],
      image: "Ames Housing Analysis",
      github: "#",
    },
    {
      title: "Sentiment Analysis Engine",
      description: "NLP-based sentiment analysis for product reviews",
      longDescription: "Developed a sentiment analysis model using NLP techniques to analyze product reviews. The project includes text preprocessing, feature extraction, and model training with various classification algorithms.",
      tags: ["NLP", "Python", "TensorFlow", "BERT", "Classification"],
      image: "Sentiment Analysis",
      github: "#",
    },
    {
      title: "Personal Finance Tracker",
      description: "ML-powered finance tracking and prediction app",
      longDescription: "A finance tracking application with ML-powered spending predictions and budget recommendations. Features include transaction categorization, spending analysis, and future expense forecasting.",
      tags: ["Machine Learning", "Time Series Analysis", "Python", "Flask", "SQLite"],
      image: "Finance Tracker",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Here are some of my recent projects focusing on Machine Learning, Data Science, and AI applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more projects? Check out my GitHub profile.
          </p>
          <Button className="bg-portfolio-primary hover:bg-portfolio-secondary" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={18} />
              <span>Visit My GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
