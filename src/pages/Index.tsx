
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import FleetShowcase from '@/components/FleetShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServiceCards />
      <FleetShowcase />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
