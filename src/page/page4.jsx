import React, { useState } from 'react'
import Hero from '../component/hero/Hero'
import Navbar from '../component/navbar/Navbar'
import video2 from '../assets/video2.mp4'
import transition from '../Transition'


function Page4() {
    const [display, setDisplay] = useState(false)
    const [text, setText] = useState(false)
    return (
        <div className='text-white h-screen overflow-hidden relative w-[100wv]'>
            <Navbar hidden='hidden' title='TAO TAJIMA / ' />
            <Hero
                setText={setText}
                class1=' hero'
                link1='/work/005'
                link2='/work/003'
                setDisplay={setDisplay}
                dis='hidden'
                currenttext='Rayons ft. Predawn - Waxing Moon'
                current='#004 / private work'
                pagenumtext='tofubeats-Asa Ga Kuru Owarn... '
                prevpagetext='Xperia Ear'
                pagenum='#005' prevpage='#003'
                para='Directed and produced the music video for Rayons ft. Predawn s song, “Waxing Moon”. Inspired by the meanings of “Rayons”, which is “ray of light” in French and “Waxing Moon”, which is the title of the song, we depicted a world at dusk.'
            />
            <video className='h-[100vh] bg-cover bg-center cover vidoe fixed object-cover w-[100vw] z-[-1] top-0 left-0' autoPlay loop muted id="myVideo">
                <source src={video2} type="video/mp4" />
            </video>
            <div className='w-[100%] h-[100%] bg-black/40 z-[-1] absolute top-0 left-0' />
            <div className={`${display === true ? 'end ' : "start"} video  w-[100vw] h-[100vh] flex justify-center bg-black items-center  top-0  z-30 absolute`}>
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/141860119?h=a24c06f86b" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                <div onClick={() => setDisplay(false)} className='absolute right-8 top-8 md:block hover:rotate-180 transition-all ease-out cursor-pointer'>
                    <div className='w-[30px] h-[3px] rotate-45 bg-white'></div>
                    <div className='w-[30px] mt-[-2px] h-[3px] rotate-[135deg] bg-white'></div>
                </div>
            </div>
            <div className={`text-black ${text === true ? 'end' : 'start'} font-mono w-[100vw] absolute  p-4 top-0 h-[100vh] bg-white opacity-[0.95]`}>
                <p onClick={() => setText(false)} className=' font-bold text-lg'>Back</p>
                <div className='px-4 flex flex-col gap-2 mt-8'>
                    <p className='text-xl sm:text-2xl'>#004 / private work</p>
                    <h1 className='text-3xl sm:text-4xl'>Rayons ft. Predawn - Waxing Moon</h1>
                    <p className=' sm:w-[600px] xl:w-[900px]'>Directed and produced the music video for Rayons ft. Predawn s song, “Waxing Moon”. Inspired by the meanings of “Rayons”, which is “ray of light” in French and “Waxing Moon”, which is the title of the song, we depicted a world at dusk.</p>
                    <p className=' text-lg font-semibold'>share: <i class="fa-brands fa-facebook-f"></i> / <i class="fa-brands fa-twitter"></i> </p>
                </div>
            </div>
        </div>
    )
}

export default transition(Page4);