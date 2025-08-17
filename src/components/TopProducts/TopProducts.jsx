import React from 'react'
import Img1 from '../../assets/shirt/shirt.png'
import Img2 from '../../assets/shirt/shirt2.png'
import Img3 from '../../assets/shirt/shirt3.png'
import { FaStar } from "react-icons/fa";

const ProductData = [
  {
    id:1,
    img: Img1,
    title: "Casual Wear",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, culpa voluptate sunt dolorem sint magni blanditiis eveniet ex officia aliquam?'
  },
   {
    id:2,
    img: Img2,
    title: "Men Shirt",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, culpa voluptate sunt dolorem sint magni blanditiis eveniet ex officia aliquam?'
  },
   {
    id:3,
    img: Img3,
    title: "Women Wear",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, culpa voluptate sunt dolorem sint magni blanditiis eveniet ex officia aliquam?'
  }
]

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div className='container'>
      <div className='text-left mb-24'>
        <p data-aos="fade-up" className='text-sm text-primary'>Top Products</p>
        <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
        <p data-aos="fade-up" text-gray-400>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, repellendus.</p>
      </div>
      <div>
        <div className='grid grig-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {ProductData.map((data)=>(
            <div data-aos="zoom-in" className='text-center rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-lg duration-300 group max-w-[300px]'>
             <div>
              <img src={data.img} alt='Product' className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
             </div>
              <div className='w-full flex items-center justify-center gap-1 '>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
              </div>
              <h1 className='text-xl font-bold'>
                {data.title}
              </h1>
              <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                  {data.description}
                </p>
                <button className='bg-primary hover:scale-105 duration-300 text-white rounded-full mt-4 mb-3 px-4 py-2 group-hover:bbg-white group-hover:text-white' onClick={handleOrderPopup}>Order Now</button>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default TopProducts