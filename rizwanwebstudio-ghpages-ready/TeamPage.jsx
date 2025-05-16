
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'With over 15 years of experience in the tech industry, Alex leads our company with vision and passion.',
      image: 'alex-johnson'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Creative Director',
      bio: 'Sarah brings her award-winning design expertise to lead our creative team in delivering stunning visual solutions.',
      image: 'sarah-chen'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Michael oversees our technical strategy and ensures we stay at the cutting edge of technology.',
      image: 'michael-rodriguez'
    },
    {
      id: 4,
      name: 'Emily Wilson',
      role: 'Lead UX Designer',
      bio: 'Emily specializes in creating intuitive user experiences that delight customers and drive business results.',
      image: 'emily-wilson'
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'Senior Developer',
      bio: 'David is a full-stack developer with expertise in building scalable web applications and innovative solutions.',
      image: 'david-kim'
    },
    {
      id: 6,
      name: 'Jessica Patel',
      role: 'Marketing Director',
      bio: 'Jessica leads our marketing efforts with a data-driven approach to help clients achieve their growth objectives.',
      image: 'jessica-patel'
    },
    {
      id: 7,
      name: 'Robert Taylor',
      role: 'Project Manager',
      bio: 'Robert ensures our projects are delivered on time and within budget while maintaining the highest quality standards.',
      image: 'robert-taylor'
    },
    {
      id: 8,
      name: 'Olivia Martinez',
      role: 'Content Strategist',
      bio: 'Olivia develops content strategies that engage audiences and drive meaningful connections with brands.',
      image: 'olivia-martinez'
    }
  ];

  const departments = [
    {
      name: 'Design',
      description: 'Our design team creates visually stunning and user-friendly interfaces that captivate your audience.',
      members: 12,
      icon: '🎨'
    },
    {
      name: 'Development',
      description: 'Our developers build robust, scalable solutions using the latest technologies and best practices.',
      members: 18,
      icon: '💻'
    },
    {
      name: 'Marketing',
      description: 'Our marketing team helps you reach your target audience and achieve your business goals.',
      members: 8,
      icon: '📈'
    },
    {
      name: 'Project Management',
      description: 'Our project managers ensure your project is delivered on time, within budget, and to your satisfaction.',
      members: 6,
      icon: '📋'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our Team" 
        subtitle="Meet the talented professionals behind our success."
      />

      {/* Leadership Team */}
      <Section>
        <Container>
          <SectionHeading
            title="Leadership Team"
            subtitle="The visionaries guiding our company"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(0, 4).map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden">
                    <img  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" alt={`${member.name}, ${member.role}`} src="https://images.unsplash.com/photo-1620886434979-5cc4ddc31858" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <div className="flex space-x-3">
                        <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                          <Linkedin size={16} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                          <Twitter size={16} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                          <Mail size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
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

      {/* Department Overview */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            title="Our Departments"
            subtitle="Specialized teams working together to deliver exceptional results"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((department, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{department.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{department.name}</h3>
                        <p className="text-muted-foreground mb-2">{department.description}</p>
                        <p className="text-sm font-medium text-primary">{department.members} team members</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Members */}
      <Section>
        <Container>
          <SectionHeading
            title="Meet Our Experts"
            subtitle="The talented professionals who make it all happen"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(4).map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden">
                    <img  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" alt={`${member.name}, ${member.role}`} src="https://images.unsplash.com/photo-1620886434979-5cc4ddc31858" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <div className="flex space-x-3">
                        <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                          <Linkedin size={16} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                          <Twitter size={16} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                          <Mail size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
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

      {/* Join Our Team */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals to join our team. Check out our current openings and apply today.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
              <Card className="bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-1">Senior UX Designer</h3>
                  <p className="text-sm text-muted-foreground">Full-time • Remote</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-1">Frontend Developer</h3>
                  <p className="text-sm text-muted-foreground">Full-time • Hybrid</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-1">Project Manager</h3>
                  <p className="text-sm text-muted-foreground">Full-time • On-site</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-1">Digital Marketing Specialist</h3>
                  <p className="text-sm text-muted-foreground">Full-time • Remote</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default TeamPage;
