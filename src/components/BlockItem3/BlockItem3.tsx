import item from '../../assets/images/block/block-3/item.png'
import item2 from '../../assets/images/block/block-3/item-2.png'
import moon from '../../assets/images/block/block-3/1.svg'
import pc from '../../assets/images/block/block-3/2.svg'
import sun from '../../assets/images/block/block-3/3.svg'
import cursor from '../../assets/images/block/block-3/cursor.svg'
import cross from '../../assets/images/block/block-3/cross.svg'
import dots from '../../assets/images/block/block-3/dots.svg'
import inBtn from '../../assets/images/block/block-3/in.svg'
import close from '../../assets/images/block/block-3/cross-2.svg'
import minus from '../../assets/images/block/block-3/minus.svg'
import open from '../../assets/images/block/block-3/open.svg'
import circle from '../../assets/images/block/block-3/circle.svg'
import circle2 from '../../assets/images/block/block-3/circle-2.svg'
import plus from '../../assets/images/block/block-3/plus.svg'
import sobaka from '../../assets/images/block/block-3/sobaka.svg'
import calculator from '../../assets/images/block/block-3/calculator.svg'
import phone from '../../assets/images/block/block-3/phone.svg'
import light from '../../assets/images/block/block-3/light.svg'
import btn from '../../assets/images/block/block-3/btn.png'
import btn2 from '../../assets/images/block/block-3/btn2.png'
import text1 from '../../assets/images/block/block-3/text-1.svg'
import text2 from '../../assets/images/block/block-3/text-2.svg'
import text3 from '../../assets/images/block/block-3/text-3.svg'
import { motion as m } from "framer-motion"
import { BLOCK_ITEM_3 } from '../../library/constants'
import { Button2 } from '../Button2/Button2'
import { Button3 } from '../Button3/Button3'
import background2 from "../../assets/images/block/block-3-2.png";

