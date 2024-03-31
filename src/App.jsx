
import './App.css'
import { useLocation, Routes, Route } from 'react-router-dom'
import About from './page/About'
import Home from './page/Home'
import Page1 from './page/Page1'
import Page10 from './page/Page10'
import Page11 from './page/Page11'
import Page2 from './page/Page2'
import Page3 from './page/Page3'
import Page5 from './page/Page5'
import Page6 from './page/Page6'
import Page7 from './page/Page7'
import Page8 from './page/Page8'
import Page9 from './page/Page9'
import Page4 from './page/page4'
import Page12 from './page/Page12'
import Page13 from './page/Page13'
import Page14 from './page/Page14'
import Page15 from './page/Page15'
import Page16 from './page/Page16'
import Page17 from './page/Page17'
import Page18 from './page/Page18'
import Page19 from './page/Page19'
import { AnimatePresence } from 'framer-motion'


function App() {

  const location = useLocation();
  return (
    <>
      <div className='h-[100vh]'>

      


        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/work' element={<About />} />
            <Route path='/work/001' element={<Page1 />} />
            <Route path='/work/002' element={<Page2 />} />
            <Route path='/work/003' element={<Page3 />} />
            <Route path='/work/004' element={<Page4 />} />
            <Route path='/work/005' element={<Page5 />} />
            <Route path='/work/006' element={<Page6 />} />
            <Route path='/work/007' element={<Page7 />} />
            <Route path='/work/008' element={<Page8 />} />
            <Route path='/work/009' element={<Page9 />} />
            <Route path='/work/010' element={<Page10 />} />
            <Route path='/work/011' element={<Page11 />} />
            <Route path='/work/012' element={<Page12 />} />
            <Route path='/work/013' element={<Page13 />} />
            <Route path='/work/014' element={<Page14 />} />
            <Route path='/work/015' element={<Page15 />} />
            <Route path='/work/016' element={<Page16 />} />
            <Route path='/work/017' element={<Page17 />} />
            <Route path='/work/018' element={<Page18 />} />
            <Route path='/work/019' element={<Page19 />} />
          </Routes>
        </AnimatePresence>

        <div className=' loader2 z-[100] bg-white fixed w-[100%] h-[100vh] font-mono top-0 left-0 justify-center items-center flex-col'>
          <p className='text-2xl flex flex-row pb-[2rem] '>TAO TAJIMA <span className='d1'>.</span><span className='d2'>.</span><span className='d3'>.</span></p>
          <hr className='h-[1.5px]  bg-black/30 w-[100%]' />
          <svg className='loader2' viewBox="0 0 100 100">
            <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6">
              <path d="M 21 40 V 59">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  values="0 21 59; 180 21 59"
                  dur="2s"
                  repeatCount="indefinite" />
              </path>
              <path d="M 79 40 V 59">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  values="0 79 59; -180 79 59"
                  dur="2s"
                  repeatCount="indefinite" />
              </path>
              <path d="M 50 21 V 40">
                <animate
                  attributeName="d"
                  values="M 50 21 V 40; M 50 59 V 40"
                  dur="2s"
                  repeatCount="indefinite" />
              </path>
              <path d="M 50 60 V 79">
                <animate
                  attributeName="d"
                  values="M 50 60 V 79; M 50 98 V 79"
                  dur="2s"
                  repeatCount="indefinite" />
              </path>
              <path d="M 50 21 L 79 40 L 50 60 L 21 40 Z">
                <animate
                  attributeName="stroke"
                  values="rgba(255,255,255,1); rgba(100,100,100,0)"
                  dur="2s"
                  repeatCount="indefinite" />
              </path>
              <path d="M 50 40 L 79 59 L 50 79 L 21 59 Z" />
              <path d="M 50 59 L 79 78 L 50 98 L 21 78 Z">
                <animate
                  attributeName="stroke"
                  values="rgba(100,100,100,0); rgba(255,255,255,1)"
                  dur="2s"
                  repeatCount="indefinite" />
              </path>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="0 0; 0 -19"
                dur="2s"
                repeatCount="indefinite" />
            </g>
          </svg>
        </div>
      </div>
    </>
  )
}

export default App
