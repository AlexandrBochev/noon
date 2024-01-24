import item from '../../assets/images/block/block-3/item.png'
import item2 from '../../assets/images/block/block-3/item-2.png'
import moon from '../../assets/images/block/block-3/1.svg'
import pc from '../../assets/images/block/block-3/2.svg'
import sun from '../../assets/images/block/block-3/3.svg'
import cursor from '../../assets/images/block/block-3/cursor.svg'
import cross from '../../assets/images/block/block-3/cross.svg'
import dots from '../../assets/images/block/block-3/dots.svg'
import inBtn from '../../assets/images/block/block-3/in.svg'
import { motion as m } from "framer-motion"
import { BLOCK_ITEM_3 } from '../../library/constants'
import { Button2 } from '../Button2/Button2'
import { Button3 } from '../Button3/Button3'

const BlockItem3 = () => {
  return (
    <m.div
      className="absolute inset-0 w-full h-full px-[3%] pt-[13%]"
    >
      <div className="relative">
        <m.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          src={ item2 } alt="Block Item 2"
          className="absolute bottom-0 right-[9.8%] w-[24.4%]"
        />

        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="
            absolute top-[6%] right-[38%]
            flex items-center justify-center
            w-[4.566%] h-[7.76%] border border-[#604F45] rounded-full cursor-pointer transition-all
            duration-700 shadow-lg border-opacity-0 hover:border-opacity-100 z-40
          "
        >
          <img src={ cross } alt="Cross" />
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute flex flex-col top-[6%] right-[2.8%] w-[4.263%] h-[16.554%]"
        >
          <div className="flex items-center justify-center border border-[#4C413B] w-full h-full rounded-md transition-all duration-700 border-opacity-0 hover:border-opacity-100 cursor-pointer z-40 mb-2">
            <img src={ dots } alt="Dots" />
          </div>

          <div className="flex items-center justify-center border border-[#4C413B] w-full h-full rounded-md transition-all duration-700 border-opacity-0 hover:border-opacity-100 cursor-pointer z-40">
            <img src={ inBtn } alt="Dots" />
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-[10%] left-[6%] md:left-[13.2%] z-40"
        >
          <Button3>
            <p className="w-full text-[75%]">Sara</p>
          </Button3>
        </m.div>

        <m.div
          animate={{ x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: 'easeOut'}}
          className="absolute bottom-[21%] md:bottom-[17%] left-[21%] md:left-[25%] w-[6.4%]"
        >
          <m.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            src={ cursor } alt="cursor"
            className="w-full"
          />
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-[10%] right-[43%] z-40"
        >
          <Button2>
            <p className="w-full text-[75%]">
              Download CV
            </p>
          </Button2>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="
            absolute flex flex-col bottom-0 right-[2.8%] w-[5.5%] h-[24.67%] rounded-full border border-[#604F45] shadow-lg bg-gradient-to-b from-[#422F23] to-[#3C2618] p-[3px]
          "
        >
          <div
            className="
              flex items-center justify-center
              w-full h-full border border-[#604F45] rounded-full cursor-pointer transition-all duration-700 shadow-lg border-opacity-0 hover:border-opacity-100 z-40
            "
          >
            <img src={ moon } alt="Moon" />
          </div>
          
          <div
            className="
              flex items-center justify-center
              w-full h-full border border-[#604F45] rounded-full cursor-pointer transition-all duration-700 shadow-lg my-[3px] border-opacity-0 hover:border-opacity-100 z-40
            "
          >
            <img src={ pc } alt="PC" />
          </div>

          <div
            className="
              flex items-center justify-center
              w-full h-full border border-[#604F45] rounded-full cursor-pointer transition-all duration-700 shadow-lg border-opacity-0 hover:border-opacity-100 z-40
            "
          >
            <img src={ sun } alt="Sun" />
          </div>
        </m.div>

        <m.img
          { ...BLOCK_ITEM_3 }
          src={ item } alt="Block Item"
          className="w-full"
        />
      </div>
    </m.div>
  )
}

export { BlockItem3 }