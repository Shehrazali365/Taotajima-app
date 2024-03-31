import React from 'react';
import MN from '../../assets/MN.jpg'
import prism from '../../assets/prism.jpg'
import Magic from '../../assets/Magic.jpg'
import mtv from '../../assets/mtv-ultrahits.jpg'
import Night from '../../assets/night-stroll.jpg'
import sstv from '../../assets/sstv.jpg'
import itsuka from '../../assets/itsuka-no-hoshi.jpg'
import techne from '../../assets/techne.jpg'
import Sarazanmai from '../../assets/Sarazanmai.jpg'
import stripe from '../../assets/stripe-intl.jpg'
import reiji from '../../assets/reiji-no-machi.jpg'
import asa from '../../assets/asa-dan.jpg'
import ATTESA from '../../assets/ATTESA.jpg'
import Waxing from '../../assets/Waxing-moon.jpg'
import xperia from '../../assets/xperia-ear.jpg'
import xperiaear from '../../assets/xperia-ear-duo.jpg'
import bravia from '../../assets/bravia-2017.jpg'
import project from '../../assets/the-9d-project.jpg'
import AJINOMOTO from '../../assets/AJINOMOTO.jpg'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import vidoe from '../../assets/vidoe.mp4'
import video6 from '../../assets/video6.mp4'
import video5 from '../../assets/video5.mp4'
import video4 from '../../assets/video4.mp4'
import video3 from '../../assets/video3.mp4'
import video2 from '../../assets/video2.mp4'
import video1 from '../../assets/video1.mp4'
import v7 from '../../assets/v7.mp4'
import v6 from '../../assets/v6.mp4'
import v5 from '../../assets/v5.mp4'
import v4 from '../../assets/v4.mp4'
import v3 from '../../assets/v3.mp4'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'
import { fadeIn } from '../motion'




