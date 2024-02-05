import welcomeBg from "../../assets/images/welcome/welcome-bg.png"
import comet from "../../assets/images/welcome/comet.svg"
import comet2 from "../../assets/images/welcome/comet2.svg"
import { motion as m } from "framer-motion"
import { IBlogItem } from "../../library/types"
import { blogItems } from "../../data/data"

const BlogContentIntro = ({ id }: { id: number }) => {
  const blogItem = blogItems.find((item: IBlogItem) => item.id === id)

  return (
    <section className="relative pt-37 md:pt-67 pb-12.5 md:pb-20">
      <m.img
        initial={{ opacity: 0, x: 100, y: -200, }}
        whileInView={{ opacity: [0, 1, 0], x: -2000, y: 1500, }}
        transition={{ delay: 2, duration: 4 }}
        src={ comet } alt="Comet"
        className="absolute top-40 md:top-0 right-0 -z-50"
      />

      <m.img
        initial={{ opacity: 0, x: -100, y: -200, }}
        whileInView={{ opacity: [0, 1, 0], x: 2000, y: 300, }}
        transition={{ delay: 5, duration: 2 }}
        src={ comet2 } alt="Comet"
        className="absolute top-60 md:top-0 left-0 -z-50"
      />

      <m.img
        initial={{ opacity: 0.1, }}
        whileInView={{ opacity: 1, }}
        transition={{ delay: 1, duration: 1 }}
        src={ welcomeBg } alt="Background"
        className="absolute bottom-12 left-[50%] translate-x-[-50%] w-full h-auto object-cover -z-0"
      />

      <div className="container max-w-[1100px] mx-auto">
        <p className="text-center text-[#54565B] mb-5 md:mb-10">
          { blogItem?.date }
        </p>
        <h1 className="text-center text-[28px] lg:text-[58px]">
          { blogItem?.title }
        </h1>
      </div>
    </section>
  )
}

export { BlogContentIntro }