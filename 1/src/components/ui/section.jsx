
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Section = ({ 
  children, 
  className, 
  animate = true,
  ...props 
}) => {
  const content = (
    <section 
      className={cn('py-16 md:py-24', className)} 
      {...props}
    >
      {children}
    </section>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export { Section };
