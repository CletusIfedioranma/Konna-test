import React from 'react';
import FacebookIcon from '../assets/FacebookIcon';
import LinkedInIcon from '../assets/LinkedInIcon';
import TwitterIcon from '../assets/TwitterIcon';
import InstagramIcon from '../assets/InstagramIcon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo and description */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-white">Konna</h2>
          <p className="mt-2 text-gray-400">The one-stop solution to business growth</p>
        </div>
        
        {/* Features Section */}
        <div>
          <h3 className="font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Online Shop</li>
            <li>Payments</li>
            <li>Manage Sales</li>
            <li>Manage Inventory</li>
            <li>Business Analytics</li>
            <li>Prices</li>
          </ul>
        </div>

        {/* Supported Businesses */}
        <div>
          <h3 className="font-semibold mb-3">Supported Businesses</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Pharmaceutical shops</li>
            <li>Restaurants</li>
            <li>Superstores</li>
            <li>Agro-based products</li>
            <li>See More</li>
          </ul>
        </div>

        {/* Download Links */}
        <div>
          <h3 className="font-semibold mb-3">Download</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Download for Android</li>
            <li>Download for iOS</li>
            <li>Download for Windows</li>
            <li>Download for Mac OS</li>
            <li>Get started on web</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Newsletter and Social Links */}
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold text-white">Join our newsletter</h3>
            <p className="text-gray-400">We’ll like to reach out to you whenever there is an important update</p>
          </div>
          <div className="mt-4 md:mt-0">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 bg-gray-800 text-gray-400 rounded-l-md focus:outline-none" 
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Links and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-gray-400 space-y-4 md:space-y-0">
          <p>© 2024 Konna App</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
          <div>
            <a href="mailto:hello@konna.io" className="hover:text-white">hello@konna.io</a>
          </div>
          <div className="flex space-x-4">
            {/* Social Icons (replace # with actual links) */}
            <a href="#" className="hover:text-white"><FacebookIcon /></a>
            <a href="#" className="hover:text-white"><LinkedInIcon /></a>
            <a href="#" className="hover:text-white"><TwitterIcon /></a>
            <a href="#" className="hover:text-white"><InstagramIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
