
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BusinessSolutions = () => {
  const services = [
    {
      icon: '🚚',
      title: 'Delivery Solutions',
      description: 'Specialized vehicles for last-mile delivery and logistics operations.'
    },
    {
      icon: '👔',
      title: 'Executive Transport',
      description: 'Premium vehicles for executive transportation and client meetings.'
    },
    {
      icon: '🏗️',
      title: 'Construction Fleet',
      description: 'Heavy-duty vehicles and equipment for construction projects.'
    },
    {
      icon: '🏥',
      title: 'Healthcare Services',
      description: 'Specialized vehicles for healthcare and emergency services.'
    },
    {
      icon: '🎓',
      title: 'Educational Transport',
      description: 'Safe and reliable transportation solutions for educational institutions.'
    },
    {
      icon: '🌟',
      title: 'Event Management',
      description: 'Luxury and utility vehicles for events and special occasions.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Business Solutions
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Tailored mobility solutions for every business need. From delivery fleets 
            to executive transport, we provide specialized vehicles for your industry.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Explore Solutions
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that different businesses have unique transportation needs. 
              Our specialized solutions are designed for your specific industry requirements.
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
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let us help you find the perfect mobility solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSolutions;