const BlockItem3 = () => {
  return (
    <>
    <img
      src={background2} alt="background2"
      className="absolute inset-0 w-full h-full md:hidden object-cover"
    />
    <m.div
      className="hidden md:block absolute inset-0 w-full h-full px-[3%] pt-[3%]"
    >

      <div className="w-full flex items-start justify-between mb-[3%]">
        <div className="flex">
          <img
            src={ close } alt="close"
            className="cursor-pointer hover:scale-125 active:scale-95 transition-all duration-300 z-40"
          />

          <img
            src={ minus } alt="minus"
            className="cursor-pointer hover:scale-125 active:scale-95 transition-all duration-300 z-40 mx-2"
          />

          <img
            src={ open } alt="open"
            className="cursor-pointer hover:scale-125 active:scale-95 transition-all duration-300 z-40"
          />
        </div>

        <div className="flex z-40">
          <button
            className="
              relative flex items-center justify-center md:w-10 md:h-10 border border-[#45413E] rounded-[10px] mr-2 group
              bg-gradient-to-b from-[#1F1B19] to-[#171310]/0
            "
          >
            <img src={ circle } alt="circle" className="group-hover:scale-125 group-active:scale-95 transition-all duration-300" />
          </button>

          <div className="flex items-center justify-center md:h-10 border border-[#45413E] rounded-[10px]">
            <button className="h-full rounded-l-[10px] bg-gradient-to-b from-[#1F1B19] to-[#171310]/0 px-3 group">
              <img src={ plus } alt="plus" className="group-hover:scale-125 group-active:scale-95 transition-all duration-300" />
            </button>
            <div className="w-0.5 h-full bg-gradient-to-b from-[#18130e] to-[#18130e]/30" />

            <button className="h-full bg-gradient-to-b from-[#1F1B19] to-[#171310]/0 px-3 group">
              <img src={ sobaka } alt="sobaka" className="group-hover:scale-125 group-active:scale-95 transition-all duration-300" />
            </button>
            <div className="w-0.5 h-full bg-gradient-to-b from-[#18130e] to-[#18130e]/30" />

            <button className="h-full rounded-r-[10px] bg-gradient-to-b from-[#1F1B19] to-[#171310]/0 px-3 group">
              <img src={ calculator } alt="calculator" className="group-hover:scale-125 group-active:scale-95 transition-all duration-300" />
            </button>
          </div>
        </div>

      </div>

      <m.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative"
      >
        <m.img
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1,  }}
          transition={{ delay: 1.8, duration: 1 }}
          src={ item2 } alt="Block Item 2"
          className="absolute bottom-0 right-[9.8%] w-[24.4%] hover:scale-[102%] active:scale-95 z-40 cursor-pointer transition-all
          duration-300"
        />

        <img
          src={text1} alt="Text"
          className="
            absolute top-[31%] left-[6.2%] w-[55%]
            hover:scale-105 active:scale-95
            cursor-pointer transition-all duration-300 z-40
          "
        />

        <img
          src={text2} alt="Text"
          className="
            absolute top-[41.4%] left-[6.2%] w-[55%]
            hover:scale-105 active:scale-95
            cursor-pointer transition-all duration-300 z-40
          "
        />

        <img
          src={text3} alt="Text"
          className="
            absolute top-[52.4%] left-[6.2%] w-[55%]
            hover:scale-105 active:scale-95
            cursor-pointer transition-all duration-300 z-40
          "
        />

        <div
          className="
            bg-gradient-to-b from-[#1F1B19] to-[#171310]/0
            absolute top-[6%] right-[38%] flex items-center justify-center
            w-[4.566%] h-[7.76%] border border-[#45413E] rounded-full cursor-pointer transition-all
            duration-300 shadow-lg hover:scale-125 active:scale-95 z-40
          "
        >
          <img src={ cross } alt="Cross" />
        </div>

        <div
          className="
            bg-gradient-to-b from-[#3D2D21] to-[#171310]/0
            absolute bottom-[3%] right-[12%] flex items-center justify-center
            w-[4.566%] h-[7.76%] border border-[#45413E] rounded-full cursor-pointer transition-all
            duration-300 shadow-lg hover:scale-125 active:scale-95 z-40
          "
        >
          <img src={ phone } alt="Phone" />
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute flex flex-col top-[6%] right-[2.8%] w-[4.263%] h-[16.554%]"
        >
          <div
            className="
              bg-gradient-to-b from-[#352B25] to-[#171310]/0
              flex items-center justify-center border border-[#45413E] w-full h-full rounded-md transition-all duration-300 shadow-lg hover:scale-125 active:scale-95 cursor-pointer z-40 mb-2
            "
          >
            <img src={ dots } alt="Dots" />
          </div>

          <div
            className="
              bg-gradient-to-b from-[#352B25] to-[#171310]/0
              flex items-center justify-center border border-[#45413E] w-full h-full rounded-md transition-all duration-300 shadow-lg hover:scale-125 active:scale-95 cursor-pointer z-40
            "
          >
            <img src={ inBtn } alt="In" />
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
          transition={{ delay: 1.4, duration: 0.8 }}
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
          transition={{ delay: 1.6, duration: 0.8 }}
          className="
            absolute flex flex-col bottom-0 right-[2.8%] w-[5.5%] h-[24.67%] rounded-full border border-[#625248] shadow-lg bg-gradient-to-b from-[#422F23] to-[#3C2618] p-[3px]
          "
        >
          <div
            className="
              flex items-center justify-center
              hover:bg-gradient-to-b from-[#453226] to-[#171310]/0
              w-full h-full border border-[#625248] rounded-full cursor-pointer transition-all duration-300 hover:shadow-lg border-opacity-0 hover:border-opacity-100 z-40 group
            "
          >
            <img src={ moon } alt="Moon" className="group-hover:scale-125 group-active:scale-95 transition-all duration-300" />
          </div>

          <div
            className="
              flex items-center justify-center
              hover:bg-gradient-to-b from-[#453226] to-[#171310]/0
              w-full h-full border border-[#625248] rounded-full cursor-pointer transition-all duration-300 hover:shadow-lg border-opacity-0 hover:border-opacity-100 z-40 group
            "
          >
            <img src={ pc } alt="PC" className="group-hover:scale-125 group-active:scale-95 transition-all duration-300" />
          </div>

          <div
            className="
              flex items-center justify-center
              hover:bg-gradient-to-b from-[#453226] to-[#171310]/0
              w-full h-full border border-[#625248] rounded-full cursor-pointer transition-all duration-300 hover:shadow-lg border-opacity-0 hover:border-opacity-100 z-40 group
            "
          >
            <img src={ sun } alt="Sun" className="group-hover:scale-125 group-active:scale-95 transition-all duration-300" />
          </div>
        </m.div>

        <m.img
          { ...BLOCK_ITEM_3 }
          src={ item } alt="Block Item"
          className="w-full"
        />

        <m.img
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1, }}
          transition={{ delay: 1.6, duration: 0.8 }}
          src={ btn2 } alt="Button"
          className="absolute w-[10.36%] cursor-pointer z-40 bottom-[-22%] left-0 hover:scale-110 active:scale-95 transition-all duration-300"
        />

        <m.div
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1, }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="
            absolute bottom-[-22.4%] left-[11.8%] w-[4.7%] h-[8%]
            bg-gradient-to-b from-[#352B25] to-[#171310]/0
            flex items-center justify-center border border-[#45413E] rounded-md transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 cursor-pointer z-40 mb-2 group
          "
        >
          <img src={ light } alt="light" className="group-hover:scale-110" />
        </m.div>

        <div className="absolute bottom-[31.4%] right-[38.6%] cursor-pointer z-40">
          <img src={ btn } alt="Button" className="w-[90%] md:w-full hover:scale-125 active:scale-95 z-40  transition-all duration-300" />
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-[-19.4%] right-[-2%] cursor-pointer z-40"
        >
          <img src={ circle2 } alt="Circle 2" className="w-[96%] hover:scale-125 active:scale-95 z-40  transition-all duration-300" />
        </m.div>
      </m.div>
    </m.div>
    </>
  )
}

export { BlockItem3 }