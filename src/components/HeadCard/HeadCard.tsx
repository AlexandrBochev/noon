import { IHeadCard } from "../../library/types";
import bg from "../../assets/images/women/women-bg.png";
import btnBg from "../../assets/images/btn/btn-bg.png";
import { MouseFollowLight } from "../mouse-follow-light";

const HeadCard = ({ headCard }: { headCard: IHeadCard }) => {
  const { name, position, img } = headCard;

  return (
    <div
      className="
        relative w-105 h-43 flex flex-col items-start justify-center rounded-[20px] overflow-hidden
        border border-transparent
        before:bg-gradient-to-b before:from-[#6B411F] before:to-[#6B411F]/20
        before:border-inherit before:border before:rounded-[20px]
        before:absolute before:inset-0 before:z-10 before:bg-origin-border before:[mask-composite:exclude] gradient
      "
    >
      <MouseFollowLight />
      <img
        src={bg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <img src={img} alt={name} className="absolute bottom-0 left-4" />

      <div
        className="
          relative flex flex-col items-center justify-center px-4 py-2 lg:py-2.5 ml-40 mb-5 text-sm lg:text-base overflow-hidden
          border border-transparent rounded-full z-50
          before:bg-gradient-to-r before:from-[#6A5735] before:via-[#4C4C4E] before:to-[#7F7F81]
          before:border-inherit before:border before:rounded-[1.25rem] before:lg:rounded-[1.875rem]
          before:absolute before:inset-0 before:z-10 before:bg-origin-border before:[mask-composite:exclude] gradient
        "
      >
        <img
          src={btnBg}
          alt="Background"
          className="absolute inset-0 w-full h-full rounded-full"
        />
        <p className="z-50">{position}</p>
      </div>

      <div className="ml-42 z-50">
        <p className="text-[1.375rem] mb-2">{name}</p>
        <p className="font-light text-[#54565B]">Head of Talent</p>
      </div>
    </div>
  );
};

export { HeadCard };
