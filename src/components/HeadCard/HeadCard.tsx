import { IHeadCard } from "../../library/types"
import bg from "../../assets/images/women/women-bg.png"

const HeadCard = ({ props }: { props: IHeadCard }) => {
  const { name, btn, img } = props

  return (
    <div className="relative w-105 h-43 flex flex-col items-start justify-center rounded-[20px] overflow-hidden">
      <img src={ bg } alt="Background" className="absolute top-0 left-0 w-full h-full -z-10" />
      <img src={ img } alt={ name } className="absolute bottom-0 left-4" />
      <img src={ btn } alt="Button" className="ml-38 mb-5" />
      <div className="ml-42">
        <p className="text-[1.375rem] mb-2">{ name }</p>
        <p className="font-light text-[#54565B]">Head of Talent</p>
      </div>
    </div>
  )
}

export { HeadCard }