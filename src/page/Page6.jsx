import React, { useState } from 'react'
import Hero from '../component/hero/Hero'
import Navbar from '../component/navbar/Navbar'
import v5 from '../assets/v5.mp4'
import transition from '../Transition'


function Page6() {
    const [display, setDisplay] = useState(false)
    const [text, setText] = useState(false)
    return (
        <div className='text-white h-screen overflow-hidden relative w-[100wv]'>
            <Navbar hidden='hidden' title='TAO TAJIMA / ' />
            <Hero

                setText={setText}
                class1=' hero'
                link1='/work/007'
                link2='/work/005'
                setDisplay={setDisplay}
                dis='hidden'
                currenttext='SONY BRAVIA 2017 Design Concept'
                current='#006 / client work'
                pagenumtext='Gurun Gurun-Iisuka no Hosbi'
                prevpagetext='tofubeats-Asa Ga Kuru Made Owaru'
                pagenum='#007' prevpage='#005'
                para='Directed and produced the 2017 Sony BRAVIA design concept video. This concept video expresses a design philosophy based on the context of furniture fitting seamlessly into a living room.'
            />
            <video className='h-[100vh] bg-cover bg-center cover vidoe fixed object-cover w-[100vw] z-[-1] top-0 left-0' autoPlay loop muted id="myVideo">
                <source src={v5} type="video/mp4" />
            </video>
            <div className='w-[100%] h-[100%] bg-black/40 z-[-1] absolute top-0 left-0' />
            <div className={`${display === true? 'end':'start'} video  w-[100vw] h-[100vh] flex justify-center bg-black items-center  top-0  z-30 absolute`}>
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/243273358?h=5168b3a2e6" width="640" height="360" frameborder="0" allowfullscreen></iframe>

                <div onClick={() => setDisplay(false)} className='absolute right-8 top-8 md:block hover:rotate-180 transition-all ease-out cursor-pointer'>
                    <div className='w-[30px] h-[3px] rotate-45 bg-white'></div>
                    <div className='w-[30px] mt-[-2px] h-[3px] rotate-[135deg] bg-white'></div>
                </div>
            </div>

            <div className={`text-black ${text === true ? 'end' : 'start'} font-mono w-[100vw] absolute  p-4 top-0 h-[100vh] bg-white opacity-[0.95]`}>
                <p onClick={() => setText(false)} className=' font-bold text-lg'>Back</p>
                <div className='px-4 flex flex-col gap-2 mt-8'>
                    <p className='text-xl sm:text-2xl'>#006 / client work</p>
                    <h1 className='text-3xl sm:text-4xl'>SONY BRAVIA 2017 Design Concept</h1>
                    <p className=' sm:w-[600px] xl:w-[900px]'>Directed and produced the 2017 Sony BRAVIA design concept video. This concept video expresses a design philosophy based on the context of furniture fitting seamlessly into a living room.</p>
                    <p className=' text-lg font-semibold'>share: <i class="fa-brands fa-facebook-f"></i> / <i class="fa-brands fa-twitter"></i> </p>
                </div>
            </div>
        </div>
    )
}

export default transition(Page6);