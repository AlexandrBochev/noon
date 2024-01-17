import { titleItems } from "../../data/data"
import { Title } from "../Title/Title"
import welcomeBg from "../../assets/images/welcome/welcome-bg.png"
import { motion as m } from "framer-motion"

const Welcome = () => {
  return (
    <section className="relative h-full pt-24 lg:pt-32 pb-24 lg:pb-[13rem] Service" id="Service">
      <m.img
        initial={{ opacity: 0.1, }}
        whileInView={{ opacity: 1, }}
        transition={{ delay: 1, duration: 1 }}
        src={ welcomeBg } alt="Background"
        className="absolute top-12 left-[50%] translate-x-[-50%] w-full h-full -z-10 object-cover"
      />

      <div className="container max-w-[790px] mx-auto">
        <Title props={ titleItems[1] } />
      </div>
    </section>
  )
}

export { Welcome }