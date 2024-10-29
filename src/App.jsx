import React from 'react';
import PricingPlans from './components/PricingPlans';
import FAQ from './components/Faq';
import Refer from './components/Refer';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import Plans from './components/Plans';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-[#0a0e1a] min-h-screen text-white">
      <Navbar />
      <div className="pt-24">
        <header className="text-center mt-20">
          <h1 className="text-5xl font-bold text-[#0070f3]">SUBSCRIPTION PLANs</h1>
          <p className="text-white mt-5 text-5xl font-semibold">Explore the features of Konna Payment Plan</p>
          <p className="text-gray-500 mt-3 text-2xl font-medium">We offer a simple and easy-to-use system for you to be able to manage your business.</p>
        </header>
        <Plans />
        <CallToAction />
        <PricingPlans />
        <Testimonials />
        <FAQ />
        <Refer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
