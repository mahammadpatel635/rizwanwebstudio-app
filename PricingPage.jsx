
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Responsive website design',
        'Up to 5 pages',
        'Contact form',
        'Mobile optimization',
        'Basic SEO setup',
        '3 months of support'
      ],
      popular: false,
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'Everything in Basic',
        'Up to 10 pages',
        'Content Management System',
        'Blog integration',
        'Advanced SEO optimization',
        'Social media integration',
        '6 months of support'
      ],
      popular: true,
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Enterprise',
      description: 'For large businesses with complex needs',
      monthlyPrice: 399,
      yearlyPrice: 3990,
      features: [
        'Everything in Professional',
        'Unlimited pages',
        'E-commerce functionality',
        'Custom integrations',
        'Performance optimization',
        'Priority support',
        '12 months of support'
      ],
      popular: false,
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. For enterprise plans, we can also arrange custom payment terms.'
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of your billing cycle.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Absolutely! If our standard plans don\'t meet your needs, we can create a custom solution tailored to your specific requirements. Contact us for a custom quote.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 14-day money-back guarantee for all our plans. If you\'re not satisfied with our service, you can request a full refund within 14 days of your purchase.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on the complexity and scope. Basic websites typically take 2-4 weeks, while more complex projects can take 8-12 weeks or more.'
    },
    {
      question: 'What happens after my support period ends?',
      answer: 'After your included support period ends, you can purchase additional support packages or renew your plan. We also offer maintenance packages to keep your website up-to-date.'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Pricing Plans" 
        subtitle="Transparent pricing options designed to fit businesses of all sizes."
      />

      {/* Pricing Toggle */}
      <Section className="pt-8">
        <Container>
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full inline-flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-white dark:bg-gray-700 shadow-sm'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'yearly'
                    ? 'bg-white dark:bg-gray-700 shadow-sm'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Yearly <span className="text-green-500 font-semibold">Save 20%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <Card className={`h-full overflow-hidden ${plan.popular ? 'border-purple-400 dark:border-purple-600 shadow-lg' : ''}`}>
                  <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-muted-foreground">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      asChild 
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' : ''}`}
                    >
                      <Link to="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Comparison */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            title="Features Comparison"
            subtitle="A detailed look at what's included in each plan"
          />

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Basic</th>
                  <th className="py-4 px-6 text-center">Professional</th>
                  <th className="py-4 px-6 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Number of Pages', basic: 'Up to 5', pro: 'Up to 10', enterprise: 'Unlimited' },
                  { feature: 'Responsive Design', basic: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'Content Management System', basic: '✗', pro: '✓', enterprise: '✓' },
                  { feature: 'Blog Integration', basic: '✗', pro: '✓', enterprise: '✓' },
                  { feature: 'E-commerce Functionality', basic: '✗', pro: '✗', enterprise: '✓' },
                  { feature: 'SEO Optimization', basic: 'Basic', pro: 'Advanced', enterprise: 'Premium' },
                  { feature: 'Social Media Integration', basic: '✗', pro: '✓', enterprise: '✓' },
                  { feature: 'Custom Integrations', basic: '✗', pro: '✗', enterprise: '✓' },
                  { feature: 'Support Period', basic: '3 months', pro: '6 months', enterprise: '12 months' },
                  { feature: 'Support Priority', basic: 'Standard', pro: 'Standard', enterprise: 'Priority' }
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">{row.basic}</td>
                    <td className="py-4 px-6 text-center">{row.pro}</td>
                    <td className="py-4 px-6 text-center">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section>
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our pricing and services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex gap-4">
                  <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our standard plans not quite right for you? We offer custom solutions tailored to your specific needs and budget.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Contact Us for a Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default PricingPage;
