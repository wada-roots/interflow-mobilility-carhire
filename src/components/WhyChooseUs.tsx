
import React from 'react';

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
    <section className="py-16" style={{ background: 'hsl(var(--goldish-background))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose Interflow Mobility?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto text-white">
            We're committed to providing exceptional mobility solutions that exceed your expectations 
            with reliability, convenience, and outstanding customer service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                {benefit.title}
              </h3>
              <p className="text-gray-800 leading-relaxed">
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
