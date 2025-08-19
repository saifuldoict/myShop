import React from 'react'
import cart from '../../assets/cart.png'
import icon from '../../assets/website/icon.png'
import shopping from '../../assets/website/shopping.png'
import { FaCaretDown } from "react-icons/fa";
import DarkMode from './DarkMode.jsx';
const Menu =[
  {
    id:1,
    name: "Home",
    link: "/#"
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services"
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#"
  },
   {
    id: 4,
    name: "Men's Wear",
    link: "/#"
  },
   {
    id: 5,
    name: "Electronics",
    link: "/#"
  },
  
]
const DropDownList = [
  {
    id: 1,
    name: "Tranding Products",
    link: "/#"
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#"
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
 
]

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      <div className='bg-primary/40 py-2'>
      <div className='container flex justify-between items-center'>
        <div>
          <a href='#' className='font-bold text-xl items-center flex gap-1'>
            <img src={shopping} alt='Logo' className='w-10 h-10 object-cover'/>
            <span className='text-rose-700'>My</span>Shop
          </a>
        </div>
           {/* search bar */}
        <div className='flex justify-between items-center gap-4 '>
          <div className='relative group hidden sm:block'>
            <input type='text' placeholder='Search Products...' 
            className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
                text-sm focus:outline-none   dark:border-gray-500 dark:bg-slate-800' />
                <img src={icon} className="w-5 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"/>
          </div>
          {/* order button */}
          <button onClick={()=>handleOrderPopup()}
          className='flex max-w-[100px] bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full items-center gap-3 group'
          >
            <span className='group-hover:block hidden transition-all duration-200 '>Order</span>
            <img src={cart} className="w-5 cursor-pointer"/>
          </button>
          {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
        </div>     
      </div>
      </div>
      {/*lower navbar*/}
      <div data-aos="zoom-in" className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {
            Menu.map((data)=>(
              <li key={data.id}>
                <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>
                  {data.name}
                </a>
              </li>
            ))}
            {/*dropdown*/}
            <li className='group relative cursor-pointer'>
              <a href='#' className='flex items-center gap-[2px] py-2'>
                Tranding Products
                <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropDownList.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                </ul>
              </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar