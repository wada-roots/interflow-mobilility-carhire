
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FleetShowcase = () => {
  const vehicles = [
    {
      category: 'Economy',
      name: 'Toyota Corolla',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['4 Seats', 'Manual/Auto', 'AC', 'Fuel Efficient'],
      price: 'From KSh 3,500/day'
    },
    {
      category: 'SUV',
      name: 'Toyota Land Cruiser',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['7 Seats', '4WD', 'Premium Interior', 'Safety Features'],
      price: 'From KSh 12,000/day'
    },
    {
      category: 'Premium',
      name: 'Mercedes E-Class',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['5 Seats', 'Luxury Interior', 'Advanced Tech', 'Premium Sound'],
      price: 'From KSh 15,000/day'
    },
    {
      category: 'Van',
      name: 'Toyota Hiace',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['14 Seats', 'Group Travel', 'AC', 'Luggage Space'],
      price: 'From KSh 8,000/day'
    },
    {
      category: 'Electric',
      name: 'Tesla Model S',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['5 Seats', 'Electric', 'Autopilot', 'Premium Tech'],
      price: 'From KSh 18,000/day'
    },
    {
      category: 'Bus',
      name: 'Luxury Coach',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['30+ Seats', 'Long Distance', 'Entertainment', 'Comfort'],
      price: 'From KSh 25,000/day'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Diverse Fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our extensive range of well-maintained vehicles, 
            from economy cars to luxury SUVs and everything in between.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-500">
                    {vehicle.price}
                  </span>
                  <Button 
                    size="sm"
                    className="bg-blue-900 hover:bg-blue-800 text-white"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-3"
          >
            View Complete Fleet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FleetShowcase;
