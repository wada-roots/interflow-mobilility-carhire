
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    {
      name: 'Fleet',
      href: '/fleet',
      hasDropdown: false,
    },
    { name: 'Airport Transfer', href: '/airport-transfer', hasDropdown: false },
    {
      name: 'Leasing',
      href: '/',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Roadside Assistance', href: '/leasing/roadside-assistance' },
        { name: 'Personal Leasing', href: '/leasing/personal-leasing' },
        { name: 'Corporate Leasing', href: '/leasing/corporate-leasing' },
        { name: 'Business Solutions', href: '/leasing/business-solutions' },
        { name: 'Truck Rental', href: '/leasing/truck-rental' },
        { name: 'Chauffeured Services', href: '/leasing/chauffeured-services' }
      ]
    },
    {
      name: 'Fleet Management',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Why Choose Us?', href: '/why-choose-us' },
        { name: 'Our Services', href: '/our-services' },
        { name: 'How It Works', href: '/how-it-works' }
      ]
    },
    { name: 'Offers', href: '/offers', hasDropdown: false },
    { name: 'Blog', href: '/blog', hasDropdown: false },
    { name: 'FAQs', href: '/faqs', hasDropdown: false },
    {
      name: 'Careers',
      href: '/careers',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Career Opportunities', href: '/careers/opportunities' },
        { name: 'Why Work With Us?', href: '/careers/why-work-with-us' },
        { name: 'How to Apply', href: '/careers/how-to-apply' }
      ]
    },
    { name: 'Contact Us', href: '/contact', hasDropdown: false },
    { name: 'About Us', href: '/about', hasDropdown: false },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-yellow-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="flex items-center h-20 justify-start gap-x-8"> 
          {/* Logo - Enlarged */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/025f57c4-ae3c-4f97-9de9-bfc89591c07d.png"
                alt="Interflow Mobility"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center"> 
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-gray-800 hover:text-yellow-600 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200 whitespace-nowrap"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)} 
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div 
                    className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-yellow-200"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto"> 
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-yellow-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-yellow-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.href}
                    className="text-gray-800 hover:text-yellow-600 block px-3 py-2 text-base font-medium flex-1"
                    onClick={() => !item.hasDropdown && setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="px-3 py-2 text-gray-800 hover:text-yellow-600"
                    >
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="pl-6 space-y-1 bg-yellow-50 border-l-2 border-yellow-200 rounded-md">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="text-gray-700 hover:text-yellow-700 block px-3 py-2 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
