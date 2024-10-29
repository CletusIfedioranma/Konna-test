import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-5 bg-[#0a0e1a] z-50">
        <div className="text-3xl font-bold text-[#0070f3]">Konna</div>
        <div className="space-x-8 text-white text-xl">
          <a href="#" className="hover:text-blue-400">Features</a>
          <a href="#" className="hover:text-blue-400">Supported Businesses</a>
          <a href="#" className="hover:text-blue-400">Pricing</a>
        </div>
        <div className="space-x-4">
          <button className="text-white hover:text-blue-400">Login</button>
          <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Register</button>
          <button className="bg-transparent border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500">Download</button>
        </div>
      </nav>
  )
}

export default Navbar