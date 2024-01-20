import blockBG from "../../assets/images/block/block-bg.jpg"
import { titleItems } from "../../data/data"
import { MEET_MOTION4 } from "../../library/constants"
import { BlockItem1 } from "../BlockItem1/BlockItem1"
import { BlockItem2 } from "../BlockItem2/BlockItem2"
import { BlockItem3 } from "../BlockItem3/BlockItem3"
import { Title } from "../Title/Title"
import { motion as m } from "framer-motion"

interface BlockProps {
  titleIndex: number
  img: string
  changeOrder?: boolean
  blockItems?: number
  setCursorVariant: (value: string) => void
}

const Block = ({ titleIndex, img, changeOrder, blockItems, setCursorVariant }: BlockProps) => {
  return (
    <section className="relative container mb-8 lg:mb-24 mx-auto overflow-hidden">
      <m.div
        { ...MEET_MOTION4 }
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        onMouseEnter={ () => setCursorVariant('block') }
        onMouseLeave={ () => setCursorVariant('default') }
        className="relative rounded-[1.875rem] border border-[#6A2D00]/30 overflow-hidden"
      >
        <img src={ blockBG } alt="Block" className="absolute top-0 left-0 w-full h-full rounded-[1.875rem] -z-10 object-cover" />

        <div className="relative w-full flex flex-col lg:flex-row items-start lg:items-center justify-between p-5 lg:p-12">
          <div className={`${ changeOrder ? 'lg:order-2 lg:ml-12' : 'lg:mr-12'} relative flex justify-start mb-12.5 lg:mb-0`}>
            <m.img
              src={ img } alt="Block"
              { ...MEET_MOTION4 }
              transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
              className="w-full"
            />
            { blockItems === 1 && <BlockItem1 />}
            { blockItems === 2 && <BlockItem2 />}
            { blockItems === 3 && <BlockItem3 />}
          </div>

          <div className="max-w-64 xl:max-w-105">
            <Title props={ titleItems[titleIndex] } />
          </div>
        </div>
      </m.div>
    </section>
  )
}

export { Block }