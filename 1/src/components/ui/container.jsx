
import React from 'react';
import { cn } from '@/lib/utils';

const Container = ({ children, className, ...props }) => {
  return (
    <div className={cn('container mx-auto px-4 md:px-6', className)} {...props}>
      {children}
    </div>
  );
};

export { Container };
