import { blockButtons, blockButtons2, titleItems } from "../../data/data"
import { Title } from "../Title/Title"
import workforceBlock1 from '../../assets/images/workforce/workforce-block-1.png'
import workforceBlock2 from '../../assets/images/workforce/workforce-block-2.png'
import workforceBlockItem1 from '../../assets/images/workforce/workforce-block-item-1.png'
import workforceBlockItem2 from '../../assets/images/workforce/workforce-block-item-2.png'
import { CARD_GRADIENT, MEET_MOTION, WORKFORC_1, WORKFORC_2, WORKFORC_3, } from "../../library/constants"
import boll from '../../assets/images/workforce/block-1/boll.png'
import { motion as m } from "framer-motion"
import { Player } from "@lottiefiles/react-lottie-player"
import lottieSlideGrid from '../../library/lottie/lottie slide grid.json'
import { useState } from "react"

interface WorkforceProps {
  setCursorVariant: (value: string) => void
}

const Workforce = ({ setCursorVariant }: WorkforceProps) => {
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)

  const handleEnter1 = () => {
    setCursorVariant('block')
    setHover1(true)
  }

  const handleLive1 = () => {
    setCursorVariant('default')
    setHover1(false)
  }

  const handleEnter2 = () => {
    setCursorVariant('block')
    setHover2(true)
  }

  const handleLive2 = () => {
    setCursorVariant('default')
    setHover2(false)
  }

  return (
    <section className="container flex flex-col items-center justify-center mx-auto Articles" id="Articles">
      <div className="relative w-full flex flex-col items-center justify-center pb-15 pt-12 lg:pt-28 lg:pb-20">
        <Player
          autoplay
          loop
          src={lottieSlideGrid}
          className="absolute inset-0 w0full h-full object-cover lottie -z-10"
        />

        <div className="max-w-72 md:max-w-none">
          <Title props={ titleItems[5] } />
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        <m.div
          className={`relative lg:mr-5 ${CARD_GRADIENT}`} { ...MEET_MOTION }
          onMouseEnter={ handleEnter1 }
          onMouseLeave={ handleLive1 }
        >
          <img src={ workforceBlock1 } alt="Workforce Block 1" className="absolute inset-0 w-full h-full -z-10 object-cover" />

          <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
            <m.p
              { ...WORKFORC_1 }
              className="text-[1.25rem] xl:text-[1.625rem] text-balance mb-4"
            >
              Clone Your Best Recruiter
            </m.p>
            <m.p
              { ...WORKFORC_2 }
              className="text-[0.875rem] xl:text-lg text-balance opacity-65"
            >
              Noon observes and replicates your sourcing process using RLHF (Reinforcement Learning from Human Feedback)
            </m.p>
          </div>

          <m.img
            src={ workforceBlockItem1 } alt="Workforce Block Item 1"
            { ...WORKFORC_3 }
            className="w-full -mt-[20%] -z-10"
          />

          <m.img
            src={ boll } alt="Boll"
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: !hover1 ? 0 : -45, scale: !hover1 ? 1 : 0.9 }}
            transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
            className="absolute bottom-[-4%] left-[-2%] w-[54.4%]"
          />

          <div className="absolute bottom-[22%] right-[9%] lg:right-[10.6%] w-[40%] flex flex-col items-end justify">
            {blockButtons.map((btn) =>
              <m.img
                initial={{ opacity: 0, filter: "blur(10px)", scale: 1.2, x: 20, y: -(btn.id * 10) }}
                whileInView={{
                  opacity: 1, 
                  filter: "blur(0px)",
                  scale: !hover1 ? 1 : 1.2,
                  x: !hover1 ? 0 : 10, 
                  y: !hover1 ? 0 : -(btn.id * 5), 
                }}
                transition={{ delay: btn.id * 0.1,  duration: 0.8, ease: 'easeInOut' }}
                src={ btn.img } alt="Button" key={ btn.id }
                className="mb-[6%] w-auto h-auto cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out z-20"
              />
            )}
          </div>
        </m.div>

        <m.div
          className={`relative ${CARD_GRADIENT}`} { ...MEET_MOTION }
          onMouseEnter={ handleEnter2 }
          onMouseLeave={ handleLive2 }
        >
          <img src={ workforceBlock2 } alt="Workforce Block 1" className="absolute inset-0 w-full h-full -z-10 object-cover" />

          <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
            <m.p
              { ...WORKFORC_1 }
              className="text-[1.25rem] xl:text-[1.625rem] text-balance mb-4"
            >
              Dynamically Scale Your Recruiting Team
            </m.p>
            <m.p
              { ...WORKFORC_2 }
              className="text-[0.875rem] xl:text-lg text-balance opacity-65"
            >
              Activate or hibernate your autonomous AI agents based on your hiring needs.
            </m.p>
          </div>

          <m.img src={ workforceBlockItem2 } { ...WORKFORC_3 } alt="Workforce Block Item 1" className="w-full -mt-[14%] lg:-mt-[20%] -z-10" />
          <div className="absolute bottom-[9%] lg:bottom-[12%] left-[23.6%] lg:left-[24%] w-[14.2%] flex flex-col items-end justify">
            {blockButtons2.map(btn =>
              <m.img
                initial={{ opacity: 0, filter: "blur(4px)", scale: 1.2, x: 40, y: -(btn.id * 20) }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                  scale: !hover2 ? 1 : 1.2,
                  x: !hover2 ? 0 : 20,
                  y: !hover2 ? 0 : -(btn.id * 10),
                }}
                transition={{ delay: btn.id * 0.1,  duration: 0.8, ease: 'easeInOut' }}
                src={ btn.img } alt="Button" key={ btn.id }
                className="w-auto h-auto mb-[1%] lg:mb-[1.5%] cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out z-20"
              />
            )}
          </div>
        </m.div>
      </div>
    </section>
  )
}

export { Workforce }