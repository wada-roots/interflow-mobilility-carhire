
import React, { useState } from 'react';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartItems] = useState(3); // Placeholder cart count
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    {
      name: 'Categories',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        'Economy', 'Full Size', 'Premium', 'Midsize SUVs', 'SUVs', 
        'Mini Vans', 'Vans', 'Electric', 'Bus', 'Airport Transfer'
      ]
    },
    { name: 'About Us', href: '/about', hasDropdown: false },
    {
      name: 'Leasing',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        'Roadside Assistance', 'Airport Transfers', 'Personal Leasing',
        'Corporate Leasing', 'Business Solutions', 'Truck Rental', 'Chauffeured Services'
      ]
    },
    {
      name: 'Fleet Management',
      href: '#',
      hasDropdown: true,
      dropdownItems: ['Why Choose Us?', 'Our Services', 'How It Works']
    },
    { name: 'Offers', href: '/offers', hasDropdown: false },
    { name: 'Blog', href: '/blog', hasDropdown: false },
    { name: 'FAQs', href: '/faqs', hasDropdown: false },
    {
      name: 'Careers',
      href: '#',
      hasDropdown: true,
      dropdownItems: ['Career Opportunities', 'Why Work With Us?', 'How to Apply']
    },
    { name: 'Contact Us', href: '/contact', hasDropdown: false },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-900">
              Interflow Mobility
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div 
                    className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem}
                          to="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
                        >
                          {dropdownItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Cart */}
            <Link to="/cart" className="relative text-gray-700 hover:text-blue-900 transition-colors duration-200">
              <ShoppingCart className="w-6 h-6" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-900 block px-3 py-2 text-base font-medium flex-1"
                    onClick={() => !item.hasDropdown && setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="px-3 py-2"
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
                  <div className="pl-6 space-y-1">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem}
                        to="#"
                        className="text-gray-600 hover:text-blue-900 block px-3 py-2 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/cart"
              className="text-gray-700 hover:text-blue-900 block px-3 py-2 text-base font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cart ({cartItems})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
