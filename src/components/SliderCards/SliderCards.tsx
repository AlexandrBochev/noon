import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import { SliderCardsProps } from "../../library/types"

const SliderCards = ({ children, amount }: SliderCardsProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: amount,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    touchThreshold: 50,
    // draggable:false,
    // touchMove: false,
  }

  return (
    <div>
      <Slider { ...settings }>
        { children }
      </Slider>
    </div>
  )
}

export default SliderCards