import { blockButtons, blockButtons2, titleItems } from "../../data/data"
import { Title } from "../Title/Title"
import workforceBg from '../../assets/images/workforce/workforce-bg.png'
import workforceBlock1 from '../../assets/images/workforce/workforce-block-1.png'
import workforceBlock2 from '../../assets/images/workforce/workforce-block-2.png'
import workforceBlockItem1 from '../../assets/images/workforce/workforce-block-item-1.png'
import workforceBlockItem2 from '../../assets/images/workforce/workforce-block-item-2.png'
import { CARD_GRADIENT, MEET_MOTION, MEET_MOTION2, WORKFORC_1, WORKFORC_2, WORKFORC_3, } from "../../library/constants"
import boll from '../../assets/images/workforce/block-1/boll.png'
import { motion as m } from "framer-motion"

const Workforce = () => {
  return (
    <section className="container flex flex-col items-center justify-center pb-24 lg:pb-28 mx-auto" id="4">
      <div className="relative w-full flex flex-col items-center justify-center">
        <img src={ workforceBg } alt="Background" className="absolute -top-6 left-0 w-full h-full object-cover" />
        <div className="max-w-72 md:max-w-none pt-12 pb-6">
          <Title props={ titleItems[5] } />
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center">
        <m.div className={`relative max-h-[36.125rem] ${CARD_GRADIENT}`} { ...MEET_MOTION }>
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

          <m.img src={ workforceBlockItem1 } alt="Workforce Block Item 1" { ...WORKFORC_3 } className="w-full -mt-[20%] -z-10" />
          <m.img src={ boll } { ...MEET_MOTION2 } alt="Boll" className="absolute bottom-[-4%] left-[-2%] w-[54.4%]" />
          <div className="absolute bottom-[22%] right-[9%] lg:right-[10.6%] w-[40%] flex flex-col items-end justify">
            {blockButtons.map(btn =>
              <m.img
                initial={{ opacity: 0, filter: "blur(10px)", scale: 1.2, x: 20, y: -(btn.id * 10) }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1, x: 0, y: 0 }}
                transition={{ delay: btn.id * 0.2,  duration: 0.8, ease: 'easeInOut' }}
                src={ btn.img } alt="Button" key={ btn.id }
                className="mb-[6%] w-auto h-auto cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out z-20"
              />
            )}
          </div>
        </m.div>

        <m.div className={`relative max-h-[36.125rem] ${CARD_GRADIENT}`} { ...MEET_MOTION }>
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
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1, x: 0, y: 0 }}
                transition={{ delay: btn.id * 0.2,  duration: 0.8, ease: 'easeInOut' }}
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