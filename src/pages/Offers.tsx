
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Star, Users, Car, Shield, Gift } from 'lucide-react';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "New Customer Special",
      discount: "25% OFF",
      description: "Get 25% off your first month of any leasing package. Perfect for businesses looking to upgrade their fleet.",
      validUntil: "Dec 31, 2024",
      terms: "Valid for new customers only. Cannot be combined with other offers.",
      icon: <Gift className="w-8 h-8" />,
      color: "bg-green-500"
    },
    {
      id: 2,
      title: "Corporate Fleet Deal",
      discount: "Up to 30% OFF",
      description: "Special pricing for corporate clients leasing 5 or more vehicles. Includes comprehensive insurance and maintenance.",
      validUntil: "Jan 15, 2025",
      terms: "Minimum 12-month lease required. Subject to credit approval.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Airport Transfer Package",
      discount: "20% OFF",
      description: "Save on all airport transfer bookings made this month. Reliable, comfortable, and punctual service.",
      validUntil: "Dec 25, 2024",
      terms: "Valid for bookings made in December 2024. Non-transferable.",
      icon: <Car className="w-8 h-8" />,
      color: "bg-orange-500"
    },
    {
      id: 4,
      title: "Premium Protection Plan",
      discount: "Free Upgrade",
      description: "Get our Premium Protection Plan absolutely free with any 6-month+ lease agreement.",
      validUntil: "Feb 28, 2025",
      terms: "Available with new lease agreements only. Full terms apply.",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-purple-500"
    },
    {
      id: 5,
      title: "Long-term Lease Discount",
      discount: "Up to 35% OFF",
      description: "Extended lease agreements (12+ months) qualify for our best rates and additional perks.",
      validUntil: "Ongoing",
      terms: "Minimum 12-month commitment required. Early termination fees apply.",
      icon: <Clock className="w-8 h-8" />,
      color: "bg-indigo-500"
    },
    {
      id: 6,
      title: "5-Star Service Guarantee",
      discount: "Money Back",
      description: "Not satisfied with our service? Get your money back within the first 30 days, no questions asked.",
      validUntil: "Ongoing",
      terms: "Valid for new customers. Refund processed within 7 business days.",
      icon: <Star className="w-8 h-8" />,
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Exclusive Offers & Deals
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take advantage of our limited-time offers and save on premium mobility solutions. 
            From corporate fleet deals to individual leasing packages, we have something for everyone.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <Card key={offer.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${offer.color} text-white p-3 rounded-full`}>
                      {offer.icon}
                    </div>
                    <span className="text-2xl font-bold text-green-600">{offer.discount}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{offer.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {offer.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-500">
                      <strong>Valid until:</strong> {offer.validUntil}
                    </div>
                    <div className="text-xs text-gray-400 border-t pt-3">
                      <strong>Terms:</strong> {offer.terms}
                    </div>
                    <Button className="w-full bg-blue-900 hover:bg-blue-800">
                      Claim Offer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#EFBF04] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Miss Out on These Amazing Deals
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our current offers and find the perfect mobility solution for your needs.
          </p>
          <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
            Contact Us Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;
