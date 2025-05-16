
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

const NotFoundPage = () => {
  return (
    <Section className="py-20 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mb-8 inline-block">
              <div className="text-9xl font-bold text-gray-200 dark:text-gray-800">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gradient">Page Not Found</h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-muted-foreground mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" /> Go to Homepage
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
                <button>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                </button>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
