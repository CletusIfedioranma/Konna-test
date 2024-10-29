import React from 'react'

const Testimonials = () => {
  return (
    <section className=" py-16 rounded-md">
    <div className="max-w-4xl mx-auto text-center text-white">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Our testimonial</h2>
      <h2 className='text-5xl font-bold mb-4'>Hear from our Customers</h2>
      <p className="text-gray-500 mt-3 text-xl font-medium">Here is the feedback from our clients regarding their experiences using Konna for their business management.</p>
      
      <div className='flex justify-between w-full gap-8 mt-10'>
        <div className='bg-slate-900 p-3'>
          <div className='flex gap-3'>
            <img src="src/assets/image1.svg" alt="" className='rounded-full w-12 h-12' />
            <div className='grid text-left'>
              <p className='font-semibold'>Crunch network Solution</p>
              <p className='text-blue-600'>Crunch Network</p> 
            </div>
          </div>
          <p className='text-gray-500 text-start pt-2'>Since we integrated konna into our superstore, it has been an innovative breakthrough.Before adopting this solution, scheduling, tracking attendance, and managing work hours were time-consuming tasks that often led to </p>
        </div>
        <div className='bg-slate-900 p-3'>
          <div className='flex gap-3'>
            <img src="src/assets/image1.svg" alt="" className='rounded-full w-12 h-12' />
            <div className='grid text-left'>
              <p className='font-semibold'>Crunch network Solution</p>
              <p className='text-blue-600'>Crunch Network</p> 
            </div>
          </div>
          <p className='text-gray-500 text-start pt-2'>Since we integrated konna into our superstore, it has been an innovative breakthrough.Before adopting this solution, scheduling, tracking attendance, and managing work hours were time-consuming tasks that often led to </p>
        </div>
        <div className='bg-slate-900 p-3'>
          <div className='flex gap-3'>
            <img src="src/assets/image1.svg" alt="" className='rounded-full w-12 h-12' />
            <div className='grid text-left'>
              <p className='font-semibold'>Crunch network Solution</p>
              <p className='text-blue-600'>Crunch Network</p> 
            </div>
          </div>
          <p className='text-gray-500 text-start pt-2'>Since we integrated konna into our superstore, it has been an innovative breakthrough.Before adopting this solution, scheduling, tracking attendance, and managing work hours were time-consuming tasks that often led to </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials