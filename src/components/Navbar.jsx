import React, { useState } from 'react'
import menu from '../assets/menu.png'
import close from '../assets/close.png'
import ScrollTo from '../pages/ScrollTo';
const Navbar = () => {

const [toggle, setToggle] = useState(false);

  return (

<div>
{/* big screen  */}

  <div className='sm:block hidden '>
  <nav className='bg-slate-100 px-12 py-2 mt-10 mb-10 ml-4 rounded-full w-[60%] justify-center font-bold text-[20px] '>
  <ul className='flex justify-between' >
  <li>
    <a className="hover:text-red-600 transition-colors " href="Home">Home</a>
  </li>
  <li>
  <ScrollTo targetId="about" offset={100}  />
  </li>
  <li>
  <ScrollTo targetId="contact"  />
  </li>
</ul>  
  </nav>
  </div>

{/* small screen  */}


  <div className='sm:hidden flex flex-1 justify-end items-center '>
     <img className='cursor-pointer rounded-full w-14 m-10' src={toggle? close : menu}  
     onClick={() => setToggle((prev) => !prev)}
     />
     <div className={`${toggle? 'flex' : 'hidden'} p-2 bg-slate-500 rounded-xl absolute  right-40 sidebar mx-4 my-2 `}>
     <nav className=''>
  <ul className='flex flex-col  text-white font-bold text-[22px] justify-between' >
  <li>
    <a className="hover:text-red-600 transition-colors hover:text-[21px]" href="/">Home</a>
  </li>
  <li>
  <ScrollTo targetId="about" />
  </li>
  <li>
  <ScrollTo targetId="contact"  />
  </li>
</ul>  
  </nav>
     </div>
  </div>

  </div>
  )
}

export default Navbar