function Works() {
    return (
        <div className='AboutContent container relative px-[40px]  sm:px-[50px] md:px-[100px] lg:px-[180px] pt-[200px] lg:pt-[8rem] py-10 lg:py-20  font-mono grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-y-[7rem] gap-y-[2rem] gap-20  xl:gap-20'>
            <Link to='/work/019'>
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='1 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col  box cursor-pointer h-[200px]'>
                    <p className='lg:block hidden font-semibold'>019</p>
                    <div className={` boximg `}>
                        {/* <img className='img1' src={MN} alt='MN' /> */}
                        <span className={`bg-[url(./assets/MN.jpg)]`}></span>
                        <span className={`bg-[url(./assets/MN.jpg)]`}></span>
                        <span className={`bg-[url(./assets/MN.jpg)]`}></span>
                        <span className={`bg-[url(./assets/MN.jpg)]`}></span>
                        <img className='z-[-1] h-[100%] img3' src={img5} alt='img5' />
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base  font-semibold'><strong>MN</strong> concept movie</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/018'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='2 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer xl:mt-[-50px] h-[200px]'>
                    <p className='lg:block hidden font-semibold'>018</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={prism} alt='prism' /> */}

                        <span className={`bg-[url(./assets/prism.jpg)]`}></span>
                        <span className={`bg-[url(./assets/prism.jpg)]`}></span>
                        <span className={`bg-[url(./assets/prism.jpg)]`}></span>
                        <span className={`bg-[url(./assets/prism.jpg)]`}></span>

                        <img className=' z-[-1] h-[100%]' src={prism} alt='prism' />
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'><strong>TELE-PLAY</strong> - prism</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/017'>
                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='3 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer h-[200px]'>
                    <p className='lg:block hidden font-semibold'>017</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={ATTESA} alt='ATTESA' /> */}

                        <span className={`bg-[url(./assets/ATTESA.jpg)]`}></span>
                        <span className={`bg-[url(./assets/ATTESA.jpg)]`}></span>
                        <span className={`bg-[url(./assets/ATTESA.jpg)]`}></span>
                        <span className={`bg-[url(./assets/ATTESA.jpg)]`}></span>

                        <img className='z-[-1] h-[100%]' src={img4} alt='ATTESA' />
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'><strong>CITIZEN-ATTESA</strong></p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/016'>
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='4 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer h-[200px]'>
                    <p className='lg:block hidden font-semibold'>016</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={AJINOMOTO} alt='AJINOMOTO' /> */}

                        <span className={`bg-[url(./assets/AJINOMOTO.jpg)]`}></span>
                        <span className={`bg-[url(./assets/AJINOMOTO.jpg)]`}></span>
                        <span className={`bg-[url(./assets/AJINOMOTO.jpg)]`}></span>
                        <span className={`bg-[url(./assets/AJINOMOTO.jpg)]`}></span>
                        <img className='z-[-1] h-[100%]' src={img3} alt='AJINOMOTO' />
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'><strong>FUTURE FOOD TALK</strong></p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/015'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='5 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer xl:mt-[-50px] h-[200px]'>
                    <p className='lg:block hidden font-semibold'>015</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={Magic} alt='Magic' /> */}
                        <span className={`bg-[url(./assets/Magic.jpg)]`}></span>
                        <span className={`bg-[url(./assets/Magic.jpg)]`}></span>
                        <span className={`bg-[url(./assets/Magic.jpg)]`}></span>
                        <span className={`bg-[url(./assets/Magic.jpg)]`}></span>
                        <img className='z-[-1] h-[100%]' src={img2} alt='Magic' />
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'>Cuushe - Magic</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/014'>
                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='6 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer h-[200px]'>
                    <p className='lg:block hidden font-semibold'>014</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={reiji} alt='reiji' /> */}

                        <span className={`bg-[url(./assets/reiji-no-machi.jpg)]`}></span>
                        <span className={`bg-[url(./assets/reiji-no-machi.jpg)]`}></span>
                        <span className={`bg-[url(./assets/reiji-no-machi.jpg)]`}></span>
                        <span className={`bg-[url(./assets/reiji-no-machi.jpg)]`}></span>
                        <img className='z-[-1] h-[100%]' src={img1} alt='reiji' />
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 font-semibold'>Pasocom Music Club - reiji no machi</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/013'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='7 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer h-[200px]'>
                    <p className='lg:block hidden font-semibold'>013</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={Sarazanmai} alt='Sarazanmai' /> */}
                        
                        <span className={`bg-[url(./assets/Sarazanmai.jpg)]`}></span>
                        <span className={`bg-[url(./assets/Sarazanmai.jpg)]`}></span>
                        <span className={`bg-[url(./assets/Sarazanmai.jpg)]`}></span>
                        <span className={`bg-[url(./assets/Sarazanmai.jpg)]`}></span>
                        <img className='z-[-1] h-[100%]' src={Sarazanmai} alt='Sarazanmai' />
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 font-semibold'>Tsunagaru (connecting) promotional video</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/012'>
                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='8 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer xl:mt-[-50px] h-[200px]'>
                    <p className='lg:block hidden font-semibold'>012</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={project} alt='project' /> */}

                        <span className={`bg-[url(./assets/the-9d-project.jpg)]`}></span>
                        <span className={`bg-[url(./assets/the-9d-project.jpg)]`}></span>
                        <span className={`bg-[url(./assets/the-9d-project.jpg)]`}></span>
                        <span className={`bg-[url(./assets/the-9d-project.jpg)]`}></span>
                        <video className='z-[-1] h-[100%]' autoPlay loop muted id="myVideo">
                            <source src={vidoe} type="video/mp4" />
                        </video>
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'>THE 9D PROJECT - Experience Innovation-</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/011'>
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='9 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer h-[200px]'>
                    <p className='lg:block hidden font-semibold'>011</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={mtv} alt='mtv' /> */}
                        <span className={`bg-[url(./assets/mtv-ultrahits.jpg)]`}></span>
                        <span className={`bg-[url(./assets/mtv-ultrahits.jpg)]`}></span>
                        <span className={`bg-[url(./assets/mtv-ultrahits.jpg)]`}></span>
                        <span className={`bg-[url(./assets/mtv-ultrahits.jpg)]`}></span>
                        <video className='z-[-1] h-[100%]'  autoPlay loop muted id="myVideo">
                            <source src={video6} type="video/mp4" />
                        </video>
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 font-semibold'><strong>MT VULTRAHITS</strong></p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/010'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='10 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer h-[200px]'>
                    <p className='lg:block hidden font-semibold'>010</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={xperiaear} alt='xperiaear' /> */}

                        <span className={`bg-[url(./assets/xperia-ear-duo.jpg)]`}></span>
                        <span className={`bg-[url(./assets/xperia-ear-duo.jpg)]`}></span>
                        <span className={`bg-[url(./assets/xperia-ear-duo.jpg)]`}></span>
                        <span className={`bg-[url(./assets/xperia-ear-duo.jpg)]`}></span>
                        <video className='z-[-1] h-[100%]' autoPlay loop muted id="myVideo">
                            <source src={video5} type="video/mp4" />
                        </video>
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'>Xperia Ear Open-style Concept</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/009'>
                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='11 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer xl:mt-[-50px] h-[200px]'>
                    <p className='lg:block hidden font-semibold'>009</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={techne} alt='techne' /> */}


                        <span className={`bg-[url(./assets/techne.jpg)]`}></span>
                        <span className={`bg-[url(./assets/techne.jpg)]`}></span>
                        <span className={`bg-[url(./assets/techne.jpg)]`}></span>
                        <span className={`bg-[url(./assets/techne.jpg)]`}></span>
                        <video className='z-[-1] h-[100%]' autoPlay loop muted id="myVideo">
                            <source src={v4} type="video/mp4" />
                        </video>
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'><strong>TECHNE</strong></p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/008'>
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='12 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer h-[200px]'>
                    <p className='lg:block hidden font-semibold'>008</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={stripe} alt='stripe' /> */}

                        <span className={`bg-[url(./assets/stripe-intl.jpg)]`}></span>
                        <span className={`bg-[url(./assets/stripe-intl.jpg)]`}></span>
                        <span className={`bg-[url(./assets/stripe-intl.jpg)]`}></span>
                        <span className={`bg-[url(./assets/stripe-intl.jpg)]`}></span>
                        <video className='z-[-1] h-[100%]' autoPlay loop muted id="myVideo">
                            <source src={v3} type="video/mp4" />
                        </video>
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'><strong>STRIPE INTERNATIONAL INC</strong>.</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/007'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='13 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer h-[200px]'>
                    <p className='lg:block hidden font-semibold'>007</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={itsuka} alt='itsuka' /> */}

                        <span className={`bg-[url(./assets/itsuka-no-hoshi.jpg)]`}></span>
                        <span className={`bg-[url(./assets/itsuka-no-hoshi.jpg)]`}></span>
                        <span className={`bg-[url(./assets/itsuka-no-hoshi.jpg)]`}></span>
                        <span className={`bg-[url(./assets/itsuka-no-hoshi.jpg)]`}></span>
                        <video className='z-[-1] h-[100%]' autoPlay loop muted id="myVideo">
                            <source src={video4} type="video/mp4" />
                        </video>
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'>Gurun Gurun - Itsuka no Hoshi</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/006'>
                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='14 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer xl:mt-[-50px] h-[200px]'>
                    <p className='lg:block hidden font-semibold'>006</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={bravia} alt='bravia' /> */}

                        <span className={`bg-[url(./assets/bravia-2017.jpg)]`}></span>
                        <span className={`bg-[url(./assets/bravia-2017.jpg)]`}></span>
                        <span className={`bg-[url(./assets/bravia-2017.jpg)]`}></span>
                        <span className={`bg-[url(./assets/bravia-2017.jpg)]`}></span>
                        <video className='z-[-1] h-[100%]' autoPlay loop muted id="myVideo">
                            <source src={v5} type="video/mp4" />
                        </video>
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 font-semibold text-xl lg:text-base'><strong>SONY BRAVIA 2017</strong> Design Concept</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/005'>
                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='15 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer h-[200px]'>
                    <p className='lg:block hidden font-semibold'>005</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={asa} alt='asa' /> */}

                        <span className={`bg-[url(./assets/asa-dan.jpg)]`}></span>
                        <span className={`bg-[url(./assets/asa-dan.jpg)]`}></span>
                        <span className={`bg-[url(./assets/asa-dan.jpg)]`}></span>
                        <span className={`bg-[url(./assets/asa-dan.jpg)]`}></span>
                        <video className='z-[-1] h-[100%]' autoPlay loop muted id="myVideo">
                            <source src={video3} type="video/mp4" />
                        </video>
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'>tofubeats - Asa Ga Kuru Made Owaru Koto No Nai Dance Wo</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='004'>
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='16 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer h-[200px]'>
                    <p className='lg:block hidden font-semibold'>004</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={Waxing} alt='Waxing' /> */}

                        <span className={`bg-[url(./assets/Waxing-moon.jpg)]`}></span>
                        <span className={`bg-[url(./assets/Waxing-moon.jpg)]`}></span>
                        <span className={`bg-[url(./assets/Waxing-moon.jpg)]`}></span>
                        <span className={`bg-[url(./assets/Waxing-moon.jpg)]`}></span>
                        <video className='z-[-1] h-[100%]' autoPlay loop muted id="myVideo">
                            <source src={video2} type="video/mp4" />
                        </video>
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'>Rayons ft.Predawn - Waxing Moon</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='003'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='17 lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col box cursor-pointer xl:mt-[-50px] h-[200px]'>
                    <p className='lg:block hidden font-semibold'>003</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={xperia} alt='xperia' /> */}

                        <span className={`bg-[url(./assets/xperia-ear.jpg)]`}></span>
                        <span className={`bg-[url(./assets/xperia-ear.jpg)]`}></span>
                        <span className={`bg-[url(./assets/xperia-ear.jpg)]`}></span>
                        <span className={`bg-[url(./assets/xperia-ear.jpg)]`}></span>
                        <video className='z-[-1] h-[100%]'  autoPlay loop muted id="myVideo">
                            <source src={v6} type="video/mp4" />
                        </video>
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'>Xperia Ear</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='002'>
                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='box lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col cursor-pointer 18 h-[200px]'>
                    <p className='lg:block hidden font-semibold'>002</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={sstv} alt='sstv' /> */}

                        <span className={`bg-[url(./assets/sstv.jpg)]`}></span>
                        <span className={`bg-[url(./assets/sstv.jpg)]`}></span>
                        <span className={`bg-[url(./assets/sstv.jpg)]`}></span>
                        <span className={`bg-[url(./assets/sstv.jpg)]`}></span>
                        <video className='z-[-1] h-[100%]' autoPlay loop muted id="myVideo">
                            <source src={video1} type="video/mp4" />
                        </video>
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'><strong>SPACE SHOWER</strong> TV Plus "IDOL SONG RANKING"</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/work/001'>
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='box lg:flex lg:gap-0 gap-8 grid grid-cols-2 lg:flex-col cursor-pointer 19 h-[200px]'>
                    <p className='lg:block hidden font-semibold'>001</p>
                    <div className=' boximg '>
                        {/* <img className='img1' src={Night} alt='Night' /> */}

                        <span className={`bg-[url(./assets/night-stroll.jpg)]`}></span>
                        <span className={`bg-[url(./assets/night-stroll.jpg)]`}></span>
                        <span className={`bg-[url(./assets/night-stroll.jpg)]`}></span>
                        <span className={`bg-[url(./assets/night-stroll.jpg)]`}></span>
                        <video className='z-[-1] h-[100%]' autoPlay loop muted id="myVideo">
                            <source src={v7} type="video/mp4" />
                        </video>
                    </div>
                    <div className=' flex lg:justify-start lg:items-start justify-center items-center'>
                        <p className='pt-2 text-xl lg:text-base font-semibold'>Night Stroll</p>
                    </div>
                </motion.div>
            </Link>
            <Link to='/'>
                <div className=' fixed hidden md:block  hover:rotate-180 transition-all ease-out  left-[1.25rem] md:left-[2.25rem] top-[17.5%] lg:top-[35.5%] cursor-pointer'>
                    <div className='w-[20px] c1 md:w-[30px] h-[3px] bg-black'></div>
                    <div className='w-[20px] c2 md:w-[30px] mt-[-2px] h-[3px]  bg-black'></div>
                </div>
            </Link>
        </div>
    )
}

export default Works