import { HeadCards } from './components/HeadCards/HeadCards'
import { Header } from './components/Header/Header'
import { Intro } from './components/Intro/Intro'
import { Meet } from './components/Meet/Meet'
import { TickerLogos } from './components/TickerLogos/TickerLogos'
import block1 from './assets/images/block/block-1.png'
import block2 from './assets/images/block/block-2.png'
import block3 from './assets/images/block/block-3.png'
import { Block } from './components/Block/Block'
import { Welcome } from './components/Welcome/Welcome'
import { Partners } from './components/Partners/Partners'
import { Workforce } from './components/Workforce/Workforce'
import { Customers } from './components/Customers/Customers'
import { Footer } from './components/Footer/Footer'
import { useEffect, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import { motion as m } from "framer-motion"
import MouseFollower from "mouse-follower"

MouseFollower.registerGSAP(gsap)
gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

export default function App() {
  const[mousePosition, setMousePosition] = useState({x: 0, y: 0})
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const cursor = new MouseFollower({
      container: '.mf-container',
      speed: 0.3,
    })

    console.log(cursor)

    return () => cursor.destroy()
  }, [])

  useEffect(() => {
    const mouseMove = (e: any) => setMousePosition({x: e.clientX, y: e.clientY})

    window.addEventListener('mousemove', mouseMove)

    return () => window.removeEventListener('mousemove', mouseMove)
  }, [])

  useLayoutEffect(() => {
    if (ScrollSmoother && window.innerWidth > 1024) {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 250,
      y: mousePosition.y - 250,
      opacity: 0,
    },
    block: {
      x: mousePosition.x - 250,
      y: mousePosition.y - 250,
      background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.00) 100%)',
      opacity: 1,
    },
  }

  return (
    <>
      {/* Cursor */}
      <m.div
        className="fixed top-0 left-0 w-125 h-125 rounded-full pointer-events-none fm-cursor z-50"
        variants={ variants }
        animate={ cursorVariant }
      />
      <div id="smooth-wrapper" className="relative w-full h-full overflow-hidden">
        <div id="smooth-content">
          <Header />
          <main>
            <Intro />
            <div className="container h-52 bg-slate-500 mf-container" />
            <TickerLogos />
            <HeadCards setCursorVariant={ setCursorVariant } />
            <Meet setCursorVariant={ setCursorVariant } />
            <Welcome />
            <div>
              <Block setCursorVariant={ setCursorVariant } titleIndex={2} img={block1} blockItems={1} changeOrder />
              <Block setCursorVariant={ setCursorVariant } titleIndex={3} img={block2} blockItems={2} />
              <Block setCursorVariant={ setCursorVariant } titleIndex={4} img={block3} blockItems={3} changeOrder />
            </div>
            <Partners setCursorVariant={ setCursorVariant } />
            <Workforce setCursorVariant={ setCursorVariant } />
            <Customers setCursorVariant={ setCursorVariant } />
            <TickerLogos />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
