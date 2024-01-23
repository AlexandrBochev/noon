import { motion as m } from "framer-motion"
import logo from '../../assets/images/logo-noon.png'

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center pt-57.5 lg:pt-85 pb-12.5 lg:pb-35 mx-auto z-40 overflow-hidden">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4,duration: 1, ease: "easeInOut", }}
        className="container w-full flex justify-around text-xs text-white font-light mb-15 lg:hidden z-40"
      >
        <a href="#">Blog</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
      </m.div>

      <div className="relative container max-w-256 flex items-center justify-between mb-3 lg:mb-6.5 z-40">
        <a href="/" className="flex items-center">
          <m.img
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", }}
            src={ logo }
            alt="Logo"
            className="w-3 h-3 lg:w-5 lg:h-5 mr-0.5 lg:mr-1"
          />
          <m.span
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", }}
            className="text-xs lg:text-sm leading-none mt-px"
          >
              Noon
          </m.span>
        </a>
        <m.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 ,duration: 1, ease: "easeInOut", }}
          href="mailto:team@noon.ai"
          className="lg:absolute lg:left-[50%] lg:translate-x-[-50%] text-[0.625rem] lg:text-sm text-white font-light"
        >
          team@noon.ai
        </m.a>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeInOut", }}
          className="hidden lg:block text-sm text-white font-light"
        >
          <a href="#" className="mr-7.5">Blog</a>
          <a href="#" className="mr-7.5">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </m.div>
      </div>

      <m.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1}}
        transition={{ duration: 1, ease: "easeInOut", }}
        className="container max-w-256 h-px bg-gradient-to-r from-white/0 via-white/40 to-white/0 mb-3 lg:mb-4 z-10"
      />

      <m.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 ,duration: 1, ease: "easeInOut", }}
        className="container max-w-256 text-center lg:text-left text-[0.625rem] lg:text-sm text-white/50 font-light"
      >
        All rights reserved | Portal 2023
      </m.p>

      <m.div
        initial={{ opacity: 0.1, }}
        whileInView={{ opacity: 1, }}
        transition={{ delay: 0.2 ,duration: 1.4, ease: "easeInOut", }}
        className="
          absolute top-30 lg:top-35 left-[50%] translate-x-[-50%] w-300 h-300
          lg:w-485 lg:h-485 rounded-full border border-[#FE7B1E] shadow-orange
        "
      />
    </footer>
  )
}

export { Footer }