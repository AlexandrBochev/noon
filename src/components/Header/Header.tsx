import { motion as m } from "framer-motion"
import logo from '../../assets/images/logo-noon.png'
import burger from '../../assets/images/burger/burger.svg'
import cross from '../../assets/images/burger/cross.svg'
import { navigation } from '../../data/data'
import { FONT_STYLES_SILVER } from '../../library/constants'
import { INavigation } from "../../library/types"
import { useState } from "react"
import { Button } from "../Button/Button"
import { scrollDownToSection } from "../../library/Functions"
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
    <div
      className={`
        fixed inset-0 w-full h-screen bg-black
        ${isMenuOpen ? 'translate-y-0 opacity-95' : 'translate-y-[-100%] opacity-0'}
        transition-all duration-700 z-20
      `}
    />
    <header className={`${isMenuOpen ? 'fixed h-screen' : 'absolute'} left-[50%] translate-x-[-50%] container flex items-start justify-between py-6.5 z-50 mx-auto`}>
      <a href="/" className="flex items-center mt-2 z-50">
        <m.img
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", }}
          src={ logo }
          alt="Logo"
          className="mr-2"
        />
        <m.span
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", }}
          className="text-2xl leading-none mt-1.5"
        >
          Noon
        </m.span>
      </a>

      <nav
        className={`
          absolute left-[50%] translate-x-[-50%] transition-all duration-700 z-20
          ${isMenuOpen ? 'translate-y-[28vh] opacity-100' : 'translate-y-[-100%] opacity-0'}
          lg:translate-y-[50%] lg:opacity-100
        `}
      >
        <ul className="flex flex-col lg:flex-row">
          {navigation.map((item: INavigation) =>
            <m.li
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.1, ease: "easeInOut",  }}
              key={ item.id }
              className="text-4xl lg:text-base text-center mb-6 lg:mb-0 lg:mr-10 last:m-0"
              onClick={ () => setIsMenuOpen(false) }
            >
              <Link to={ item.link }
                className={`${FONT_STYLES_SILVER} hover:text-white cursor-pointer transition-all duration-500`}
                onClick={ () => scrollDownToSection(item.title) }
              >
                { item.title }
              </Link>
            </m.li>
          )}
        </ul>
      </nav>

      <m.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut", }}
        className="absolute lg:static bottom-[10vh] left-0 flex items-center justify-center w-full lg:w-auto"
      >
        <div
          className={`
            ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-154 opacity-0'}
            flex items-center lg:translate-y-0 lg:opacity-100 transition-all duration-700 z-20
          `}
        >
          <Button onClick={ () => setIsMenuOpen(false) }>Enter Code</Button>
          <div className="w-5" />
          <button
            className="relative py-2 px-4 lg:py-3 lg:px-5.5 border rounded-full border-transparent group bg-[#131222] overflow-hidden"
            onClick={ () => setIsMenuOpen(false) }
          >
            <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-black/0 transition-all duration-1000" />
            <p className={`${FONT_STYLES_SILVER} text-sm lg:text-base`}>
              Login
            </p>
          </button>
        </div>
      </m.div>

      <m.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut", }}
        className="lg:hidden"
      >
        <div className={`flex transition-all duration-500 mt-2 ${ isMenuOpen ? 'opacity-0 scale-0 -translate-y-12' : 'opacity-100 scale-100 translate-y-0' }`}>
          <Button onClick={ () => setIsMenuOpen(true) }>
            <img src={ burger } alt="Cross" className="mr-2 -mt-0.5" />
            Menu
          </Button>
        </div>

        <div className={`flex transition-all duration-500 mt-2 ${ isMenuOpen ? 'opacity-100 scale-100 -translate-y-12' : 'opacity-0 scale-0 translate-y-0' }`}>
          <Button onClick={ () => setIsMenuOpen(false) }>
            <img src={ cross } alt="Cross" className="mr-2 -mt-0.5" />
            Close
          </Button>
        </div>
      </m.div>

      <m.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1}}
        transition={{ duration: 1, ease: "easeInOut", }}
        className="absolute top-25 lg:bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/40 to-white/0 z-10"
      />
    </header>
    </>
  )
}

export { Header }