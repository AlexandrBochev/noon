import { motion as m } from "framer-motion"
import { itemsBlock2 } from "../../data/data"
import { BLOCK_ITEM_2 } from "../../library/constants"

const BlockItem2 = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-end w-full h-full pl-[8%] pr-[10%]">
      {itemsBlock2.map(item =>
        <m.div
          { ...BLOCK_ITEM_2 }
          transition={{ delay: (1 + item.id) * 0.2, duration: 0.8, ease: "easeInOut" }}
          key={ item.id }
          className={`flex mb-[2.4%] w-full ${item.id % 2 === 0 ? 'justify-start' : 'justify-end'} z-40`}
        >
          <img
            src={ item.img } alt="Block Item 2"
            className="max-w-[62%] cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out"
          />
      </m.div>
      )}
    </div>
  )
}

export { BlockItem2 }