
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0xNiAxNmMyLjIgMCA0IDEuOCA0IDRzLTEuOCA0LTQgNC00LTEuOC00LTQgMS44LTQgNC00em0wIDMyYzIuMiAwIDQgMS44IDQgNHMtMS44IDQtNCA0LTQtMS44LTQtNCAxLjgtNCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 z-0"></div>
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-primary-foreground tracking-tight">
                MahammadRizwan
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 opacity-90">
                Create Beautiful Digital Experiences
              </h1>
              <p className="text-xl opacity-80 mb-8 max-w-lg">
                We build stunning websites and applications that help businesses grow and succeed in the digital world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/services">
                    Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="glass-card rounded-2xl overflow-hidden shadow-2xl relative">
                  <img  className="w-full h-auto" alt="Modern digital workspace" src="https://images.unsplash.com/photo-1686345233737-8f218f94f44f" />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <Section>
        <Container>
          <SectionHeading
            title="Why Choose Us"
            subtitle="We combine creativity, technology, and strategy to deliver exceptional results for our clients."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Creative Design",
                description: "Our design team creates visually stunning and user-friendly interfaces that captivate your audience.",
                icon: "✨"
              },
              {
                title: "Modern Technology",
                description: "We use cutting-edge technologies to build fast, responsive, and scalable digital solutions.",
                icon: "🚀"
              },
              {
                title: "Strategic Approach",
                description: "Every project begins with a thorough analysis to ensure we deliver solutions that meet your business goals.",
                icon: "🎯"
              },
              {
                title: "Dedicated Support",
                description: "Our team provides ongoing support and maintenance to keep your digital assets performing at their best.",
                icon: "🛠️"
              },
              {
                title: "Timely Delivery",
                description: "We value your time and always strive to deliver projects on schedule without compromising quality.",
                icon: "⏱️"
              },
              {
                title: "Result-Oriented",
                description: "Our focus is on creating solutions that drive real business results and provide measurable ROI.",
                icon: "📈"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Preview */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive digital solutions tailored to your unique business needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
                image: "web-development"
              },
              {
                title: "UI/UX Design",
                description: "User-centered design that creates intuitive, engaging interfaces and seamless user experiences.",
                image: "ui-ux-design"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={service.title} src="https://images.unsplash.com/photo-1524221629551-6dd14def5ffd" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="mb-4 text-muted-foreground">{service.description}</p>
                    <Button asChild variant="ghost" className="group p-0">
                      <Link to="/services" className="flex items-center text-primary">
                        Learn More 
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
                Let's work together to create something amazing. Contact us today to discuss your project and get a free consultation.
              </p>
              <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
