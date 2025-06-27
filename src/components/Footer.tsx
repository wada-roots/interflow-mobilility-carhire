import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#EFBF04' }} className="text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Interflow Mobility
            </h3>
            <p className="text-gray-700 mb-4">
              Kenya's premier mobility and vehicle leasing company, providing reliable 
              transportation solutions for individuals and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-900">Services</h4>
            <ul className="space-y-2 text-gray-700">
              <li><Link to="#" className="hover:text-blue-900 transition-colors">Vehicle Rental</Link></li>
              <li><Link to="#" className="hover:text-blue-900 transition-colors">Airport Transfers</Link></li>
              <li><Link to="#" className="hover:text-blue-900 transition-colors">Corporate Leasing</Link></li>
              <li><Link to="#" className="hover:text-blue-900 transition-colors">Chauffeured Services</Link></li>
              <li><Link to="#" className="hover:text-blue-900 transition-colors">Fleet Management</Link></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-900">Quick Links</h4>
            <ul className="space-y-2 text-gray-700">
              <li><Link to="/about" className="hover:text-blue-900 transition-colors">About Us</Link></li>
              <li><Link to="/offers" className="hover:text-blue-900 transition-colors">Current Offers</Link></li>
              <li><Link to="/faqs" className="hover:text-blue-900 transition-colors">FAQs</Link></li>
              <li><Link to="/blog" className="hover:text-blue-900 transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-blue-900 transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-900">Contact Us</h4>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center">
                <span className="mr-3">📍</span>
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">✉️</span>
                <span>info@interflow.co.ke</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">💬</span>
                <span>WhatsApp: +254 700 123 456</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">🌐</span>
                <span>interflow.co.ke</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Interflow Mobility. All rights reserved.</p>
          <div className="mt-2 space-x-6">
            <Link to="#" className="hover:text-blue-900 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-blue-900 transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-blue-900 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;