
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PersonalLeasing = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Affordable Monthly Payments',
      description: 'Lower monthly payments compared to purchasing, freeing up your cash flow.'
    },
    {
      icon: '🔄',
      title: 'Latest Models',
      description: 'Access to the newest vehicle models with latest technology and features.'
    },
    {
      icon: '🛡️',
      title: 'Warranty Coverage',
      description: 'Full manufacturer warranty coverage for peace of mind throughout your lease.'
    },
    {
      icon: '🔧',
      title: 'Maintenance Included',
      description: 'Regular maintenance and servicing included in your leasing package.'
    }
  ];

  const packages = [
    {
      name: 'Basic Lease',
      duration: '12-24 months',
      features: ['Vehicle lease', 'Basic insurance', 'Roadside assistance'],
      price: 'From KSh 25,000/month'
    },
    {
      name: 'Premium Lease',
      duration: '24-36 months',
      features: ['Vehicle lease', 'Comprehensive insurance', 'Full maintenance', 'Roadside assistance'],
      price: 'From KSh 35,000/month'
    },
    {
      name: 'Luxury Lease',
      duration: '36+ months',
      features: ['Premium vehicle lease', 'Full coverage insurance', 'Complete maintenance', '24/7 support', 'Replacement vehicle'],
      price: 'From KSh 50,000/month'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Personal Vehicle Leasing
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Drive your dream car without the commitment of ownership. 
            Flexible personal leasing options tailored to your lifestyle and budget.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Get Your Quote
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Personal Leasing?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leasing Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the package that best fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.duration}</p>
                  <div className="text-2xl font-bold text-orange-500 mb-6">{pkg.price}</div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600">✓ {feature}</li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalLeasing;
