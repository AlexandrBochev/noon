import { FONT_STYLES_SILVER } from "../../library/constants"
import { Arrow } from "../Icons/Arrow"
import { motion as m } from "framer-motion"
import bg from '../../assets/images/btn/stars.svg'

interface ButtonProps {
  children: React.ReactNode
  arrow?: boolean
  onClick?: () => void
}

const btnMotion = {
  animate: {
    background: [
    'linear-gradient(0deg, #010010, #010010, #010010, #010010, rgb(1 0 16 / 0.6)) padding-box, linear-gradient(0deg, rgb(255 255 255 / 0.24), rgb(255 255 255 / 0.24), rgb(255 255 255 / 0.24), rgb(255 255 255 / 0.24), rgb(255 255 255 / 0.9)) border-box',
    'linear-gradient(360deg, #010010, #010010, #010010, #010010, rgb(1 0 16 / 0.6)) padding-box, linear-gradient(360deg, rgb(255 255 255 / 0.24), rgb(255 255 255 / 0.24), rgb(255 255 255 / 0.24), rgb(255 255 255 / 0.24), rgb(255 255 255 / 0.9)) border-box',
    ],
  },
  transition: { repeat: Infinity, duration: 4 },
}

const Button = ({ children, arrow, onClick }: ButtonProps) => {
  return (
    <m.button
        { ...btnMotion }
        className="relative py-2 px-4 lg:py-3 lg:px-5.5 border rounded-full border-transparent overflow-hidden"
        onClick={ onClick }
      >
        <img src={ bg } alt="Background" className="absolute inset-0 -z-10" />
        <div className={`flex items-center text-sm lg:text-base text-nowrap hover:text-white transition-all duration-500 ${FONT_STYLES_SILVER}`}>
            { children }
            { arrow && <Arrow /> }
        </div>
      </m.button>
  )
}

export { Button }