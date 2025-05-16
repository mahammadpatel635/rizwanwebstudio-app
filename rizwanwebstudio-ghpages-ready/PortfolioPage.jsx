
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const PortfolioPage = () => {
  const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile Apps', 'E-Commerce'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Modern E-Commerce Platform',
      category: 'E-Commerce',
      description: 'A fully responsive e-commerce platform with advanced filtering, search, and checkout functionality.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'ecommerce-platform'
    },
    {
      id: 2,
      title: 'Financial Dashboard',
      category: 'Web Development',
      description: 'Interactive dashboard for financial data visualization with real-time updates and customizable widgets.',
      technologies: ['Vue.js', 'D3.js', 'Firebase', 'TailwindCSS'],
      image: 'financial-dashboard'
    },
    {
      id: 3,
      title: 'Travel Companion App',
      category: 'Mobile Apps',
      description: 'Mobile application for travelers with itinerary planning, local recommendations, and offline maps.',
      technologies: ['React Native', 'GraphQL', 'AWS', 'Google Maps API'],
      image: 'travel-app'
    },
    {
      id: 4,
      title: 'Corporate Website Redesign',
      category: 'UI/UX Design',
      description: 'Complete redesign of a corporate website focusing on improved user experience and conversion optimization.',
      technologies: ['Figma', 'Adobe XD', 'HTML/CSS', 'JavaScript'],
      image: 'corporate-website'
    },
    {
      id: 5,
      title: 'Healthcare Management System',
      category: 'Web Development',
      description: 'Comprehensive healthcare management system for patient records, appointments, and billing.',
      technologies: ['Angular', 'Express.js', 'PostgreSQL', 'Docker'],
      image: 'healthcare-system'
    },
    {
      id: 6,
      title: 'Food Delivery Platform',
      category: 'E-Commerce',
      description: 'Online food ordering and delivery platform with real-time order tracking and restaurant management.',
      technologies: ['React', 'Node.js', 'Redis', 'Google Maps API'],
      image: 'food-delivery'
    },
    {
      id: 7,
      title: 'Fitness Tracking App',
      category: 'Mobile Apps',
      description: 'Mobile application for tracking workouts, nutrition, and progress with personalized recommendations.',
      technologies: ['Flutter', 'Firebase', 'TensorFlow Lite', 'HealthKit'],
      image: 'fitness-app'
    },
    {
      id: 8,
      title: 'Educational Platform UI',
      category: 'UI/UX Design',
      description: 'User interface design for an online learning platform with a focus on accessibility and engagement.',
      technologies: ['Sketch', 'InVision', 'Principle', 'Zeplin'],
      image: 'education-ui'
    },
    {
      id: 9,
      title: 'Real Estate Marketplace',
      category: 'Web Development',
      description: 'Property listing and search platform with virtual tours, mortgage calculator, and agent directory.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
      image: 'real-estate'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <PageHeader 
        title="Our Portfolio" 
        subtitle="Explore our latest projects and see how we've helped our clients achieve their goals."
      />

      {/* Portfolio Filter */}
      <Section className="pt-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  layout
                  className="group"
                >
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                    <div className="relative overflow-hidden h-64">
                      <img  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={project.title} src="https://images.unsplash.com/photo-1642132652860-471b4228023e" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="h-1 w-20 bg-primary rounded mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Working with Rizwan was a game-changer for our business. Their team delivered a website that exceeded our expectations and has significantly improved our online presence.",
                author: "Sarah Johnson",
                company: "TechStart Inc."
              },
              {
                quote: "The mobile app developed by Rizwan has revolutionized how we interact with our customers. The attention to detail and user experience is exceptional.",
                author: "Michael Chen",
                company: "GlobeConnect"
              },
              {
                quote: "Rizwan's redesign of our e-commerce platform resulted in a 40% increase in conversions within the first month. Their strategic approach to UX design made all the difference.",
                author: "Emily Rodriguez",
                company: "Fashion Forward"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="p-6">
                    <div className="text-4xl text-primary mb-4">"</div>
                    <p className="italic mb-6">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PortfolioPage;
