import React from 'react'
import Hero from '../component/hero/Hero'
import Navbar from '../component/navbar/Navbar'
import city from '../assets/city.mp4'
import transition from '../Transition'



function Home() {
    return (
        <div className='text-white h-screen overflow-hidden relative w-[100wv]'>
            <Navbar hidden='hidden' />
            <Hero class2='hero2' link1='/work/001' link2='/work/019' display='hidden' pagenumtext='Night Stroll' prevpagetext='MN concept movie' pagenum='#001' prevpage='#019' />
            <video className='h-[100vh] bg-cover bg-center cover vidoe fixed object-cover w-[100vw] z-[-1] top-0 left-0' autoPlay loop muted id="myVideo">
                <source src={city} type="video/mp4" />
            </video>
            {/* <span class="loader"></span> */}
        </div>
    )
}

export default transition(Home)