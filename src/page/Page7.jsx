import React, { useState } from 'react'
import Hero from '../component/hero/Hero'
import Navbar from '../component/navbar/Navbar'
import video4 from '../assets/video4.mp4'
import transition from '../Transition'


function Page7() {
    const [display, setDisplay] = useState(false)
    const [text, setText] = useState(false)
    return (
        <div className='text-white h-screen overflow-hidden relative w-[100wv]'>
            <Navbar hidden='hidden' title='TAO TAJIMA / ' />
            <Hero
                setText={setText}
                class1=' hero'
                link1='/work/008'
                link2='/work/006'
                setDisplay={setDisplay}
                dis='hidden'
                currenttext='Gurun Gurun-Itsuka no Hosbi'
                current='#007 / client work'
                pagenumtext='STRIPE INTRENATIONAL INC.'
                prevpagetext='SONY BRAVIA 2017 Design Concept'
                pagenum='#008' prevpage='#006'
                para='A short film depicting a day in a fictional city. If something had happened differently, maybe the city of today would have looked like this. The movie features day-to-day scenes based on this concept.
                    Canon EOS 5D Mark IV official support'
            />
            <video className='h-[100vh] bg-cover bg-center cover vidoe fixed object-cover w-[100vw] z-[-1] top-0 left-0' autoPlay loop muted id="myVideo">
                <source src={video4} type="video/mp4" />
            </video>
            <div className='w-[100%] h-[100%] bg-black/40 z-[-1] absolute top-0 left-0' />

            <div className={`${display === true ? 'end':'start'} video  w-[100vw] h-[100vh] flex justify-center bg-black items-center  top-0  z-30 absolute`}>
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/199435060?h=b89facdce0" width="640" height="360" frameborder="0" allowfullscreen></iframe>

                <div onClick={() => setDisplay(false)} className='absolute right-8 top-8 md:block hover:rotate-180 transition-all ease-out cursor-pointer'>
                    <div className='w-[30px] h-[3px] rotate-45 bg-white'></div>
                    <div className='w-[30px] mt-[-2px] h-[3px] rotate-[135deg] bg-white'></div>
                </div>
            </div>

            <div className={`text-black ${text === true ? 'end' : 'start'} font-mono w-[100vw] absolute  p-4 top-0 h-[100vh] bg-white opacity-[0.95]`}>
                <p onClick={() => setText(false)} className=' font-bold text-lg'>Back</p>
                <div className='px-4 flex flex-col gap-2 mt-8'>
                    <p className='text-xl sm:text-2xl'>#007 / client work</p>
                    <h1 className='text-3xl sm:text-4xl'>Gurun Gurun-Itsuka no Hosbi</h1>
                    <p className=' sm:w-[600px] xl:w-[900px]'>A short film depicting a day in a fictional city. If something had happened differently, maybe the city of today would have looked like this. The movie features day-to-day scenes based on this concept.Canon EOS 5D Mark IV official support</p>
                    <p className=' text-lg font-semibold'>share: <i class="fa-brands fa-facebook-f"></i> / <i class="fa-brands fa-twitter"></i> </p>
                </div>
            </div>
        </div>
    )
}

export default transition(Page7);