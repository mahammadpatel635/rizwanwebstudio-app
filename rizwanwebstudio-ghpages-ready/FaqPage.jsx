
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FaqPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('General');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    'General',
    'Services',
    'Pricing',
    'Process',
    'Technical'
  ];

  const faqs = [
    {
      id: 1,
      question: 'What services does Rizwan offer?',
      answer: 'Rizwan offers a comprehensive range of digital services including web development, UI/UX design, mobile app development, e-commerce solutions, digital marketing, and branding services. Our team of experts works collaboratively to deliver end-to-end solutions tailored to your specific business needs.',
      category: 'General'
    },
    {
      id: 2,
      question: 'How long does it take to complete a website project?',
      answer: 'The timeline for a website project varies depending on its complexity, scope, and specific requirements. A simple website might take 2-4 weeks, while more complex projects with custom functionality can take 8-12 weeks or more. During our initial consultation, we\'ll provide you with a more accurate timeline based on your project specifications.',
      category: 'Process'
    },
    {
      id: 3,
      question: 'What is your pricing structure?',
      answer: 'Our pricing is project-based and depends on the scope, complexity, and specific requirements of your project. We offer different packages to accommodate various budgets and needs. For a detailed quote, please contact us with your project details, and we\'ll be happy to provide you with a customized proposal.',
      category: 'Pricing'
    },
    {
      id: 4,
      question: 'Do you offer ongoing maintenance and support?',
      answer: 'Yes, we offer various maintenance and support packages to ensure your website or application continues to perform optimally after launch. These packages include regular updates, security monitoring, content updates, performance optimization, and technical support. We can tailor a maintenance plan to suit your specific needs and budget.',
      category: 'Services'
    },
    {
      id: 5,
      question: 'What is your design process?',
      answer: 'Our design process begins with understanding your business, goals, and target audience. We then create wireframes and prototypes to visualize the structure and functionality. After your approval, we develop high-fidelity designs with attention to user experience and your brand identity. Throughout the process, we collaborate closely with you to ensure the final design meets your expectations.',
      category: 'Process'
    },
    {
      id: 6,
      question: 'Can you help with content creation?',
      answer: 'Yes, we offer content creation services including copywriting, photography, video production, and graphic design. Our content team works closely with you to develop compelling content that aligns with your brand voice and effectively communicates your message to your target audience.',
      category: 'Services'
    },
    {
      id: 7,
      question: 'What technologies do you use for development?',
      answer: 'We use a variety of modern technologies depending on the specific requirements of your project. For web development, we commonly use React, Vue.js, Node.js, PHP, and WordPress. For mobile app development, we use React Native, Flutter, and native iOS/Android development. We select the most appropriate technology stack based on your project\'s needs, performance requirements, and long-term goals.',
      category: 'Technical'
    },
    {
      id: 8,
      question: 'Do you offer e-commerce solutions?',
      answer: 'Yes, we specialize in creating custom e-commerce solutions that help businesses sell products and services online effectively. Our e-commerce services include online store design and development, shopping cart and checkout optimization, payment gateway integration, inventory management, product catalog management, and order fulfillment systems.',
      category: 'Services'
    },
    {
      id: 9,
      question: 'How do you handle project management?',
      answer: 'We follow a structured project management approach to ensure efficient execution and timely delivery. Each project is assigned a dedicated project manager who serves as your main point of contact. We use agile methodologies, conduct regular progress meetings, and provide access to project management tools where you can track progress, provide feedback, and communicate with our team.',
      category: 'Process'
    },
    {
      id: 10,
      question: 'What is your payment schedule?',
      answer: 'Our standard payment schedule typically includes an initial deposit (usually 50%) to commence work, followed by milestone payments as the project progresses. The final payment is due upon project completion and before the final deliverables are provided. For larger projects, we can create a customized payment schedule that works for both parties.',
      category: 'Pricing'
    },
    {
      id: 11,
      question: 'Do you provide hosting services?',
      answer: 'Yes, we offer reliable hosting solutions for websites and applications we develop. Our hosting services include regular backups, security monitoring, performance optimization, and technical support. We can also help you set up hosting with third-party providers if you prefer to manage your own hosting.',
      category: 'Technical'
    },
    {
      id: 12,
      question: 'How do you ensure website security?',
      answer: 'We implement multiple layers of security measures to protect your website from potential threats. These include secure coding practices, regular security updates, SSL certificates, firewall protection, malware scanning, and secure authentication systems. We also provide recommendations for ongoing security maintenance to keep your website protected.',
      category: 'Technical'
    },
    {
      id: 13,
      question: 'Can you redesign my existing website?',
      answer: 'Yes, we specialize in website redesigns that improve both aesthetics and functionality. Our redesign process begins with a thorough analysis of your current website to identify strengths, weaknesses, and opportunities for improvement. We then develop a strategy to enhance user experience, modernize the design, improve performance, and achieve your business objectives.',
      category: 'Services'
    },
    {
      id: 14,
      question: 'Do you offer digital marketing services?',
      answer: 'Yes, we provide comprehensive digital marketing services to help you reach your target audience and achieve your business goals. Our digital marketing services include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, content marketing, and analytics and reporting.',
      category: 'Services'
    },
    {
      id: 15,
      question: 'What happens after my website is launched?',
      answer: 'After your website is launched, we conduct a thorough review to ensure everything is functioning correctly. We provide training on how to use your content management system and offer documentation for reference. We also recommend a maintenance plan to keep your website secure, up-to-date, and performing optimally. Our team remains available for ongoing support and future enhancements.',
      category: 'Process'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    (activeCategory === 'All' || faq.category === activeCategory) &&
    (searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about our services, process, and more."
      />

      <Section className="pt-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => setActiveCategory('All')}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        activeCategory === 'All'
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      All Categories
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          activeCategory === category
                            ? 'bg-primary text-white'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {searchQuery && (
                <p className="text-muted-foreground mb-6">
                  Showing {filteredFaqs.length} results for "{searchQuery}"
                </p>
              )}

              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <Card key={faq.id} className="overflow-hidden">
                    <div
                      onClick={() => toggleItem(faq.id)}
                      className={`p-6 flex justify-between items-center cursor-pointer ${
                        expandedItems[faq.id] ? 'border-b' : ''
                      }`}
                    >
                      <h3 className="text-lg font-medium">{faq.question}</h3>
                      {expandedItems[faq.id] ? (
                        <ChevronUp className="h-5 w-5 text-primary" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                    {expandedItems[faq.id] && (
                      <CardContent className="p-6 pt-4 bg-gray-50 dark:bg-gray-800/50">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}

                {filteredFaqs.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground mb-6">
                      We couldn't find any FAQs matching your search. Try different keywords or browse by category.
                    </p>
                    <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
                  </div>
                )}
              </div>
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you couldn't find the answer to your question, feel free to contact us directly. Our team is always ready to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:patelrizwan956@gmail.com">Email Us</a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default FaqPage;
