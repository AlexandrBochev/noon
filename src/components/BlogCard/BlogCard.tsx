import { IBlogItem } from "../../library/types"
import bg from "../../assets/images/blog/blog-bg.jpg"
import { Button } from "../Button/Button"
import { MouseFollowLight } from "../mouse-follow-light"
import { Link } from "react-router-dom"

const BlogCard = (props: IBlogItem) => {
  return (
    <div
      className="
        min-h-115 md:min-h-140
        relative lg:p-7.5 rounded-[30px] overflow-hidden z-10 border border-transparent
        before:bg-gradient-to-bl before:from-[#4F4F4F] before:to-[#4F4F4F]/20 before:to-40%
        before:border-inherit before:border before:rounded-[30px]
        before:absolute before:inset-0 before:z-10 before:bg-origin-border
        before:[mask-composite:exclude] gradient
      "
    >
      <div><MouseFollowLight /></div>
      <img
        src={ bg } alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 p-5 w-full h-full flex flex-col z-40 justify-between">
        <div>
          <img
            src={ props.img } alt={ props.title }
            className="w-full h-auto object-cover rounded-[20px] mb-10 md:mb-7.5"
          />
          <Link to={`/blog/${ props.id }`}>
            <h2 className="text-[22px] md:text-[32px] hover:scale-[102%] active:scale-100 transition-all duration-300">
              { props.title }
            </h2>
          </Link>
        </div>

        <div className="w-full flex items-end justify-between z-40">
          <p className="text-sm md:text-base opacity-70">{ props.date }</p>
          <Link to={`/blog/${ props.id }`}>
            <Button>{ props.btn }</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export { BlogCard }