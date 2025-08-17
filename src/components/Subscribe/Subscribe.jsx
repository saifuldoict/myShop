import React from 'react'

const Subscribe = () => {
  return (
    <div data-aos="zoom-in" 
    className='mt-5 mb-20 bg-slate-700 dark:bg-gray-800 text-white'>
      <div className='container backdrop-blue-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>Notification About Our Products</h1>
          <input type='email' data-aos="fade-up" placeholder='Enter Email Address' className='w-full p-3 text-black  rounded-lg'/>
        </div>
      </div>
      
    </div>
  )
}

export default Subscribe