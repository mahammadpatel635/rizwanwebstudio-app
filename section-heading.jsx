
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const SectionHeading = ({ title, subtitle, centered = true, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'space-y-4 mb-12',
        centered && 'text-center',
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        'h-1 w-20 bg-primary rounded',
        centered && 'mx-auto'
      )} />
    </motion.div>
  );
};

export { SectionHeading };
