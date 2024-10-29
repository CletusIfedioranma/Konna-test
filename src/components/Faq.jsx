import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Konna?",
      answer: "Konna is a comprehensive business management system that enables you to process all your retail activities seamlessly, manage your business inventory, create an online business store, and make informed business decisions with our AI-powered analytics tool."
    },
    {
      question: "Do I need to download Konna on my computer to use the web version?",
      answer: "No, Konna web can always be accessed over the internet with your store web address. You are only required to download the Konna desktop app for free to use. The desktop app version offers offline access to your store and synchronizes automatically with the web anytime you have internet access."
    },
    {
        question: "Is there any discount?",
        answer: "You can get discounts of up to NGN8000 when you subscribe annually to our plans. Also, you can enjoy up to 6 months of free premium plan access when you refer up to 12 people on Konna (You get 1 month free for every two people you refer)"
      },
      {
        question: "Will I be charged when the trial period ends?",
        answer: "When the trial or free discount period ends, you will notified ahead to make payment to continue enjoying the plan. But you can always have unlimited access to our free plan."
      },
      {
        question: "Can I cancel whenever I want?",
        answer: "Yes, if you chose auto-renewal, you can always cancel anytime you wish. You can also cancel to migrate to the next plan"
      }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white py-8 px-8 md:px-12 lg:px-40 w-full">
      <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-medium text-lg">{faq.question}</h3>
              <span className="text-2xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
