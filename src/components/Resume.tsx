
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">Resume</h2>
        
        <div className="flex flex-col items-center justify-center mb-12">
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-center mb-6">
            Here's a summary of my academic and professional journey. 
            Feel free to download my complete resume for more details.
          </p>
          
          <Button className="bg-portfolio-primary hover:bg-portfolio-secondary">
            <FileText className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
        
        <Tabs defaultValue="education" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          
          <TabsContent value="education" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>BTech in Computer Science</CardTitle>
                <CardDescription>GGSIPU (Guru Gobind Singh Indraprastha University)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">2020 - Present</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Pursuing a Bachelor's degree in Computer Science with a focus on machine learning, 
                  data science, and artificial intelligence. Relevant coursework includes:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                  <li>Data Structures and Algorithms</li>
                  <li>Machine Learning Fundamentals</li>
                  <li>Database Management Systems</li>
                  <li>Statistical Computing</li>
                  <li>Neural Networks and Deep Learning</li>
                  <li>Big Data Analytics</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="certifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Machine Learning Specialization</CardTitle>
                <CardDescription>Coursera - Stanford University</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">2022</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Comprehensive specialization covering machine learning algorithms, 
                  including supervised learning, unsupervised learning, and best practices.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Deep Learning Specialization</CardTitle>
                <CardDescription>Coursera - DeepLearning.AI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">2023</p>
                <p className="text-gray-700 dark:text-gray-300">
                  In-depth specialization on neural networks and deep learning models,
                  including CNNs, RNNs, and optimization algorithms.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Data Science Professional Certificate</CardTitle>
                <CardDescription>IBM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">2021</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Professional certificate covering data science methodologies,
                  tools, and techniques for analyzing and visualizing data.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="experience" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Science Intern</CardTitle>
                <CardDescription>XYZ Analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Summer 2023</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Worked on developing predictive models for customer behavior analysis
                  using Python, Pandas, and scikit-learn.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                  <li>Conducted exploratory data analysis on customer datasets</li>
                  <li>Developed classification models to predict customer churn</li>
                  <li>Created data visualizations to communicate findings</li>
                  <li>Collaborated with the product team to implement model insights</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>ML Research Assistant</CardTitle>
                <CardDescription>University Research Lab</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">2022 - Present</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Assisting faculty with research on natural language processing and 
                  computer vision applications.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                  <li>Implementing and testing various deep learning models</li>
                  <li>Preparing research data and conducting experiments</li>
                  <li>Contributing to research papers and presentations</li>
                  <li>Mentoring junior students in ML concepts</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
