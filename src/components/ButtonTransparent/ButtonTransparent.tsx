import { FONT_STYLES_SILVER } from "../../library/constants"
import { Arrow } from "../Icons/Arrow"
import { delay, motion as m } from "framer-motion"

interface ButtonProps {
  children: React.ReactNode
  arrow?: boolean
  onClick?: () => void
}

const btnMotion = {
  initial: {},
  whileInView: {},
  transition: { delay: 1, duration: 0.8, ease: "easeInOut" },
}

const ButtonTransparent = ({ children, arrow, onClick }: ButtonProps) => {
  return (
    <m.button
      { ...btnMotion }
      className="
        h-12 border-transparent rounded-full backdrop-blur-sm bg-[#000010]/30 px-5.5
        before:absolute before:inset-0 before:z-10
        before:bg-gradient-to-r before:from-white/30 before:via-white/30 before:to-white
        before:bg-origin-border before:border-inherit before:border
        before:rounded-full before:[mask-composite:exclude]
        before:transition-bg duration-500 ease-in-out
        gradient
      "
      onClick={ onClick }
    >
      <div className={`flex items-center text-nowrap ${FONT_STYLES_SILVER} hover:text-white transition-all duration-500`}>
          { children }
          { arrow && <Arrow /> }
      </div>
    </m.button>
  )
}

export { ButtonTransparent }