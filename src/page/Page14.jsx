import React, { useState } from 'react'
import Hero from '../component/hero/Hero'
import Navbar from '../component/navbar/Navbar'
import vidoe from '../assets/vidoe.mp4'
import img1 from '../assets/img1.jpg'
import transition from '../Transition'


function Page14() {
    const [display, setDisplay] = useState(false)
    const [text, setText] = useState(false)
    return (
        <div className='text-white  h-screen overflow-hidden relative w-[100wv]'>
            <Navbar hidden='hidden' title='TAO TAJIMA / ' />
            <Hero
                setText={setText}
                class1=' hero'
                link1='/work/015'
                link2='/work/013'
                setDisplay={setDisplay}
                dis='hidden'
                currenttext='Pasocom Music Club - reiji no machi'
                current='#014 / private work'
                pagenumtext='Cuushe Magic'
                prevpagetext='Tsunagaru (connecting) vi...'
                pagenum='#015' prevpage='#013'
                para='Directed and produced the music video “reiji no machi” for Pasocom Music Club. Portrayed the atmosphere at 0:00 the beginning of midnight with the camera work creating a floating impression'
            />
            <div className='h-[100vh] bg-cover bg-center cover vidoe fixed object-cover w-[100vw] z-[-2] top-0 left-0'>
                <img className='w-[100%] h-[100%]' src={img1} alt='img2' />
            </div>
            <div className='w-[100%] h-[100%] bg-black/40 z-[-1] absolute top-0 left-0' />
            <div className={`${display === true ? 'end':'start'} video  w-[100vw] h-[100vh] flex justify-center bg-black items-center  top-0 z-30 absolute`}>
                <iframe src="https://player.vimeo.com/video/361748680?h=679a9b1e35" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

                <div onClick={() => setDisplay(false)} className='absolute right-8 top-8 md:block hover:rotate-180 transition-all ease-out cursor-pointer'>
                    <div className='w-[30px] h-[3px] rotate-45 bg-white'></div>
                    <div className='w-[30px] mt-[-2px] h-[3px] rotate-[135deg] bg-white'></div>
                </div>
            </div>

            <div className={`text-black ${text === true ? 'end' : 'start'} font-mono w-[100vw] absolute  p-4 top-0 h-[100vh] bg-white opacity-[0.95]`}>
                <p onClick={() => setText(false)} className=' font-bold text-lg'>Back</p>
                <div className='px-4 flex flex-col gap-2 mt-8'>
                    <p className='text-xl sm:text-2xl'>#014 / private work</p>
                    <h1 className='text-3xl sm:text-4xl'>Pasocom Music Club - reiji no machi</h1>
                    <p className=' sm:w-[600px] xl:w-[900px]'>Directed and produced the music video “reiji no machi” for Pasocom Music Club. Portrayed the atmosphere at 0:00 the beginning of midnight with the camera work creating a floating impression.</p>
                    <p className=' text-lg font-semibold'>share: <i class="fa-brands fa-facebook-f"></i> / <i class="fa-brands fa-twitter"></i> </p>
                </div>
            </div>
        </div>
    )
}

export default transition(Page14);