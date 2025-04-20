
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: <Github className="h-5 w-5" />,
      username: '@ashmeet-singh',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: <Linkedin className="h-5 w-5" />,
      username: '@ashmeet-singh',
    },
    {
      name: 'Email',
      url: 'mailto:ashmeet@example.com',
      icon: <Mail className="h-5 w-5" />,
      username: 'ashmeet@example.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Have a question or want to work together? Feel free to reach out to me using the form below or through my social profiles.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-primary hover:bg-portfolio-secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            
            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="flex items-center p-6">
                    <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
                      {link.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{link.name}</h4>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-primary hover:underline"
                      >
                        {link.username}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-2">Office Hours</h4>
              <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 9AM - 5PM</p>
              <p className="text-gray-600 dark:text-gray-400">Weekend: By appointment</p>
              
              <h4 className="font-semibold mt-4 mb-2">Location</h4>
              <p className="text-gray-600 dark:text-gray-400">New Delhi, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
