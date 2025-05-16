
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Calendar, User, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: '10 Web Design Trends to Watch in 2025',
      excerpt: 'Explore the latest web design trends that are shaping the digital landscape and how you can incorporate them into your website.',
      category: 'Design',
      author: 'Sarah Chen',
      date: 'May 10, 2025',
      readTime: '5 min read',
      image: 'web-design-trends'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to SEO in 2025',
      excerpt: 'Learn the latest SEO strategies and techniques to improve your website\'s visibility and drive more organic traffic.',
      category: 'Marketing',
      author: 'Michael Rodriguez',
      date: 'May 5, 2025',
      readTime: '8 min read',
      image: 'seo-guide'
    },
    {
      id: 3,
      title: 'How to Build a Successful E-Commerce Business',
      excerpt: 'Discover the essential steps to launch and grow a successful e-commerce business in today\'s competitive market.',
      category: 'E-Commerce',
      author: 'Emily Wilson',
      date: 'April 28, 2025',
      readTime: '10 min read',
      image: 'ecommerce-business'
    },
    {
      id: 4,
      title: 'The Power of User Experience Design',
      excerpt: 'Understand why user experience design is crucial for your business and how it can impact your bottom line.',
      category: 'Design',
      author: 'Alex Johnson',
      date: 'April 20, 2025',
      readTime: '6 min read',
      image: 'ux-design'
    },
    {
      id: 5,
      title: 'Mobile App Development: Native vs. Cross-Platform',
      excerpt: 'Compare the pros and cons of native and cross-platform mobile app development to make the right choice for your project.',
      category: 'Development',
      author: 'David Kim',
      date: 'April 15, 2025',
      readTime: '7 min read',
      image: 'mobile-app-development'
    },
    {
      id: 6,
      title: 'Content Marketing Strategies That Drive Results',
      excerpt: 'Learn effective content marketing strategies that can help you attract, engage, and convert your target audience.',
      category: 'Marketing',
      author: 'Jessica Patel',
      date: 'April 8, 2025',
      readTime: '9 min read',
      image: 'content-marketing'
    }
  ];

  const categories = [
    { name: 'All', count: blogPosts.length },
    { name: 'Design', count: blogPosts.filter(post => post.category === 'Design').length },
    { name: 'Development', count: blogPosts.filter(post => post.category === 'Development').length },
    { name: 'Marketing', count: blogPosts.filter(post => post.category === 'Marketing').length },
    { name: 'E-Commerce', count: blogPosts.filter(post => post.category === 'E-Commerce').length }
  ];

  const filteredPosts = searchQuery
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogPosts;

  return (
    <>
      <PageHeader 
        title="Our Blog" 
        subtitle="Insights, tips, and trends from our experts to help you succeed in the digital world."
      />

      {/* Blog Content */}
      <Section className="pt-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Search Results Info */}
              {searchQuery && (
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Showing {filteredPosts.length} results for "{searchQuery}"
                  </p>
                </div>
              )}

              {/* Blog Posts */}
              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img  className="w-full h-full object-cover min-h-[200px]" alt={post.title} src="https://images.unsplash.com/photo-1642452222105-b2933e287da4" />
                        </div>
                        <CardContent className="p-6 md:w-2/3">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {post.category}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center">
                              <Clock className="h-3 w-3 mr-1" /> {post.readTime}
                            </span>
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold mb-2">
                            <Link to="#" className="hover:text-primary transition-colors">
                              {post.title}
                            </Link>
                          </h2>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <User className="h-4 w-4 mr-1" /> {post.author}
                              <span className="mx-2">•</span>
                              <Calendar className="h-4 w-4 mr-1" /> {post.date}
                            </div>
                            <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-primary">
                              <Link to="#" className="flex items-center text-primary">
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button
                          onClick={() => setSearchQuery(category.name === 'All' ? '' : category.name)}
                          className="flex items-center justify-between w-full px-2 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <span>{category.name}</span>
                          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                            {category.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <li key={index} className="flex gap-3">
                        <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                          <img  className="w-full h-full object-cover" alt={post.title} src="https://images.unsplash.com/photo-1687006067259-6de13ca3875e" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm line-clamp-2">
                            <Link to="#" className="hover:text-primary transition-colors">
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-muted-foreground">{post.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Web Design', 'UX', 'Development', 'SEO', 'Marketing', 'E-Commerce', 'Mobile', 'Branding', 'Trends'].map((tag, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(tag)}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Stay updated with our latest articles, tips, and industry insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default BlogPage;
