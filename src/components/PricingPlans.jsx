import React from 'react';
import CheckIcon from '../assets/CheckIcon.jsx'

const PricingPlans = () => {
  return (
    <section className='bg-gray-900 py-6 my-4'>
      <div className='text-center'>
        <h2 className="text-3xl font-bold mb-4 text-white">Konna Subscription Plan</h2>
        <h2 className='text-gray-500 mt-3 text-xl font-medium'>Choose a subscription plan that fits your budget to have <br/>unlimited access to all the features. Save up to NGN 8000 when you Subscribe<br/> annually</h2>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-8">
          
          {/* Free Plan */}
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-center">Free Plan</h3>
            <p className="text-xl font-bold my-4 text-center">NGN0<span className="text-lg">/Year</span></p>
            <p className="text-gray-400 mb-4 text-center">Essential features to navigate your business.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full">Get Started</button>
            <ul className="mt-6 space-y-2 text-gray-300">
              <div className='flex gap-2'>
                <CheckIcon/>
                <li>Online store (upto 10 products)</li>
              </div>
              <div className='flex gap-2'>
                <CheckIcon />
                <li>Periodic report summary</li>
              </div>
              <div className='flex gap-2'>
                <CheckIcon />  
                <li>24/7 Support center</li>
              </div>
            </ul>
          </div>

          {/* Starter Plan */}
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-center">Starter Plan</h3>
            <p className="text-xl font-bold my-4 text-center">NGN8000<span className="text-lg line-through text-gray-500 ml-2">12,000</span><span className="text-lg">/Year</span></p>
            <p className="text-gray-400 mb-4 text-center">Activate the annual subscription on your starter plan and save up to NGN4000</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full">Get Started</button>
            <p className="mt-6 text-sm text-blue-400 text-center">Everything in Free Plan, Plus:</p>
            <ul className="mt-2 space-y-2 text-gray-300">
              <div className='flex gap-2'>
                <CheckIcon />
                <li>Inventory control (upto 50 products)</li>
              </div>
              <div className='flex gap-2'>
                <CheckIcon/>
                <li>Online store (upto 40 products)</li>
              </div>
              <div className='flex gap-2'>
                <CheckIcon />
                <li>Add Link</li>
              </div>
            </ul>
          </div>

          {/* Scale-Up Plan */}
          <div className="bg-gray-800 text-white rounded-lg shadow-md">
            <div className="text-center bg-orange-500 text-white text-xs font-semibold py-1 px-2 rounded">Most Popular Plan</div>
            <div className='p-4'>
              <h3 className="text-xl font-semibold mt-4 text-center">Scale-Up Plan</h3>
              <p className="text-xl font-bold my-4 text-center">NGN25,000<span className="text-lg line-through text-gray-500 ml-2">30,000</span><span className="text-lg">/Year</span></p>
              <p className="text-gray-400 mb-4 text-center">Elevate to scale-up plan, subscribe annually, enjoy great features, and save up to NGN5000</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full">Get Started</button>
              <p className="mt-6 text-sm text-blue-400 text-center">Everything in Starter Plan, Plus:</p>
              <ul className="mt-2 space-y-2 text-gray-300">
              <div className='flex gap-2'>
                <CheckIcon />
                <li>Inventory control (upto 150 products)</li>
              </div>
              <div className='flex gap-2'>
                <CheckIcon/>
                <li>Online store (upto 100 products)</li>
              </div>
              <div className='flex gap-2'>
                <CheckIcon/>
                <li>Business Analytics</li>
              </div>
              <div className='flex gap-2'>
                <CheckIcon/>
                <li>Send Receipt and Invoices</li>
                </div>
              </ul>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-center">Premium Plan</h3>
            <p className="text-xl font-bold my-4 text-center">NGN40,000<span className="text-lg line-through text-gray-500 ml-2">48,000</span><span className="text-lg">/Year</span></p>
            <p className="text-gray-400 mb-4 text-center">Save up to NGN8000 and enjoy every feature on Konna when you elevate to the premium plan and subscribe yearly</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full">Get Started</button>
            <p className="mt-6 text-sm text-blue-400 text-center">Everything in Scale Plan, Plus:</p>
            <ul className="mt-2 space-y-2 text-gray-300">
              <div className='flex gap-2'>
                  <CheckIcon/>
                  <li>Add Unlimited stocks</li>
                </div>
              <div className='flex gap-2'>
                  <CheckIcon/>
                  <li>Manage supplier/agent/Staff</li>
                </div>
              <div className='flex gap-2'>
                  <CheckIcon/>
                  <li>Import and export data</li>
                </div>
              <div className='flex gap-2'>
                  <CheckIcon/>
                  <li>Barcode scanning</li>
                </div>
              <div className='flex gap-2'>
                  <CheckIcon/>
                  <li>Open Multiple branches</li>
                </div>
            </ul>
          </div>

        </div>
      </div>
      <div className='flex items-center justify-center'>
      <button className='border-2 border-blue-500 text-blue-500 px-4 py-2'>See plan details</button>
      </div>
    </section>
  );
};

export default PricingPlans;
