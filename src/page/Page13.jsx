import React, { useState } from 'react'
import Hero from '../component/hero/Hero'
import Navbar from '../component/navbar/Navbar'
import vidoe from '../assets/vidoe.mp4'
import Sarazanmai from '../assets/Sarazanmai.jpg'
import transition from '../Transition'


function Page13() {
    const [display, setDisplay] = useState(false)
    const [text, setText] = useState(false)
    return (
        <div className='text-white h-screen overflow-hidden relative w-[100wv]'>
            <Navbar hidden='hidden' title='TAO TAJIMA / ' />
            <Hero
                setText={setText}
                class1=' hero'
                link1='/work/014'
                link2='/work/012'
                setDisplay={setDisplay}
                dis='hidden'
                currenttext='Tsunagaru (connecting) promotional video'
                current='#013 / client work'
                pagenumtext='Pasocom Music Club - reiji...'
                prevpagetext='THE 9D PROJECT-Experience...'
                pagenum='#014' prevpage='#012'
                para='Directed and produced a promotional video for TV anime Sarazanmai.This work was created with the intention as if the anime characters exist in Asakusa, Tokyo, where the story is based.'
            />
            <div className='h-[100vh]  fixed w-[100vw] z-[-1] top-0 left-0'>
                <img className=' w-[100%] h-[100%]' src={Sarazanmai} alt='Sarazanmai' />
            </div>
            <div className='w-[100%] h-[100%] bg-black/40 z-[-1] absolute top-0 left-0' />
            <div className={`${display === true ? 'end':'start'} video  w-[100vw] h-[100vh] flex justify-center bg-black items-center  top-0 z-30 absolute`}>
                <iframe src="https://player.vimeo.com/video/494756323?h=4bf4190ea3" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

                <div onClick={() => setDisplay(false)} className='absolute right-8 top-8 md:block hover:rotate-180 transition-all ease-out cursor-pointer'>
                    <div className='w-[30px] h-[3px] rotate-45 bg-white'></div>
                    <div className='w-[30px] mt-[-2px] h-[3px] rotate-[135deg] bg-white'></div>
                </div>
            </div>


            <div className={`text-black ${text === true ? 'end' : 'start'} font-mono w-[100vw] absolute  p-4 top-0 h-[100vh] bg-white opacity-[0.95]`}>
                <p onClick={() => setText(false)} className=' font-bold text-lg'>Back</p>
                <div className='px-4 flex flex-col gap-2 mt-8'>
                    <p className='text-xl sm:text-2xl'>#013 / client work</p>
                    <h1 className='text-3xl sm:text-4xl'>Tsunagaru (connecting) promotional video</h1>
                    <p className=' sm:w-[600px] xl:w-[900px]'>Directed and produced a promotional video for TV anime Sarazanmai.This work was created with the intention as if the anime characters exist in Asakusa, Tokyo, where the story is based.</p>
                    <p className=' text-lg font-semibold'>share: <i class="fa-brands fa-facebook-f"></i> / <i class="fa-brands fa-twitter"></i> </p>
                </div>
            </div>
        </div>
    )
}

export default transition(Page13);