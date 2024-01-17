import item from '../../assets/images/block/block-3/item.png'
import { motion as m } from "framer-motion"
import { BLOCK_ITEM_3 } from '../../library/constants'

const BlockItem3 = () => {
  return (
    <m.div
      className="absolute inset-0 w-full h-full px-[3%] pt-[13%]"
    >
      <m.img
        { ...BLOCK_ITEM_3 }
        src={ item } alt="Block Item"
        className="w-full" />
    </m.div>
  )
}

export { BlockItem3 }