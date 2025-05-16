
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '30+', label: 'Countries Served' },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.',
      icon: '💡'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from design to development to customer service.',
      icon: '🏆'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership with our clients to achieve the best results.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices.',
      icon: '⚖️'
    },
  ];

  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Learn more about our company, our mission, and our team."
      />

      {/* Our Story Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Founded in 2015, Rizwan began with a simple mission: to help businesses succeed in the digital world through innovative design and technology solutions.
                </p>
                <p>
                  What started as a small team of passionate designers and developers has grown into a full-service digital agency with expertise across web development, UI/UX design, mobile applications, and digital marketing.
                </p>
                <p>
                  Over the years, we've had the privilege of working with clients ranging from startups to Fortune 500 companies, helping them transform their digital presence and achieve their business goals.
                </p>
                <p>
                  Today, our team of 50+ professionals continues to push the boundaries of what's possible in digital design and development, always with a focus on delivering exceptional results for our clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-30 blur-xl"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img  className="w-full h-auto" alt="Our team at work" src="https://images.unsplash.com/photo-1676369010695-70c5fce8ae31" />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-8 text-white"
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg opacity-90">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-8 text-white"
            >
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg opacity-90">
                To be the leading digital partner for businesses worldwide, known for our creativity, technical excellence, and commitment to delivering exceptional results that exceed expectations.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Our Values */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 mx-auto">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Preview */}
      <Section>
        <Container>
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the people who drive our vision and success"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                bio: "With over 15 years of experience in the tech industry, Alex leads our company with vision and passion."
              },
              {
                name: "Sarah Chen",
                role: "Creative Director",
                bio: "Sarah brings her award-winning design expertise to lead our creative team in delivering stunning visual solutions."
              },
              {
                name: "Michael Rodriguez",
                role: "CTO",
                bio: "Michael oversees our technical strategy and ensures we stay at the cutting edge of technology."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="h-64 overflow-hidden">
                    <img  className="w-full h-full object-cover" alt={`${member.name}, ${member.role}`} src="https://images.unsplash.com/photo-1620886434979-5cc4ddc31858" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutPage;
