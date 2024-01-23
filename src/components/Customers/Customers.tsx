import { customersArticle, titleItems } from "../../data/data"
import { Title } from "../Title/Title"
import { motion as m } from "framer-motion"
import { Player } from "@lottiefiles/react-lottie-player"
import lottielineCustomers from '../../library/lottie/lottie line Customers 2.json'
import { MouseFollowLight } from "../mouse-follow-light"

const Customers = () => {
  return (
    <section className="container mb-18 lg:mb-20 mt-25 lg:mt-30 mx-auto Customers" id="Customers">
      <div className="w-full max-w-67 2xl:max-w-105 mb-9 lg:mb-14 mx-auto">
        <Title props={ titleItems[6] } />
      </div>

      <div
        className="
          relative w-full h-full flex flex-col items-center justify-center px-4 pt-32 pb-24 overflow-hidden
          border border-transparent rounded-[1.25rem] lg:rounded-[1.875rem]
          before:bg-gradient-to-tr before:from-[#4F4F4F] before:via-[#4F4F4F]/20 before:to-[#4F4F4F]
          before:border-inherit before:border before:rounded-[1.25rem] before:lg:rounded-[1.875rem]
          before:absolute before:inset-0 before:z-10 before:bg-origin-border before:[mask-composite:exclude] gradient
        "
      >
        <div><MouseFollowLight /></div>
        <m.div
          initial={{ opacity: 0.1, }}
          whileInView={{ opacity: 1, }}
          transition={{ delay: 0.8, duration: 1.8 }}
        >
          <Player
            autoplay
            loop
            src={lottielineCustomers}
            className="absolute inset-0 w-full h-full -z-10 object-cover lottie"
          />
        </m.div>

        <div className="max-w-[43.75rem] flex flex-col items-center text-center text-lg lg:text-[1.375rem] text-white z-50">
          <p className="mb-6.5">
            {customersArticle.map((word, i) =>
              <m.span
                key={i}
                initial={{ opacity: 0.1, }}
                whileInView={{ opacity: 1, }}
                transition={{ delay: i * 0.02, duration: 0.6, ease: 'easeInOut' }}
                className="inline-block mr-1 xl:mr-2"
              >
                { word }
              </m.span>
            )}
          </p>

          <m.p
            initial={{ opacity: 0, y: 20, }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeInOut' }}
            className="font-bold mb-2"
          >
            Donovan Chang
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 20, }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ delay: 1.4, duration: 0.8, ease: 'easeInOut' }}
            className="text-sm lg:text-lg text-[#54565B] max-w-52 lg:max-w-none"
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </m.p>
        </div>
      </div>
    </section>
  )
}

export { Customers }