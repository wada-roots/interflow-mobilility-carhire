
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Corporate Fleet Management in Kenya",
      excerpt: "Discover how technology and innovative leasing solutions are transforming the way businesses manage their vehicle fleets.",
      author: "John Kamau",
      date: "December 15, 2024",
      category: "Fleet Management",
      readTime: "5 min read",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Airport Transfer Best Practices: A Complete Guide",
      excerpt: "Everything you need to know about reliable airport transfers, from booking to arrival. Tips for business travelers and tourists.",
      author: "Sarah Njeri",
      date: "December 12, 2024",
      category: "Travel Tips",
      readTime: "7 min read",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Personal vs Corporate Leasing: Which is Right for You?",
      excerpt: "Compare the benefits of personal and corporate vehicle leasing to make the best decision for your specific needs.",
      author: "Michael Ochieng",
      date: "December 10, 2024",
      category: "Leasing",
      readTime: "4 min read",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Roadside Assistance: Why It Matters More Than You Think",
      excerpt: "Learn about the importance of comprehensive roadside assistance and how it can save you time, money, and stress.",
      author: "Grace Wanjiku",
      date: "December 8, 2024",
      category: "Safety",
      readTime: "6 min read",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Sustainable Mobility Solutions for Modern Businesses",
      excerpt: "Explore eco-friendly vehicle options and how they can benefit your business while reducing environmental impact.",
      author: "David Maina",
      date: "December 5, 2024",
      category: "Sustainability",
      readTime: "8 min read",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Navigating Nairobi: Best Routes and Traffic Tips",
      excerpt: "Insider tips for efficient navigation through Nairobi's busy streets, including peak hours and alternative routes.",
      author: "Ann Mutua",
      date: "December 3, 2024",
      category: "Local Insights",
      readTime: "5 min read",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Fleet Management", "Travel Tips", "Leasing", "Safety", "Sustainability", "Local Insights"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mobility Insights & News
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stay informed with the latest trends, tips, and insights in the mobility and transportation industry. 
            From fleet management to travel guides, we've got you covered.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-blue-900 hover:text-blue-700">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#EFBF04] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Our Latest Posts
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss important mobility insights and industry updates.
          </p>
          <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
