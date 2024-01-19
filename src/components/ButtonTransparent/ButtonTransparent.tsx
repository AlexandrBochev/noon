import { FONT_STYLES_SILVER } from "../../library/constants"
import { Arrow } from "../Icons/Arrow"
import { motion as m } from "framer-motion"

interface ButtonProps {
  children: React.ReactNode
  arrow?: boolean
  onClick?: () => void
}

const ButtonTransparent = ({ children, arrow, onClick }: ButtonProps) => {
  return (
    <m.button
      // className="
      //   h-12 border-transparent rounded-full backdrop-blur-sm bg-[#000010]/30 px-5.5
      //   before:absolute before:inset-0 before:z-10
      //   before:bg-gradient-to-r before:from-white/30 before:via-white/30 before:to-white
      //   before:bg-origin-border before:border-inherit before:border
      //   before:rounded-full before:[mask-composite:exclude]
      //   before:transition-bg duration-500 ease-in-out
      //   gradient group overflow-hidden
      // "
      className="relative py-2 px-4 lg:py-3 lg:px-5.5 border border-white/24 rounded-full backdrop-blur-sm bg-[#000010]/30 group z-0"
      onClick={ onClick }
    >
      <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/20 to-black/0 transition-all duration-1000" />
      <div
        className={`
          flex items-center text-nowrap ${FONT_STYLES_SILVER}
          text-sm lg:text-base text-nowrap
        `}
      >
          { children }
          { arrow && <Arrow /> }
      </div>
    </m.button>
  )
}

export { ButtonTransparent }