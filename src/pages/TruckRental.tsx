
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TruckRental = () => {
  const truckTypes = [
    {
      name: 'Light Commercial Trucks',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      capacity: 'Up to 3 tons',
      features: ['Perfect for local deliveries', 'Easy to drive', 'Fuel efficient', 'City access'],
      price: 'From KSh 4,000/day'
    },
    {
      name: 'Medium Trucks',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      capacity: '3-8 tons',
      features: ['Regional transport', 'Covered cargo area', 'GPS tracking', 'Loading assistance'],
      price: 'From KSh 8,000/day'
    },
    {
      name: 'Heavy Duty Trucks',
      image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      capacity: '8+ tons',
      features: ['Long distance hauls', 'Professional drivers', '24/7 tracking', 'Insurance included'],
      price: 'From KSh 15,000/day'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Truck Rental Services
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Professional truck rental solutions for all your cargo and transportation needs. 
            From light commercial vehicles to heavy-duty trucks, we have the right vehicle for your job.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Book a Truck
          </Button>
        </div>
      </section>

      {/* Truck Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Truck Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse range of well-maintained trucks suitable for various cargo requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {truckTypes.map((truck, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={truck.image} 
                    alt={truck.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {truck.capacity}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {truck.name}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {truck.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-500">
                      {truck.price}
                    </span>
                    <Button 
                      size="sm"
                      className="bg-blue-900 hover:bg-blue-800 text-white"
                    >
                      Rent Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Truck Rental Solutions
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✓</span>
                  Professional drivers available
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✓</span>
                  Loading and unloading assistance
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✓</span>
                  GPS tracking for security
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✓</span>
                  Comprehensive insurance coverage
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✓</span>
                  24/7 roadside assistance
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">✓</span>
                  Flexible rental periods
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us for specialized truck rental requirements or long-term contracts.
              </p>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white mb-4">
                Get Custom Quote
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

export default TruckRental;
