import { meetItems, titleItems } from "../../data/data"
import { IMeetItems } from "../../library/types"
import { Title } from "../Title/Title"
import crosses from "../../assets/images/meet/crosses.png"
import { FONT_STYLES_GOLD_HOVER, FONT_STYLES_SILVER, MEET_MOTION, MEET_MOTION2, MEET_MOTION3, MEET_MOTION4, MEET_MOTION5 } from "../../library/constants"
import percent from "../../assets/images/meet/percent.png"
import bg from "../../assets/images/meet/bg.png"
import buttons from "../../assets/images/meet/buttons.png"
import circle from "../../assets/images/meet/circle.png"
import { motion as m } from "framer-motion"

const Meet = () => {
  return (
    <section className="container mx-auto overflow-hidden About" id="About">
      <div className="mb-20">
        <Title props={ titleItems[0] } />
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="relative max-w-154 flex items-center justify-center overflow-hidden">
          <m.img src={ bg } alt="Background" { ...MEET_MOTION } />
          <m.img src={ buttons } alt="Buttons" { ...MEET_MOTION2 } className="absolute w-[74%]" />
          <m.img src={ circle } alt="Buttons" { ...MEET_MOTION3 } className="absolute w-[80%] top-0" />
        </div>

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