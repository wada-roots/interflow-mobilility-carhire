
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Eye, Award, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { number: "500+", label: "Vehicles in Fleet" },
    { number: "1000+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" }
  ];

  const teamMembers = [
    {
      name: "James Mwangi",
      position: "Chief Executive Officer",
      bio: "With over 15 years in the transportation industry, James leads our vision of transforming mobility solutions in Kenya.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Njeri",
      position: "Operations Director",
      bio: "Sarah oversees our daily operations ensuring seamless service delivery and customer satisfaction across all touchpoints.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Ochieng",
      position: "Fleet Manager",
      bio: "Michael manages our extensive fleet with expertise in logistics, maintenance, and optimization for maximum efficiency.",
      image: "/placeholder.svg"
    },
    {
      name: "Grace Wanjiku",
      position: "Customer Relations Manager",
      bio: "Grace ensures our customers receive exceptional service and maintains long-term relationships with our corporate clients.",
      image: "/placeholder.svg"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Interflow Mobility was established with a vision to revolutionize transportation in Kenya."
    },
    {
      year: "2020",
      title: "Fleet Expansion",
      description: "Expanded our fleet to over 100 vehicles and launched corporate leasing services."
    },
    {
      year: "2021",
      title: "Airport Transfer Launch",
      description: "Introduced premium airport transfer services with 24/7 availability."
    },
    {
      year: "2022",
      title: "Digital Platform",
      description: "Launched our digital booking platform and mobile app for enhanced customer experience."
    },
    {
      year: "2023",
      title: "Market Leader",
      description: "Rose to become one of Kenya's leading mobility solution providers."
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Established our innovation center focusing on sustainable mobility solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Interflow Mobility
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We are Kenya's premier mobility solutions provider, dedicated to transforming 
            transportation through innovation, reliability, and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-blue-900">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019, Interflow Mobility emerged from a simple yet powerful vision: 
                  to revolutionize transportation in Kenya by providing reliable, affordable, 
                  and innovative mobility solutions.
                </p>
                <p>
                  What started as a small fleet of vehicles has grown into one of Kenya's 
                  most trusted mobility providers, serving hundreds of individual and corporate 
                  clients across the country. Our journey has been marked by continuous innovation, 
                  unwavering commitment to quality, and a deep understanding of our customers' needs.
                </p>
                <p>
                  Today, we operate a modern fleet of over 500 vehicles and offer comprehensive 
                  services ranging from personal and corporate leasing to specialized transportation 
                  solutions. Our success is built on the foundation of trust, reliability, and 
                  our team's dedication to excellence.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="flex items-start gap-4 p-0">
                  <Target className="w-8 h-8 text-blue-900 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide innovative, reliable, and customer-centric mobility solutions 
                      that empower individuals and businesses to achieve their goals efficiently.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="flex items-start gap-4 p-0">
                  <Eye className="w-8 h-8 text-blue-900 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      To be East Africa's leading mobility solutions provider, setting the 
                      standard for innovation, sustainability, and customer excellence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the key milestones that have shaped our growth and success over the years.
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-900 text-white rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <h3 className="text-xl font-semibold text-blue-900">{milestone.title}</h3>
                      <span className="text-2xl font-bold text-[#EFBF04]">{milestone.year}</span>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive our vision and ensure 
              exceptional service delivery every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-900 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-[#EFBF04] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Ready to experience the difference? Contact us today and let us help you 
              find the perfect mobility solution for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <MapPin className="w-12 h-12 mx-auto text-blue-900" />
              <h3 className="text-xl font-semibold">Visit Us</h3>
              <p className="text-gray-700">
                Westlands Business Center<br />
                Nairobi, Kenya
              </p>
            </div>
            <div className="space-y-4">
              <Phone className="w-12 h-12 mx-auto text-blue-900" />
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="text-gray-700">
                +254 700 123 456<br />
                +254 711 987 654
              </p>
            </div>
            <div className="space-y-4">
              <Mail className="w-12 h-12 mx-auto text-blue-900" />
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-gray-700">
                info@interflowmobility.com<br />
                support@interflowmobility.com
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
