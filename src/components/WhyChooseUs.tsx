import React from 'react';
import Footer from '@/components/Footer';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: '🚗',
      title: '24/7 Support',
      description: 'Round-the-clock customer support and roadside assistance whenever you need us.'
    },
    {
      icon: '⭐',
      title: 'Reliable Vehicles',
      description: 'Well-maintained, regularly serviced vehicles that you can trust for any journey.'
    },
    {
      icon: '💼',
      title: 'Custom Leasing Plans',
      description: 'Flexible leasing options tailored to your specific business or personal needs.'
    },
    {
      icon: '🛡️',
      title: 'Comprehensive Insurance',
      description: 'Full insurance coverage included for peace of mind on every trip.'
    },
    {
      icon: '📱',
      title: 'Easy Booking',
      description: 'Simple online booking system with instant confirmation and digital contracts.'
    },
    {
      icon: '🏆',
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in customer service and vehicle quality across Kenya.'
    }
  ];

  return (
    // Changed background to white (bg-white) and added a subtle shadow
    <section className="py-16 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Changed text color from white to blue-900 for contrast on white background */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Why Choose Alpha Interflow Mobility?
          </h2>
          {/* Changed text color from white to gray-700 for contrast on white background */}
          <p className="text-xl opacity-90 max-w-3xl mx-auto text-gray-700">
            We're committed to providing exceptional mobility solutions that exceed your expectations 
            with reliability, convenience, and outstanding customer service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              // Added background, padding, rounded corners, shadow, and enhanced hover effects
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl 
                         transform hover:-translate-y-2 transition-all duration-300 
                         flex flex-col items-center group"
            >
              <div 
                // Enhanced icon styling with a colorful border and larger size,
                // and retained the hover scale effect.
                className="text-5xl mb-6 p-4 rounded-full border-4 border-orange-500 
                           bg-orange-100 group-hover:scale-110 transition-transform duration-300"
              >
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-900">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
