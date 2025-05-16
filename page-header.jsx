
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const PageHeader = ({ title, subtitle, className }) => {
  return (
    <div className={cn('relative py-24 md:py-32 overflow-hidden', className)}>
      <div className="absolute inset-0 gradient-bg opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0xNiAxNmMyLjIgMCA0IDEuOCA0IDRzLTEuOCA0LTQgNC00LTEuOC00LTQgMS44LTQgNC00em0wIDMyYzIuMiAwIDQgMS44IDQgNHMtMS44IDQtNCA0LTQtMS44LTQtNCAxLjgtNCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export { PageHeader };
