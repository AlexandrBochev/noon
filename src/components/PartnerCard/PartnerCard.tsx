import { IPartner } from "../../library/types"
import partnersBG from "../../assets/images/partners/partners-bg.png"

const PartnerCard = ({ props }: { props: IPartner }) => {
  const { logo, name, description } = props

  return (
    <div className="relative w-82.5 h-52 flex flex-col items-center justify-center p-8 rounded-[1.25rem] overflow-hidden">
      <img src={ partnersBG } alt="Background" className="absolute top-0 left-0 w-full h-full -z-10" />
      <img src={ logo } alt="Logo" />
      <p className="text-[1.375rem] mt-5 mb-4">{ name }</p>
      <p className="text-center font-light text-[#54565B]">{ description }</p>
    </div>
  )
}

export { PartnerCard }