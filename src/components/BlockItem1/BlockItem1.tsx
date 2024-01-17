import item1 from '../../assets/images/block/block-1/Item-1.png'
import { motion as m } from "framer-motion"
import { BLOCK_ITEM_1 } from '../../library/constants'

const BlockItem1 = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <m.img
        { ...BLOCK_ITEM_1 }
        src={ item1 } alt="Block Item 1"
        className="absolute top-[9%] right-0 w-[96%]" />
    </div>
  )
}

export { BlockItem1 }