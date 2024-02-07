import { motion as m } from "framer-motion"

const trans = {
  transition : {
    duration: 8,
    repeat: Infinity,
  },
}

const Dots = () => {
  return (
    <div className="flex w-9 mt-5 justify-between mx-auto">
      <m.div
        animate={{
          width: ['18px', '18px', '18px', '18px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '18px'],
          backgroundColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#FFFFFF']
        }}
        { ...trans }
        className="h-[3px] animate-dot1 rounded-full"
      />

      <m.div
        animate={{
          width: ['3px', '3px', '3px', '3px', '18px', '18px', '18px', '18px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '3px'],
          backgroundColor: ['#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F']
        }}
        { ...trans }
        className="h-[3px] animate-dot1 rounded-full"
      />

      <m.div
        animate={{
          width: ['3px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '18px', '18px', '18px', '18px', '3px', '3px', '3px', '3px', '3px'],
          backgroundColor: ['#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F']
        }}
        { ...trans }
        className="h-[3px] animate-dot1 rounded-full"
      />

      <m.div
        animate={{
          width: ['3px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '3px', '18px', '18px', '18px', '18px', '3px'],
          backgroundColor: ['#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#7F7F7F', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#7F7F7F']
        }}
        { ...trans }
        className="h-[3px] animate-dot1 rounded-full"
      />
    </div>
  )
}

export { Dots }