import React, {useState} from 'react'
import { motion } from 'framer-motion'
import arrow from '../assets/arrow.png'
import arrow2 from '../assets/arrow2.png'
import etc from '../assets/etc.png'
import people from '../assets/people.png'

const About = () => {
const [toggle, setToggle] = useState(false) ;

  return (
    <div className='scroll-m-20 pt-24 justify-center items-center '>

<h1 className='text-center text-black/[0.8] font-bold text-[35px] '>
Why Ensia Tech Community ?
</h1>

<div  className='mt-8' >
  <motion.div   className='px-8 py-2 mt-2 mx-10 rounded-full bg-slate-300'
  initial ={{x:+100, opacity:0}}
  animate ={{x:0, opacity:1, transition : {duration:2}}} 
  >
<h1 className=' text-[28px] text-blue-600 font-bold text-center'>
    Your Future, Our Expertise
</h1>
  </motion.div  >
  <motion.div   className='px-8 py-2 mt-2 mx-10 rounded-full bg-slate-300'
  initial ={{x:-100, opacity:0}}
  animate ={{x:0, opacity:1, transition : {duration:2}}} 
  >
<h1 className=' text-[28px] text-blue-600 font-bold text-center '>
Your Goals, Our Roadmap
</h1>
  </motion.div  >
  <motion.div   className='px-8 py-2 mt-2 mx-10 rounded-full bg-slate-300'
  initial ={{x:+100, opacity:0}}
  animate ={{x:0, opacity:1, transition : {duration:2}}} 
  >
<h1 className=' text-[28px] text-blue-600 font-bold text-center '>
Your Ambition, Our Guidance
</h1>
  </motion.div  >
  
</div>


<div className=' pl-[600px] justify-center items-center pt-10  '>
  <img className=" justify-center items-center rounded-full w-[10%] md:block hidden animate-bounce" src={arrow}  />
</div>
<div id='about'  className='  pt-9 mx-10'>
  <h1 className='text-center text-title-gradient  font-bold text-[40px] pb-4 '>
    About us 
  </h1>
  <p className="mb-3 text-white sm:text-[28px] text-[18px]">
 We are the first scientific club in <span className='text-orange-700 font-bold' > The NATIONAL SCHOOL OF ARTIFICIAL INTELLIGENCE</span>  .
It was founded on <span className='font-bold text-orange-700'>MARCH 2022</span> 
It aims to organize activities in all tech field such as <span className='text-violet-600 font-bold'>coding, design, AI...etc.</span> 
  </p>
</div>

<div className='md:flex block justify-between mx-10'>
  <img src={etc} className='sm:w-[60%] w-[100%] sm:mb-0 mb-10  rounded-lg object-cover border-gray-900 shadow-2xl p-3 mr-4'  />
 <div className='flex flex-col '> 
  <div className='md:flex flex-col  text-center md:pb-8 pb-4'>
    <h1 className='text-red-gradient text-[28px] font-bold  '>
  sector :
    </h1>
    <p className='text-white text-[28px] font-bold '>
    Édition sur Internet
    </p>
  </div>
  
  <div className='md:flex flex-col  text-center md:pb-8 pb-4'>
    <h1 className='text-red-gradient text-[28px] font-bold  '>
    Taille de l’entreprise :
    </h1>
    <p className='text-white text-[28px] font-bold '>
    51-200 employés
    </p>
  </div>



  <div className='md:flex flex-col  text-center md:pb-8 pb-4'>
    <h1 className='text-red-gradient text-[28px] font-bold  '>
    Siège social :
    </h1>
    <p className='text-white text-[28px] font-bold '>
   <a href="https://maps.app.goo.gl/RhKq6GvYxghENtp8A"> Sidi Abdellah, Algiers </a>
    </p>
  </div>



  <div className='md:flex flex-col  text-center md:pb-8 pb-4'>
    <h1 className='text-red-gradient text-[28px] font-bold  '>
    Spécialisations :
    </h1>
    <p className='text-white text-[28px] font-bold '>
    TECH
    </p>
  </div>


<div className='w-full justify-center items-center text-center'>
 <h1 className='p-4 bg-slate-400 rounded-full font-bold text-white text-[26px] cursor-pointer hover:bg-pink-400'  onClick={() => setToggle((prev) => !prev)}>
  Personnes  
 </h1>
 <div className="pt-10 flex justify-center items-center">
  {/* <img className="w-20 md:w-32 animate-bounce" src={toggle? arrow : arrow2 } alt="Arrow"
  onClick={() => setToggle((prev) => !prev)}
  /> */}
  <div className={`${!toggle ? 'flex' : 'hidden' } p-6 mx-4 absolute sidebar md:mt-[220px] mt-[300px]  rounded-3xl bg-gray-800 flex-col text-white font-bold text-[10px] justify-between`}>

<div className='flex-col space-y-2  '>
  <h1>
  <a href="https://www.linkedin.com/in/mohammed-chaker-baaziz-144219231/">Mohammed Chaker </a>
  </h1>
  <h1>
   <a href="https://www.linkedin.com/in/salah-eddine-makdour-091081235/">Salah Eddine </a>
  </h1>
  <h1>
  <a href="https://www.linkedin.com/in/rayan-zakaria-hassici-080062238/"> Rayan Zakaria Hassici</a>
  </h1>
  <h1>
   <a href="https://www.linkedin.com/in/nesrine-abdelhak-28a333225/">nesrine abdelhak </a>
  </h1>
  <h1>
  <a href="https://www.linkedin.com/in/oulad-ali-marouane-abdeldjalil-4b0714246/">Marouane Abdeldjalil </a>
  </h1>
  <h1>
   <a href="https://www.linkedin.com/in/ziyad-o-chaalel-1ba901254/"> Ziyad O. Chaalel</a>
  </h1>
  <h1>
  <a href="https://www.linkedin.com/in/lyes-hadjar/"> Lyes HADJAR</a>
  </h1>
  <h1>
   <a href="https://www.linkedin.com/in/hamza-abdelaziz-dia-83040024a/"> hamza abdelaziz  </a>
  </h1>
  <h1>
  <a href="https://www.linkedin.com/in/youcef-guergour-b2889124b/">Youcef Guergour </a>
  </h1>
  <h1>
   <a href="https://www.linkedin.com/in/mohamed-el-khalil-derafa-803a45245/"> Mohamed El Khalil  </a>
  </h1>
  <h1>
   <a href="https://www.linkedin.com/in/lina-amdirt-879423290/"> Lina Amdirt </a>
  </h1>

</div>
  </div>
</div>
</div> 

<img src={people} className='md:hidden block '/>

 </div>
</div>



    </div>
  )
}

export default About