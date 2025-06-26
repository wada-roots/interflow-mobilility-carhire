import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Car, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-700/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Trust indicators */}
            <div className="flex justify-center items-center space-x-8 mb-8 opacity-80">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium">Trusted Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Car className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium">Premium Fleet</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block animate-fade-in">Drive</span>
              <span className="block text-orange-400 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Comfort.
              </span>
              <span className="block animate-fade-in" style={{animationDelay: '0.4s'}}>
                Lease Smart.
              </span>
              <span className="block text-orange-400 animate-fade-in" style={{animationDelay: '0.6s'}}>
                Move Forward.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed font-light">
              Premium vehicle rental, leasing, and fleet management solutions across Kenya. 
              <br />
              <span className="text-orange-300 font-medium">Experience reliability, comfort, and exceptional service.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-orange-500/25 group"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* Wrapped the "Explore Fleet" button in a Link component */}
              <Link to="/fleet"> 
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-orange-500/25 group bg-transparent"
                >
                  Explore Fleet
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-sm font-medium opacity-80">Vehicles Available</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-3xl font-bold text-orange-400 mb-2">10+</div>
                <div className="text-sm font-medium opacity-80">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-sm font-medium opacity-80">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;