
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';

const SkillCategory = ({ 
  title, 
  skills 
}: { 
  title: string; 
  skills: { name: string; level: number; }[] 
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">{skill.name}</span>
            <span className="text-gray-500">{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2" />
        </div>
      ))}
    </div>
  );
};

const SkillBadge = ({ name }: { name: string }) => {
  return (
    <div className="bg-portfolio-primary/10 text-portfolio-primary px-3 py-1 rounded-full text-sm font-medium inline-block m-1">
      {name}
    </div>
  );
};

const Skills: React.FC = () => {
  const programmingSkills = [
    { name: 'Python', level: 90 },
    { name: 'TypeScript/JavaScript', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'Java', level: 70 },
  ];

  const mlAiSkills = [
    { name: 'TensorFlow/Keras', level: 85 },
    { name: 'PyTorch', level: 80 },
    { name: 'scikit-learn', level: 90 },
    { name: 'Natural Language Processing', level: 75 },
  ];

  const dataScienceSkills = [
    { name: 'Data Analysis (Pandas)', level: 95 },
    { name: 'Data Visualization', level: 85 },
    { name: 'Statistical Analysis', level: 80 },
    { name: 'Feature Engineering', level: 85 },
  ];

  const otherTechnicalSkills = [
    'PostgreSQL',
    'Drizzle ORM',
    'Git',
    'Docker',
    'REST APIs',
    'Jupyter Notebooks',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Flask',
    'FastAPI',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Zod',
  ];

  const mlConcepts = [
    'Supervised Learning',
    'Unsupervised Learning',
    'Deep Learning',
    'Neural Networks',
    'Convolutional Neural Networks',
    'Recurrent Neural Networks',
    'Transformers',
    'Reinforcement Learning',
    'Transfer Learning',
    'Model Deployment',
    'Model Optimization',
    'Feature Selection',
    'Hyperparameter Tuning',
    'Evaluation Metrics',
    'Cross-Validation',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <SkillCategory title="Programming Languages" skills={programmingSkills} />
          <SkillCategory title="Machine Learning & AI" skills={mlAiSkills} />
          <SkillCategory title="Data Science" skills={dataScienceSkills} />
        </div>
        
        <Separator className="my-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Other Technical Skills</h3>
            <div className="flex flex-wrap">
              {otherTechnicalSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill} />
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Machine Learning & AI Concepts</h3>
            <div className="flex flex-wrap">
              {mlConcepts.map((concept, index) => (
                <SkillBadge key={index} name={concept} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
