import { FONT_STYLES_GOLD, TITLE_MOTION } from "../../library/constants"
import { TitleProps } from "../../library/types"
import { Button } from "../Button/Button"
import { motion as m } from "framer-motion"

const Title = ({ props }: { props: TitleProps }) => {
  const { title, span1, span2, description, center, btn } = props

  return (
    <section className={`${ center ? 'text-center' : 'text-left' } text-balance text-[2.25rem] 2xl:text-[3.625rem] mx-auto z-50`}>
      <h2 className="mb-6">
        {title.map((word, i) =>
          <m.span
            key={i}
            { ...TITLE_MOTION }
            transition={{ delay: i * 0.1, duration: 0.8, ease: 'easeOut' }}
            className="inline-block mr-3 xl:mr-5"
          >
            { word }
          </m.span>
        )}

        {span1 && span1.map((word, i) =>
          <m.span
            key={i}
            { ...TITLE_MOTION }
            transition={{ delay: (title.length + i) * 0.1, duration: 0.8, ease: 'easeOut' }}
            className={`inline-block mr-3 xl:mr-5 ${FONT_STYLES_GOLD}`}
          >
            { word }
          </m.span>
        )}

        {span2 && span2.map((word, i) =>
          <m.span
            key={i}
            { ...TITLE_MOTION }
            transition={{ delay: ((span1 ?? []).length + title.length + i) * 0.1, duration: 0.8, ease: 'easeIn' }}
            className="inline-block mr-5"
          >
            { word }
          </m.span>
        )}
      </h2>

      <m.p
        { ...TITLE_MOTION }
        transition={{
          delay: ((span1 ?? []).length + (span2 ?? []).length + title.length) * 0.1, duration: 0.8, ease: 'easeOut'
        }}
        className={`text-[#54565B] text-lg max-w-[344px] mb-5 ${ center && 'mx-auto' }`}
      >
        { description }
      </m.p>
      
      { btn && <Button arrow><p className="text-base">{ btn }</p></Button> }
    </section>
  )
}

export { Title }