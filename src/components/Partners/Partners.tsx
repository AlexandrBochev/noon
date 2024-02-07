import { partners } from "../../data/data"
import { PartnerCard } from "../PartnerCard/PartnerCard"
import { motion as m } from "framer-motion"
import SliderCards from "../SliderCards/SliderCards"
import { IPartner } from "../../library/types"
import { CARDS } from "../../library/constants"
import { Button } from "../Button/Button"
import { Dots } from "../Dots/Dots"

const Partners = () => {
  return (
    <section className="pt-12 pb-12 lg:pt-20 lg:pb-9">
      <m.div
        { ...CARDS }
        className="w-[88rem] mb-10 mx-auto overflow-hidden"
      >
        <SliderCards amount={ 4 }>
          {partners.map((partner: IPartner) =>
            <div key={ partner.id } className="ml-5.5 z-50">
              <PartnerCard props={ partner } />
            </div>
          )}
        </SliderCards>
      </m.div>
      <Dots />
      <div className="container hidden lg:flex justify-center mx-auto">
        <Button arrow>View More</Button>
      </div>
    </section>
  )
}

export { Partners }