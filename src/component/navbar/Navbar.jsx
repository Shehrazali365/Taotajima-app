import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ title, position, bg, dis,bg2, dis1, hidden }) {
    return (
        <div className={`${position} z-20 md:px-10 px-5 w-[100%] flex justify-between py-8 font-mono tracking-[0.2em]`}>

            <div className={` ${dis} md:hidden box block cursor-pointer`}>
                <Link to='/work'>
                    <div className='w-[30px] br1 h-[3px] m-1 bg-white'></div>
                    <div className='w-[30px] br2 h-[3px] m-1 bg-white'></div>
                    <div className='w-[30px] br3 h-[3px] m-1 bg-white'></div>
                </Link>
            </div>

            <div className={` pt-2 ${dis1} ${hidden} md:hidden hover:rotate-180 transition-all ease-out cursor-pointer`}>
                <Link to='/'>
                    <div className='w-[20px] md:w-[30px] h-[3px] rotate-45 bg-black'></div>
                    <div className='w-[20px] md:w-[30px] mt-[-2px] h-[3px] rotate-[135deg] bg-black'></div>
                </Link>
            </div>

            <div className={`md:block hidden text text-[14px] sm:text-[18px] cursor-pointer relative before:w-5 hover:before:w-10 hover:before:right-[-50px] before:right-[-30px] before:top-3 before:h-[2px]  before:bg-white ${bg} before:absolute`}>
                <span><Link to='/'><strong>{title}</strong></Link> <Link to='/work'>About</Link></span>
                <i class="sm:text-[18px] text-[14px] arrow absolute right-[-40px] top-[6.2px] sm:top-[5px] fa-solid fa-arrow-right"></i>
            </div>

            <div className='md:block hidden text-[14px] sm:text-[18px] cursor-pointer'>
                <span>
                    facebook / vimeo
                </span>
            </div>

            <div className={`md:hidden block left-[-60px] text text-[14px] sm:text-[18px] cursor-pointer relative before:w-5 hover:before:w-10 hover:before:right-[-50px] before:right-[-30px] before:top-[10px] sm:before:top-3 before:h-[2px]  before:bg-white before:absolute`}>
                <Link to='/work'>
                    <a href='/about'>
                        <span>About</span>
                        <i class="sm:text-[18px] text-[14px] arrow absolute right-[-40px] top-[4.4px] sm:top-[5px] fa-solid fa-arrow-right"></i>
                    </a>
                </Link>
            </div>


        </div>
    )
}

export default Navbar