import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../motion'




function AboutContent() {
    return (
        <div id='about' className='AboutContent px-[40px] sm:px-[50px] md:px-[100px] lg:px-[180px] font-semibold flex flex-col gap-10 py-[100px]'>
            <div className='flex flex-col gap-3 sm:gap-5 md:gap-12 xl:gap-7 text-start'>
                <motion.h2
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='textup xl:pb-8 pb-0 md:text-xl text-xs sm:text-sm  text-start lg:text-3xl font-semibold tracking-[0.5em]'>Filmmaker</motion.h2>
                <motion.h1
                    variants={fadeIn('right', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='textup text-3xl sm:text-3xl lg:text-4xl md:leading-[0] leading-[60px]  xl:text-[58px] tracking-[0.8em] md:tracking-[0.8em]'>TAO TAJIMA</motion.h1>
                <motion.p
                    variants={fadeIn('right', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='textup text-xl pt-0 pb-4 md:pb-0 xl:pt-12 tracking-[0.2em]'>from <span className=' tracking-[0.4em]'>TANGRAM</span> co.ltd.</motion.p>
                <motion.p
                    variants={fadeIn('right', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='textup inline-block mt-[-30px] text-xl tracking-[0.2em] cursor-pointer text1 hover:after:w-[240px] after:w-[0px] hover:after:h-[0.5px] hover:after:left-0 hover:after:bottom-0 after:bg-black relative after:absolute'>http:<span className=' font-normal'>//</span>tangram.to<span className=' font-normal'>/</span></motion.p>
            </div>
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden' className=' flex flex-col gap-1'>
                <p>A director and film maker with the Tokyo visual design studio Tangram.</p>
                <p>Characterized by a worldview that completely transforms casual everyday landscapes, expressed through the skillful use of light.</p>
            </motion.div>
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'>
                <p>Contact</p>
                <p className=' inline-block text1 hover:after:w-[190px] after:w-[0px] hover:after:h-[0.5px] hover:after:left-0 hover:after:bottom-0 after:bg-black relative after:absolute cursor-pointer'>Shehrazali360@gmail.com</p>
            </motion.div>
        </div>
    )
}

export default AboutContent