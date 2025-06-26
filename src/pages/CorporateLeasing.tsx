
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CorporateLeasing = () => {
  const solutions = [
    {
      icon: '🏢',
      title: 'Fleet Management',
      description: 'Complete fleet management solutions for businesses of all sizes.'
    },
    {
      icon: '📊',
      title: 'Cost Control',
      description: 'Predictable monthly costs with comprehensive fleet management.'
    },
    {
      icon: '⚙️',
      title: 'Maintenance Solutions',
      description: 'Full maintenance packages to keep your fleet running smoothly.'
    },
    {
      icon: '📈',
      title: 'Scalable Options',
      description: 'Flexible solutions that grow with your business needs.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Corporate Vehicle Leasing
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Streamline your business operations with our comprehensive corporate leasing solutions. 
            From single vehicles to entire fleets, we've got you covered.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Request Corporate Quote
          </Button>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Corporate Solutions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Corporate Leasing?
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✓</span>
                  Reduce capital expenditure and improve cash flow
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✓</span>
                  Predictable monthly costs for better budgeting
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✓</span>
                  Tax benefits and accounting advantages
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✓</span>
                  Professional fleet management services
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✓</span>
                  24/7 support and roadside assistance
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Get Started Today
              </h3>
              <p className="text-gray-600 mb-6">
                Contact our corporate leasing specialists for a customized quote.
              </p>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white mb-4">
                Request Quote
              </Button>
              <p className="text-center text-gray-500">
                Call: +254 700 123 456
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateLeasing;
