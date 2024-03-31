import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../motion'

function Hero({ setText, class1, pagenum, link1, link2, class2, prevpage, pagenumtext, prevpagetext, display, dis, current, currenttext, setDisplay, para }) {
    return (
        <div className={` h-[80%] ${class1} main relative font-mono ${class2}  flex flex-col  items-center `} >
            <Link to='/work' >
                <div className='absolute w-[40px] h-[40px] md:block hidden left-[1.25rem] md:left-[2.25rem] top-[10%] lg:top-[26%] cursor-pointer'>
                    <div className='loader'></div>
                </div>
            </Link>




            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className={`${dis} pl-4 mt-0   lg:mt-[12rem]  home flex flex-col gap-3 sm:gap-5 md:gap-12 xl:gap-7 text-center md:text-start`}>
                <h2 className=' md:text-xl text-xs sm:text-sm text-center md:text-start lg:text-2xl font-bold tracking-[0.5em]'>Filmmaker</h2>
                <h1 className='text-3xl sm:text-4xl md:leading-[0] leading-[60px]  xl:text-5xl tracking-[0.8em] md:tracking-[1.4em]'>TAO TAJIMA</h1>
                <p className='pr-0 md:pr-12 text-center md:text-end tracking-[0.2em]'>from <span className=' tracking-[0.4em]'>TANGRAM</span> co.ltd.</p>
            </motion.div>


            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className={`pageone md:px-10 px-5  ${display} flex gap-8 lg:flex-row flex-col sm:px-[5rem]  lg:px-[5rem]  md:text-start`}>
                <div className='flex flex-col gap-6'>
                    <p className='text-xl sm:text-2xl'>{current}</p>
                    <h1 className='text-3xl sm:text-4xl'>{currenttext}</h1>
                    <p className='text sm:w-[600px] xl:w-[900px]'>{para}</p>
                    <p className='text text-lg'>share: <i class="fa-brands fa-facebook-f"></i>  <i class="fa-brands fa-twitter"></i> </p>
                    <p onClick={() => setText(true)} className='text-lg hidden text2 underline font-bold cursor-pointer'>information</p>
                </div>
                <div onClick={() => setDisplay(true)} className='lg:text-center  lg:items-center'>
                    <p className='text-xl cursor-pointer font-semibold text-center p-[2rem] py-[2.5rem] sm:p-[4rem] inline-block bg-white/65 text-black rounded-full hover:bg-black hover:text-white'>PLAY</p>
                </div>
            </motion.div>




            <div className='flex next w-[100%] justify-center absolute bottom-0 gap-[50px] md:gap-[100px] lg:gap-[250px]'>
                <Link to={`${link1}`}>
                    <div className='flex flex-col cursor-pointer'>
                        <span className=' text-end'>{pagenum}</span>
                        <div className='md:w-[300px] w-[100px] lg:w-[350px]'>
                            <span className='text-end md:block hidden'>{pagenumtext} </span>
                            <hr className=' relative' />
                            <i class=" top-[17px] md:top-[40px] absolute fa-solid fa-arrow-left"></i>
                        </div>
                    </div>
                </Link>
                <Link to={`${link2}`}>
                    <div className='flex flex-col cursor-pointer'>
                        <span className=' text-start'>{prevpage}</span>
                        <div className=' relative md:w-[300px] w-[100px] lg:w-[350px]'>
                            <span className='md:block hidden'>{prevpagetext}</span>
                            <hr className=' h-[4px]' />
                            <i class="right-0 top-[-7px] md:top-[17px] absolute fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Hero