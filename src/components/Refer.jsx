import React from 'react'
import refImg from '../assets/refer.svg'

const Refer = () => {
  return (
    <section className='flex justify-center gap-8 items-center py-10'>
        <div>
            <h2 className="text-2xl font-medium mb-4 text-blue-600">REFER A FRIEND</h2>
            <h2 className='text-3xl font-medium mb-4'>Refer and earn a reward</h2>
            <p className="text-gray-500 mt-3 text-xl font-medium">Refer a friend to open a shop at Konna and enjoy one-month<br/> free subscription fee</p>
            <p className='text-blue-700 cursor-pointer w-[300px] mt-3 py-2 bg-slate-800 text-center text-[18px]'>Refer a Friend</p>
        </div>
        <img src={refImg} className='w-80 h-80' />
    </section>
  )
}

export default Refer