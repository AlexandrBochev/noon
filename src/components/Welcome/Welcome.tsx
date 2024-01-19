import { titleItems } from "../../data/data"
import { Title } from "../Title/Title"
import welcomeBg from "../../assets/images/welcome/welcome-bg.png"
import { motion as m } from "framer-motion"
import { Player } from "@lottiefiles/react-lottie-player"
import lottieGlowline from '../../library/lottie/lottie Glow line 1.json'

const Welcome = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-24 lg:pb-[13rem] Service" id="Service">
      <Player
          autoplay
          loop
          src={lottieGlowline}
          className="absolute -bottom-[9rem] md:-bottom-[22rem] lg:-bottom-[30rem] xl:-bottom-[38rem] left-[50%] translate-x-[-50%] w-[160vw] h-auto object-cover -z-20"
        />

      <m.img
        initial={{ opacity: 0.1, }}
        whileInView={{ opacity: 1, }}
        transition={{ delay: 1, duration: 1 }}
        src={ welcomeBg } alt="Background"
        className="absolute bottom-12 left-[50%] translate-x-[-50%] w-full h-auto object-cover -z-10"
      />

      <div className="container max-w-[790px] mx-auto">
        <Title props={ titleItems[1] } />
      </div>
    </section>
  )
}

export { Welcome }