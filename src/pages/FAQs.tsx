
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, Phone, Mail, MessageSquare } from 'lucide-react';

const FAQs = () => {
  const faqCategories = [
    {
      category: "General Questions",
      faqs: [
        {
          question: "What services does Interflow Mobility offer?",
          answer: "We offer comprehensive mobility solutions including vehicle leasing (personal and corporate), airport transfers, roadside assistance, chauffeured services, truck rentals, and fleet management solutions."
        },
        {
          question: "How do I get started with your services?",
          answer: "You can get started by contacting us through our website, phone, or visiting our office. We'll discuss your needs and provide a customized solution that fits your requirements and budget."
        },
        {
          question: "Do you operate 24/7?",
          answer: "Our roadside assistance and emergency services operate 24/7. For other services, our standard business hours are Monday to Friday 8 AM to 6 PM, and Saturday 9 AM to 4 PM."
        }
      ]
    },
    {
      category: "Leasing & Pricing",
      faqs: [
        {
          question: "What are your leasing terms?",
          answer: "We offer flexible leasing terms ranging from 3 months to 5 years, depending on your needs. Shorter terms are available for specific business requirements with adjusted pricing."
        },
        {
          question: "What's included in the leasing package?",
          answer: "Our leasing packages typically include comprehensive insurance, regular maintenance, roadside assistance, and 24/7 customer support. Specific inclusions vary by package type."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No, we believe in transparent pricing. All costs are clearly outlined in your contract, including any applicable taxes, insurance, and maintenance fees."
        },
        {
          question: "Can I modify my lease agreement?",
          answer: "Yes, we offer flexible modifications to accommodate changing business needs. Additional terms and conditions may apply depending on the nature of changes requested."
        }
      ]
    },
    {
      category: "Airport Transfers",
      faqs: [
        {
          question: "How far in advance should I book airport transfers?",
          answer: "We recommend booking at least 24 hours in advance, though we can accommodate last-minute bookings subject to availability. For guaranteed service, early booking is preferred."
        },
        {
          question: "What if my flight is delayed?",
          answer: "We monitor flight schedules and adjust pickup times accordingly at no extra charge. Our drivers are notified of any delays to ensure you're not left waiting."
        },
        {
          question: "Do you provide child car seats?",
          answer: "Yes, we provide complimentary child car seats upon request. Please specify the age and weight of children when booking to ensure we have the appropriate safety equipment."
        }
      ]
    },
    {
      category: "Fleet Management",
      faqs: [
        {
          question: "What size fleets do you manage?",
          answer: "We manage fleets of all sizes, from small businesses with 2-3 vehicles to large corporations with 100+ vehicles. Our solutions scale according to your fleet size and complexity."
        },
        {
          question: "How do you handle vehicle maintenance?",
          answer: "We provide comprehensive maintenance management including scheduled servicing, emergency repairs, and preventive maintenance. All work is performed by certified technicians using genuine parts."
        },
        {
          question: "Can I track my fleet vehicles?",
          answer: "Yes, we offer GPS tracking and fleet management systems that allow you to monitor vehicle locations, driver behavior, fuel consumption, and maintenance schedules in real-time."
        }
      ]
    },
    {
      category: "Insurance & Safety",
      faqs: [
        {
          question: "What insurance coverage is provided?",
          answer: "We provide comprehensive insurance coverage including third-party liability, collision coverage, theft protection, and personal accident coverage for drivers and passengers."
        },
        {
          question: "What happens in case of an accident?",
          answer: "In case of an accident, contact our 24/7 emergency line immediately. We'll guide you through the process, arrange towing if needed, and handle all insurance claims on your behalf."
        },
        {
          question: "Are your drivers properly licensed and trained?",
          answer: "All our drivers are professionally licensed, background-checked, and undergo regular safety training. They're also trained in customer service and familiar with local routes and traffic patterns."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our mobility services. 
            If you can't find what you're looking for, don't hesitate to contact us.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b-2 border-[#EFBF04] pb-2">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-white rounded-lg shadow-sm border"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                      <span className="text-left font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our support team is here to help. Reach out through any of these channels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 mx-auto mb-4 text-blue-900" />
                <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Speak directly with our support team</p>
                <Button variant="outline" className="w-full">
                  +254 700 123 456
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Mail className="w-12 h-12 mx-auto mb-4 text-blue-900" />
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Get detailed assistance via email</p>
                <Button variant="outline" className="w-full">
                  support@interflowmobility.com
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-blue-900" />
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Instant support through live chat</p>
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
