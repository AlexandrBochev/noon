import { FONT_STYLES_SILVER } from "../../library/constants"
import { Arrow } from "../Icons/Arrow"
import { motion as m } from "framer-motion"
import bg from '../../assets/images/stars.svg'

interface ButtonProps {
  children: React.ReactNode
  arrow?: boolean
  onClick?: () => void
}

const btnMotion = {
  animate: {
    background: [
    'linear-gradient(rgb(0 0 0 / 0.8), rgb(0 0 0 / 0.8)) padding-box, linear-gradient(0deg, rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 1)) border-box',
    'linear-gradient(rgb(0 0 0 / 0.8), rgb(0 0 0 / 0.8)) padding-box, linear-gradient(180deg, rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 1)) border-box',
    'linear-gradient(rgb(0 0 0 / 0.8), rgb(0 0 0 / 0.8)) padding-box, linear-gradient(360deg, rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 1)) border-box',
    ],
  },
  transition: { repeat: Infinity, duration: 4 },
}

const bgMotion = {
  animate: {
    background: [
      'linear-gradient(0deg, rgb(37 26 18 / 1), rgb(37 26 18 / 1), rgb(37 26 18 / 1), rgb(37 26 18 / 0))',
      'linear-gradient(180deg, rgb(37 26 18 / 1), rgb(37 26 18 / 1), rgb(37 26 18 / 1), rgb(37 26 18 / 0))',
      'linear-gradient(360deg, rgb(37 26 18 / 1), rgb(37 26 18 / 1), rgb(37 26 18 / 1), rgb(37 26 18 / 0))',
    ],
  },
  transition: { repeat: Infinity, duration: 4 },
}

const Button2 = ({ children, arrow, onClick }: ButtonProps) => {
  return (
    <m.button
      { ...btnMotion }
      className="relative px-[8%] md:px-[17.7%] md:py-[5.32%] border rounded-full border-transparent group z-0"
      onClick={ onClick }
    >
      <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden -z-10" >
        <img src={ bg } alt="bg" className="w-full h-full object-cover" />
        <m.div { ...bgMotion} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-black/0 transition-all duration-1000" />
      </div>
      <div className={`flex items-center text-sm lg:text-base text-nowrap z-20 ${FONT_STYLES_SILVER}`}>
          { children }
          { arrow && <Arrow /> }
      </div>
    </m.button>
  )
}

export { Button2 }