import { FONT_STYLES_SILVER } from "../../library/constants"
import { Arrow } from "../Icons/Arrow"
import { motion as m } from "framer-motion"

interface ButtonProps {
  children: React.ReactNode
  arrow?: boolean
  onClick?: () => void
}

const btnMotion = {
  initial: {
    background: 'linear-gradient(#010010, #010010) padding-box, linear-gradient(90deg, rgb(255 255 255 / 0.3), rgb(255 255 255 / 0.3), white) border-box',
  },
  whileInView: {
    background: 'linear-gradient(#010010, #010010) padding-box, linear-gradient(450deg, rgb(255 255 255 / 0.3), rgb(255 255 255 / 0.3), white) border-box',
  },
  transition: { delay: 0.8, duration: 1.2 },
}

const Button = ({ children, arrow, onClick }: ButtonProps) => {
  return (
    <m.button
        { ...btnMotion }
        className="h-12 px-5.5 border rounded-full border-transparent"
        onClick={ onClick }
      >
        <div className={`flex items-center text-nowrap hover:text-white transition-all duration-500 ${FONT_STYLES_SILVER}`}>
            { children }
            { arrow && <Arrow /> }
        </div>
      </m.button>
  )
}

export { Button }