
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';

const ServicesPage = () => {
  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive design for all devices',
        'Custom CMS integration',
        'E-commerce solutions',
        'Progressive Web Apps (PWAs)',
        'API development and integration',
        'Performance optimization'
      ],
      icon: '💻'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive, engaging interfaces and seamless user experiences.',
      features: [
        'User research and personas',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Interaction design',
        'Usability testing',
        'Design systems'
      ],
      icon: '🎨'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'App Store optimization',
        'Push notifications',
        'Offline functionality',
        'Integration with device features'
      ],
      icon: '📱'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions that help you reach your target audience and achieve your business goals.',
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click (PPC) advertising',
        'Social media marketing',
        'Email marketing campaigns',
        'Content marketing strategy',
        'Analytics and reporting'
      ],
      icon: '📈'
    },
    {
      id: 'branding',
      title: 'Branding & Identity',
      description: 'Comprehensive branding solutions that help you establish a strong, memorable identity in the marketplace.',
      features: [
        'Logo design and visual identity',
        'Brand strategy and positioning',
        'Brand guidelines',
        'Marketing collateral',
        'Brand messaging',
        'Rebranding services'
      ],
      icon: '✨'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Solutions',
      description: 'End-to-end e-commerce solutions that help you sell products and services online effectively.',
      features: [
        'Custom online stores',
        'Shopping cart and checkout optimization',
        'Payment gateway integration',
        'Inventory management',
        'Product catalog management',
        'Order fulfillment systems'
      ],
      icon: '🛒'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive digital solutions tailored to your unique business needs."
      />

      {/* Services Overview */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <Link to="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            title="Our Process"
            subtitle="How we work with you to deliver exceptional results"
          />

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 z-0"></div>
            
            <div className="space-y-12 relative z-10">
              {[
                {
                  step: 1,
                  title: "Discovery",
                  description: "We begin by understanding your business, goals, target audience, and project requirements through in-depth consultations."
                },
                {
                  step: 2,
                  title: "Strategy",
                  description: "Based on our findings, we develop a comprehensive strategy that outlines the approach, timeline, and deliverables."
                },
                {
                  step: 3,
                  title: "Design",
                  description: "Our creative team designs the visual elements and user experience, incorporating your feedback through multiple iterations."
                },
                {
                  step: 4,
                  title: "Development",
                  description: "Our developers bring the designs to life, building robust, scalable solutions using the latest technologies."
                },
                {
                  step: 5,
                  title: "Testing",
                  description: "We rigorously test all aspects of the project to ensure quality, performance, and compatibility across devices."
                },
                {
                  step: 6,
                  title: "Launch",
                  description: "Once approved, we deploy your project and provide training and documentation to ensure a smooth transition."
                },
                {
                  step: 7,
                  title: "Support",
                  description: "Our relationship continues with ongoing support, maintenance, and optimization to ensure long-term success."
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-2xl font-semibold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
                      {process.step}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 gradient-bg opacity-90 z-0"></div>
            <div className="relative z-10 px-6 py-16 md:p-16 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
                Contact us today to discuss your project and discover how our services can help you achieve your business goals.
              </p>
              <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default ServicesPage;
