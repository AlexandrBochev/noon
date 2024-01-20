import { meetItems, titleItems } from "../../data/data"
import { IMeetItems } from "../../library/types"
import { Title } from "../Title/Title"
import crosses from "../../assets/images/meet/crosses.png"
import { FONT_STYLES_GOLD_HOVER, FONT_STYLES_SILVER, MEET_MOTION, MEET_MOTION4, MEET_MOTION5 } from "../../library/constants"
import percent from "../../assets/images/meet/percent.png"
import bg from "../../assets/images/meet/bg.png"
import buttons from "../../assets/images/meet/buttons.png"
import circle from "../../assets/images/meet/circle.png"
import { motion as m } from "framer-motion"
import { useState } from "react"

interface MeetProps {
  setCursorVariant: (value: string) => void
}

const Meet = ({ setCursorVariant }: MeetProps) => {
  const [hover, setHover] = useState(false)

  const motion1 = {
    initial: { opacity: 0, rotate: -45, scale: 0.8 },
    whileInView: { opacity: 1, rotate: !hover ? 0 : -45, scale: !hover ? 1 : 0.9 },
    transition: { duration: 0.8, ease: 'easeInOut' },
  } 

  const motion2 = {
    initial: { opacity: 0, rotate: 45, scale: 0.8 },
    whileInView: { opacity: 1, rotate: !hover ? 0 : 45, scale: !hover ? 1 : 0.9 },
    transition: { duration: 0.8, ease: 'easeInOut' },
  }

  const handleEnter = () => {
    setCursorVariant('block')
    setHover(true)
  }

  const handleLive = () => {
    setCursorVariant('default')
    setHover(false)
  }

  return (
    <section className="container mx-auto overflow-hidden About" id="About">
      <div className="mb-20">
        <Title props={ titleItems[0] } />
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <m.div
          { ...MEET_MOTION }
          className="
            relative max-w-154 flex items-center justify-center overflow-hidden rounded-[20px] md:rounded-[30px]
            border border-transparent
            before:bg-gradient-to-b before:from-[#51425E]/70 before:to-[#51425E]/20
            before:border-inherit before:border before:rounded-[20px] before:md:rounded-[30px]
            before:absolute before:inset-0 before:z-10 before:bg-origin-border before:[mask-composite:exclude] gradient
          "
          onMouseEnter={ handleEnter }
          onMouseLeave={ handleLive }
        >
          <img src={ bg } alt="Background" className="w-full h-full object-cover" />

          <m.img
            src={ buttons } alt="Buttons"
            { ...motion2 }
            className="absolute w-[74%]"
          />

          <m.img
            src={ circle } alt="Circle"
            { ...motion1 }
            className="absolute w-[80%] top-0"
          />
        </m.div>

        <div className="w-15 h-24" />

        <div className="w-full max-w-105">
          {meetItems.map((item: IMeetItems) => 
            <div key={ item.id } className="relative flex group cursor-pointer mb-8 last:mb-0">
              <m.img
                { ...MEET_MOTION4 }
                transition={{ delay: item.id * 0.1, duration: 0.5, ease: 'easeOut' }}
                src={ crosses }
                alt="crosses"
                className="w-5 h-6.5 mr-3 md:mr-4 -mt-1"
              />
              <div>
                <m.h3
                  { ...MEET_MOTION5 }
                  transition={{ delay: item.id * 0.1, duration: 0.8, }}
                  className={`text-xl md:text-[1.375rem] group-hover:font-bold mb-4 ${FONT_STYLES_GOLD_HOVER}`}
                >
                  { item.title }
                </m.h3>
                <m.p
                  { ...MEET_MOTION4 }
                  transition={{ delay: item.id * 0.1, duration: 0.5, ease: 'easeOut' }}
                  className="text-[#54565B] md:text-lg text-base max-w-[344px]"
                >
                  { item.description }
                </m.p>
              </div>
              <div
                className="
                  absolute top-0 right-0 flec items-center justify-center
                  opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300
                "
              >
                <img src={ percent } alt="Percent" className="w-16 h-8" />
                <p className={`absolute top-2.5 right-3 ${ FONT_STYLES_SILVER }`}>{ item.percent }%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export { Meet }