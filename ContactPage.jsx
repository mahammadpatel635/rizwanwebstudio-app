
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PageHeader } from '@/components/ui/page-header';
import { ContactInfoCard } from '@/components/contact/ContactInfoCard';
import { SocialLinks } from '@/components/contact/SocialLinks';
import { ContactForm } from '@/components/contact/ContactForm';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactDetails = {
    location: "123 Innovation Street, Tech City, 10001",
    phone: "+1 (555) 123-4567",
    email: "patelrizwan956@gmail.com",
    hours: {
      weekdays: "Monday - Friday: 9am - 5pm",
      weekends: "Saturday - Sunday: Closed"
    }
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team to discuss your project or ask any questions."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <ContactInfoCard details={contactDetails} />
                <SocialLinks />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <ContactForm 
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] relative">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Interactive map would be displayed here</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
