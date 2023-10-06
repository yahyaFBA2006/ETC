import React from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'
import triangle from '../assets/triangle.png'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div>

 
    <div className='flex  justify-between  sm:mx-28 mx-10 gap-x-4   '>
 <motion.div className='flex justify-center items-center'
        initial ={{ y: -100 , opacity:0}}
        animate = {{y:80, opacity:1, transition:{duration:2}}}
        >
<img src={logo} className='rounded-full sm:w-[200px] w-[150px] object-cover border-[0.4rem] border-slate-200 shadow-2xl  hover:rotate-90 transform transition-transform duration-500 ease-in-out cursor-pointer'   />

          </motion.div>    
          
          <img src={triangle} className='h-[100px] w-[100px] animate-spin' />
           <motion.div className='flex justify-center items-center'
        initial ={{ y: -100 , opacity:0}}
        animate = {{y:80, opacity:1, transition:{duration:2}}}
        >
<img src={logo2} className='rounded-full sm:w-[200px] w-[150px] object-cover border-[0.4rem] border-black/[0.7] shadow-2xl  hover:rotate-90 transform transition-transform duration-500 ease-in-out cursor-pointer'   />
          </motion.div>  
          </div>
          
<div className='md:pt-0 pt-24'>
  <h1 className='sm:text-[50px] text-[30px] text-center font-bold text-red-gradient animate-bounce'>
    Never Stop Growing 
  </h1>
</div>

    </div>
  )
}

export default Hero