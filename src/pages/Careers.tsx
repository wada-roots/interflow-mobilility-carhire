
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Heart, Award, TrendingUp, Briefcase, GraduationCap } from 'lucide-react';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Fleet Operations Manager",
      location: "Nairobi, Kenya",
      type: "Full-time",
      department: "Operations",
      experience: "3-5 years",
      description: "Lead our fleet operations team and ensure optimal vehicle utilization and maintenance schedules.",
      requirements: ["Bachelor's degree in Operations Management or related field", "3+ years fleet management experience", "Strong analytical and leadership skills"]
    },
    {
      id: 2,
      title: "Customer Service Representative",
      location: "Nairobi, Kenya",
      type: "Full-time",
      department: "Customer Service",
      experience: "1-2 years",
      description: "Provide exceptional customer support for our leasing and mobility services.",
      requirements: ["Diploma in Business or related field", "Excellent communication skills", "Customer service experience preferred"]
    },
    {
      id: 3,
      title: "Professional Driver",
      location: "Nairobi, Kenya",
      type: "Full-time",
      department: "Operations",
      experience: "2+ years",
      description: "Provide safe and reliable transportation services for our airport transfer and chauffeured services.",
      requirements: ["Valid driving license with clean record", "2+ years professional driving experience", "Knowledge of Nairobi routes"]
    },
    {
      id: 4,
      title: "Sales Executive",
      location: "Nairobi, Kenya",
      type: "Full-time",
      department: "Sales",
      experience: "2-4 years",
      description: "Drive business growth by acquiring new clients and managing existing relationships.",
      requirements: ["Bachelor's degree in Sales/Marketing", "2+ years B2B sales experience", "Excellent negotiation skills"]
    },
    {
      id: 5,
      title: "Maintenance Technician",
      location: "Nairobi, Kenya",
      type: "Full-time",
      department: "Maintenance",
      experience: "3+ years",
      description: "Ensure all fleet vehicles are properly maintained and serviced according to manufacturer specifications.",
      requirements: ["Certificate in Automotive Technology", "3+ years vehicle maintenance experience", "Knowledge of modern vehicle systems"]
    },
    {
      id: 6,
      title: "Digital Marketing Specialist",
      location: "Nairobi, Kenya",
      type: "Full-time",
      department: "Marketing",
      experience: "2-3 years",
      description: "Develop and execute digital marketing strategies to increase brand awareness and lead generation.",
      requirements: ["Degree in Marketing/Communications", "Digital marketing certification", "Social media and content creation skills"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support for you and your family."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities, training programs, and career advancement support."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Clear career progression paths with opportunities to advance within the organization."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Culture",
      description: "Collaborative work environment with team building activities and social events."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition & Rewards",
      description: "Performance-based bonuses, employee recognition programs, and achievement awards."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Flexible working arrangements, paid time off, and family-friendly policies."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Team
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Build your career with Kenya's leading mobility solutions provider. 
            We're looking for passionate individuals who want to shape the future of transportation.
          </p>
          <Button size="lg" className="bg-[#EFBF04] hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-3">
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Why Choose Interflow Mobility?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe our people are our greatest asset. That's why we invest in creating 
              an environment where talent thrives and careers flourish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full text-blue-900 w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Current Job Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and find the perfect role that matches your skills and aspirations.
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-blue-900 hover:bg-blue-800 whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {job.description}
                  </CardDescription>
                  <div>
                    <h4 className="font-semibold mb-2">Key Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-[#EFBF04] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Apply
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Ready to join our team? Here's how our application process works:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold">Submit Application</h3>
              <p className="text-gray-700">Send us your CV and cover letter for the position you're interested in.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold">Initial Review</h3>
              <p className="text-gray-700">Our HR team will review your application and contact qualified candidates.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold">Interview Process</h3>
              <p className="text-gray-700">Participate in our interview process, which may include multiple rounds.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                4
              </div>
              <h3 className="text-xl font-semibold">Welcome Aboard</h3>
              <p className="text-gray-700">Join our team and start your journey with comprehensive onboarding.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
              Send Your CV
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
