import { logos } from "../../data/data"
import { Ticker } from "../Ticker/Ticker"

const TickerLogos = () => {
  return (
    <section className="relative overflow-hidden mx-auto">
      <div className="absolute top-0 left-0 w-[30vw] h-full bg-gradient-to-r from-black to-black/0 z-10" />
      <div className="absolute top-0 right-0 w-[30vw] h-full bg-gradient-to-l from-black to-black/0 z-10" />
      <div className="flex w-full items-center bg-black">
        <Ticker>
          <div className="flex">
            { logos.map(logo =>
              <div key={logo.id} className="flex items-center justify-center w-[14rem] md:w-[19rem] px-[2rem] overflow-hidden">
                <img src={logo.img} alt="Logo" />
              </div>  
            )}
          </div>
        </Ticker>
      </div>
    </section>
  )
}

export { TickerLogos }