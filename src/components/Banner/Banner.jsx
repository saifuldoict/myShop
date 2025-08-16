import React from 'react'
import BannerImg from '../../assets/banner.jpg'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const Banner = () => {
  return (
    <div className=' min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center'>
          <div data-aos="zoom-in">
            <img src={BannerImg} alt="Banner" className='max-w-[400px] h-[350px] w-full mx-auto object-cover rounded-lg' />
          </div>
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos="fade-up" className='text-3xl sm:text-4xl md:text-5xl font-bold'>
              Winter Sales Upto 50% Off
            </h1>
            <p data-aos="fade-up" className='text-gray-600  text-sm tracking-wide leading-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
              <div className='flex flex-col gap-4'>
                <div data-aos="fade-up" className='flex items-center gap-4'>
                  <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                  <span className='text-gray-600'>quality product</span>
                </div>
                <div data-aos="fade-up" className='flex items-center gap-4 '>
                  <GiFoodTruck  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-500'/>
                  <span className='text-gray-600'>Fast Delivery</span>
                </div>
                <div data-aos="fade-up" className=' flex items-center gap-4 '>
                  <IoFastFood  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-500'/>
                  <span className='text-gray-600'>Easy Payment Method</span>
                </div>
                <div data-aos="fade-up" className='flex items-center gap-4 '>
                  <IoFastFood  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-500'/>
                  <span className='text-gray-600'>Offer Available</span>
                </div>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner