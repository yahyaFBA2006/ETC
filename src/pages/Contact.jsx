import React from 'react'
import { CgArrowRight, CgFacebook, CgGitBranch, CgInstagram, CgTwitter } from 'react-icons/cg'
const Contact = () => {
  return (
    <div id='contact' className=' text-center pt-20 md:mx-44 mx-4 '>
      <h1  className='sm:text-[50px] text-[30px] text-center font-bold text-red-gradient animate-bounce'>Contact us </h1>
      <ul className='space-y-4'>
        <li className='p-3 bg-violet-400 rounded-full text-white font-bold flex '>
         < CgInstagram className=' md:ml-[320px] ml-6 rounded-full mx-12' />
          <a href="https://www.instagram.com/etc_.club/?next=%2F">Follow us on Instagram !</a>
        </li>
        <li className='p-3 bg-violet-400 rounded-full text-white font-bold flex' >
          <CgFacebook className=' md:ml-[320px] ml-6 rounded-full mx-12' />
          <a href="">ETC Facebook page</a>
        </li>

        <li className='p-3 bg-violet-400 rounded-full text-white font-bold flex'>
          <CgTwitter className='md:ml-[320px] ml-6 rounded-full mx-12' />
          <a href="twitter.com/ETC_ensia_club">Follow us on Twitter</a>
        </li> 
        <li className='p-3 bg-violet-400 rounded-full text-white font-bold  '>
          <a href="https://discord.com/invite/5H54RVthTj">Join our Discord server</a>
        </li>
        <li className='p-3 bg-violet-400 rounded-full text-white font-bold '>
          <a href="https://www.linkedin.com/company/ensia-tech-community/">ETC LinkedIn</a>
        </li>
 
      </ul>
    </div>
  )
}

export default Contact