import { space } from 'postcss/lib/list'
import React from 'react'
import Slider from 'react-slick'

const TestimonialsData = [
  {id:1,
    name: "Vickey",
    Text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut similique eveniet autem laborum perferendis minima dolorem perspiciatis nostrum debitis maxime.',
    img:"https://picsum.photos/200/300"
  },
   {id:2,
    name: "Kameroon",
    Text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut similique eveniet autem laborum perferendis minima dolorem perspiciatis nostrum debitis maxime.',
    img:"https://picsum.photos/200/200"
  },
   {id:3,
    name: "Nayem",
    Text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut similique eveniet autem laborum perferendis minima dolorem perspiciatis nostrum debitis maxime.',
    img:"https://picsum.photos/200/300"
  },
   {id:4,
    name: "Mariya",
    Text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut similique eveniet autem laborum perferendis minima dolorem perspiciatis nostrum debitis maxime.',
    img:"https://picsum.photos/200/300"
  },
   {id:5,
    name: "Simon",
    Text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut similique eveniet autem laborum perferendis minima dolorem perspiciatis nostrum debitis maxime.',
    img:"https://picsum.photos/200/100"
  },
]
const Testimonials = () => {
  const settings ={
    dots:true,
    arrows:true,
    Infinite:true,
    space:500,
    sideToscroll:1,
    autoplay:true,
    autpplaySpeed:2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive:[
      {
        breakpoint:10000,
        settings:{
          slidesToShow:3,
          slidesToscroll:1,
          Infinite:true,

        }
      },
      {
        breakpoint:1024,
        settings:{
          slidesToShow:2,
          slidesToscroll:1,
          initialSlider:2

        }
      },
       {
        breakpoint:640,
        settings:{
          slidesToShow:1,
          slidesToscroll:1
        }
      }
    ]


  }
  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="zfade-up" className='text-sm text-primary'>Customers Feed Back</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
          <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo soluta amet culpa eaque modi molestias, exercitationem recusandae ipsam incidunt.</p>

        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialsData.map((data)=>(
              <div className='mt-6'>
                <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark: bg-slate-600 bg-primary/20 relative'>
                <div className='mb-4'>
                  <img src={data.img} alt='Image' className='rounded-full w-20 h-20'/>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                      <p className='text-xs dark:text-slate-300 text-white text-start'>
                      {data.Text}
                      </p>
                      <h1 className='text-xl font-bold dark:text-slate-300 text-white/80 '>
                        {data.name}
                      </h1>
                    </div>
                </div>
                <p className='text-white/80 text-9xl font-serif top-0 right-0 '></p>
                </div>
              </div>
            ))}
          </Slider>
          </div>
      </div>
      
    </div>
  )
}

export default Testimonials