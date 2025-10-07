import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container flex flex-col mx-auto md:flex-row justify-between items-start'>
           <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark_created} alt='' />
            <p className='text-gray-400 mt-4'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text.
            </p>
           </div>

           <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2'>
                <a href='#Header' className='hover:text-white text-gray-400'>Home</a>
                <a href='#About' className='hover:text-white text-gray-400'>About</a>
                <a href='#Contact' className='hover:text-white text-gray-400'>Contact Us</a>
                <a href='#Header' className='hover:text-white text-gray-400'>Privacy Policy</a>
            </ul>
           </div>

           <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>
                Subscribe to our newsletter
            </h3>
            <p className='text-gray-400 mb-4 max-w-80'>
                The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className=' space-x-3'>
                <input type='email' placeholder='Enter Your Email' 
                className='p-2 rounded bg-gray-800 text-gray-400 border-gray-400 focus:outline-none w-full mb-2 md:w-auto'/>
                <button className='py-2 px-4 rounded bg-blue-500'>Subscribe</button>
            </div>
           </div>
        </div>


        {/* copyright */}
        <div className=' mt-10  h-[0.80px] w-full bg-gray-700'></div>
        <div className=' py-4 text-center text-gray-500'>
          Copyright 2024 © GreatStack. All Right Reserved.
        </div>
    </div>
  )
}

export default Footer