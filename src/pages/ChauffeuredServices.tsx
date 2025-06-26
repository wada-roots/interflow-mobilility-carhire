
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ChauffeuredServices = () => {
  const services = [
    {
      icon: '🏢',
      title: 'Executive Transport',
      description: 'Premium chauffeured services for business executives and VIPs.',
      features: ['Professional chauffeurs', 'Luxury vehicles', 'Punctual service', 'Confidentiality']
    },
    {
      icon: '✈️',
      title: 'Airport Transfers',
      description: 'Reliable airport pickup and drop-off services with flight monitoring.',
      features: ['Flight tracking', 'Meet & greet', 'Luggage assistance', '24/7 availability']
    },
    {
      icon: '💍',
      title: 'Special Events',
      description: 'Elegant transportation for weddings, parties, and special occasions.',
      features: ['Wedding cars', 'Event coordination', 'Red carpet service', 'Photography support']
    },
    {
      icon: '🏨',
      title: 'Hospitality Services',
      description: 'Guest transportation services for hotels and hospitality businesses.',
      features: ['Guest transfers', 'Tour services', 'Multilingual drivers', 'Flexible scheduling']
    }
  ];

  const vehicles = [
    {
      type: 'Luxury Sedan',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      passengers: '1-3 passengers',
      price: 'From KSh 8,000/hour'
    },
    {
      type: 'Executive SUV',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      passengers: '1-6 passengers',
      price: 'From KSh 12,000/hour'
    },
    {
      type: 'Luxury Van',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      passengers: '6-14 passengers',
      price: 'From KSh 15,000/hour'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Chauffeured Services
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Experience the ultimate in luxury transportation with our professional chauffeured services. 
            Perfect for executives, special events, and discerning travelers.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Book Chauffeur
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Chauffeured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional, reliable, and luxurious transportation services tailored to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600">
                            ✓ {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Luxury Vehicle Fleet
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our premium collection of luxury vehicles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.type}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {vehicle.type}
                  </h3>
                  <p className="text-gray-600 mb-4">{vehicle.passengers}</p>
                  <div className="text-lg font-bold text-orange-500 mb-4">
                    {vehicle.price}
                  </div>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Chauffeured Services?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl mb-3">👨‍💼</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-400">Professional Chauffeurs</h3>
              <p className="text-blue-100 text-sm">Experienced, licensed, and professionally trained drivers</p>
            </div>
            <div>
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-400">Premium Vehicles</h3>
              <p className="text-blue-100 text-sm">Luxury vehicles maintained to the highest standards</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🕐</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-400">Punctual Service</h3>
              <p className="text-blue-100 text-sm">Always on time, every time, guaranteed</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-400">Confidential & Secure</h3>
              <p className="text-blue-100 text-sm">Complete privacy and security for all our clients</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChauffeuredServices;
