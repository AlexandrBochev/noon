import { headCards } from "../../data/data"
import { CARDS } from "../../library/constants"
import { IHeadCard } from "../../library/types"
import { HeadCard } from "../HeadCard/HeadCard"
import SliderCards from "../SliderCards/SliderCards"
import { motion as m } from "framer-motion"

const HeadCards = () => {
  return (
    <m.section
      { ...CARDS }
      className="w-[112rem] mx-auto pt-36 overflow-hidden"
    >
      <SliderCards amount={ 4 }>
        {headCards.map((headCard: IHeadCard) =>
          <div key={ headCard.id } className="ml-6">
            <HeadCard headCard={headCard} />
          </div>
        )}
      </SliderCards>
    </m.section>
  )
}

export { HeadCards }