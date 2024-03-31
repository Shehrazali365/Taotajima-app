import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Works from '../component/works/Works'
import AboutContent from '../component/aboutcontent/AboutContent'
import transition from '../Transition'

function About() {
  return (
    <div className=' relative '>
      <Navbar bg2='bg-black'  dis1='block' dis='hidden' title='TAO TAJIMA /' position='fixed' bg='bg' />
      <Works />
      <AboutContent />
      <a href='#'>
        <div className=' absolute bottom-12 left-[50%]'>
          <i class="text-3xl cursor-pointer fa-solid fa-arrow-up"></i>
        </div>
      </a>
    </div>
  )
}

export default transition(About)