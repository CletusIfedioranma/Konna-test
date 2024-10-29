import React from 'react'
import apple from '../assets/apple.svg'
import google from '../assets/google.svg'
import window from "../assets/windows.svg"

const CallToAction = () => {
  return (
    <section className="max-w-6xl mx-auto bg-blue-600 py-16 rounded-md">
        <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">What are You Waiting for?</h2>
        <p className="text-lg mb-8">Manage your business Online/Offline with/without internet</p>
        <button className="bg-white text-blue-600 px-12 py-3 font-semibold mb-8">Get Started</button>
        <div className="flex justify-center space-x-4">
            {/* Google Play */}
            <a href="#" className="flex gap-2 items-center bg-transparent text-white px-6 py-2 rounded-full border-2 border-white">
            <img src={google} alt="" className='w-8 h-8'/>
            <div className='grid text-start'>
                <p className='text-xs'>GET IT ON</p>
                <p>Google Play</p>
            </div>
            </a>
            {/* Mac App Store */}
            <a href="#" className="flex gap-2 items-center bg-transparent text-white px-6 py-2 rounded-full border-2 border-white">
            <img src={apple} alt="" className='w-8 h-8'/>
            <div className='grid text-start'>
                <p className='text-xs'>Download on the </p>
                <p>Mac App Store</p>
            </div>
            </a>
            {/* App Store */}
            <a href="#" className="flex gap-2 items-center bg-transparent text-white px-6 py-2 rounded-full border-2 border-white">
            <img src={apple} alt="" className='w-8 h-8'/>
            <div  className='grid text-start'>
                <p className='text-xs'>Download on the</p>
                <p>App Store</p>
            </div>
            </a>
            {/* Windows Store */}
            <a href="#" className="flex gap-2 items-center bg-transparent text-white px-6 py-2 rounded-full border-2 border-white">
            <img src={window} alt="" className='w-8 h-8'/>
            <div  className='grid text-start'>
                <p className='text-xs'>Get its on</p>
                <p>Windows</p>
            </div>
            </a>
        </div>
        </div>
    </section>
  )
}

export default CallToAction