
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      category: "Premium",
      tagline: "Luxury Redefined",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Mercedes E-Class luxury car"
    },
    {
      id: 2,
      category: "Economy",
      tagline: "Smart & Efficient",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Toyota Corolla economy car"
    },
    {
      id: 3,
      category: "SUV",
      tagline: "Adventure Awaits",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Toyota Land Cruiser SUV"
    },
    {
      id: 4,
      category: "Bus",
      tagline: "Group Travel Excellence",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Luxury Coach bus"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4500);
      return () => clearInterval(interval);
    }
  }, [isHovered, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            
            {/* White-Gold Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-6 md:p-8 lg:p-12">
              {/* Top Left - Category & Tagline */}
              <div className="flex-shrink-0">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                  {slide.category}
                </h2>
                <p className="text-xl md:text-2xl text-yellow-600 font-light">
                  {slide.tagline}
                </p>
              </div>
              
              {/* Bottom Right - Action Buttons */}
              <div className="flex-shrink-0 self-end">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-500/25 group border-0"
                  >
                    BOOK NOW
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Link to="/fleet">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/80 backdrop-blur-sm group"
                    >
                      EXPLORE FLEET
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-yellow-600 group-hover:text-yellow-700 transition-colors" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-yellow-600 group-hover:text-yellow-700 transition-colors" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-yellow-500 scale-125' 
                : 'bg-white/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
