
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactInfoCard = ({ details }) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0xNiAxNmMyLjIgMCA0IDEuOCA0IDRzLTEuOCA0LTQgNC00LTEuOC00LTQgMS44LTQgNC00em0wIDMyYzIuMiAwIDQgMS44IDQgNHMtMS44IDQtNCA0LTQtMS44LTQtNCAxLjgtNCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Our Location</h3>
              <p className="text-muted-foreground">{details.location}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Phone Number</h3>
              <p className="text-muted-foreground">{details.phone}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Email Address</h3>
              <p className="text-muted-foreground">{details.email}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Business Hours</h3>
              <p className="text-muted-foreground">{details.hours.weekdays}</p>
              <p className="text-muted-foreground">{details.hours.weekends}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
