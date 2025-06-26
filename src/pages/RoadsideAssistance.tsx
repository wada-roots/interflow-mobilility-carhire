
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RoadsideAssistance = () => {
  const services = [
    {
      icon: '🔧',
      title: '24/7 Emergency Repairs',
      description: 'Professional mechanical assistance available round the clock for any vehicle breakdown.'
    },
    {
      icon: '🚗',
      title: 'Towing Service',
      description: 'Safe and reliable towing service to get your vehicle to the nearest service center.'
    },
    {
      icon: '🔋',
      title: 'Battery Jump Start',
      description: 'Quick battery jump start service to get you back on the road immediately.'
    },
    {
      icon: '🛞',
      title: 'Tire Change Service',
      description: 'Professional tire changing service for flat tires and emergencies.'
    },
    {
      icon: '⛽',
      title: 'Fuel Delivery',
      description: 'Emergency fuel delivery service when you run out of gas on the road.'
    },
    {
      icon: '🔑',
      title: 'Lockout Service',
      description: 'Professional lockout assistance when you\'re locked out of your vehicle.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            24/7 Roadside Assistance
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Never worry about being stranded on the road. Our professional roadside assistance 
            team is available 24/7 to help you with any vehicle emergency.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Call for Help Now
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Roadside Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive roadside assistance services to keep you safe and mobile.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Emergency Help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Call our 24/7 emergency hotline for immediate assistance
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">
              +254 700 HELP (4357)
            </div>
            <p className="text-gray-600 mb-6">Available 24 hours a day, 7 days a week</p>
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
              Request Service Online
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoadsideAssistance;
