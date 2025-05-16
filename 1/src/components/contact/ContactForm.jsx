
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export const ContactForm = ({ formData, handleChange, handleSubmit, isSubmitting }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Project Inquiry"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Tell us about your project or inquiry..."
            ></textarea>
          </div>
          <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center">
                Send Message <Send className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
