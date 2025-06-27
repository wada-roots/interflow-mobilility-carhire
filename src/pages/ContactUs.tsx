
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Office',
      details: ['Nairobi CBD', 'Kenya']
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+254 700 123 456', '+254 711 234 567']
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['info@interflow.co.ke', 'support@interflow.co.ke']
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat - Sun: 9:00 AM - 4:00 PM']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help you with all your mobility needs 
            and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" type="text" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" type="text" placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <select id="service" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option value="">Select a service</option>
                    <option value="personal-leasing">Personal Leasing</option>
                    <option value="corporate-leasing">Corporate Leasing</option>
                    <option value="airport-transfer">Airport Transfer</option>
                    <option value="chauffeured-services">Chauffeured Services</option>
                    <option value="truck-rental">Truck Rental</option>
                    <option value="roadside-assistance">Roadside Assistance</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Choose the most convenient way to reach us, 
                and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-4">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="text-2xl">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold text-blue-900 mb-1">
                            {info.title}
                          </h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">
                  🚨 Emergency Assistance
                </h3>
                <p className="text-orange-700 mb-3">
                  For 24/7 roadside assistance and emergencies:
                </p>
                <div className="text-xl font-bold text-orange-800">
                  +254 700 HELP (4357)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
