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
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

export default function App() {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
    })
  }, [])

  return (
    <div id="smooth-wrapper" className="relative w-full h-full overflow-hidden">
      <div id="smooth-content">
        <Header />
        <main>
          <Intro />
          <TickerLogos />
          <HeadCards />
          <Meet />
          <Welcome />
          <div>
            <Block titleIndex={2} img={block1} blockItems={1} changeOrder />
            <Block titleIndex={3} img={block2} blockItems={2} />
            <Block titleIndex={4} img={block3} blockItems={3} changeOrder />
          </div>
          <Partners />
          <Workforce />
          <Customers />
          <TickerLogos />
        </main>
        <Footer />
      </div>
    </div>
  )
}
