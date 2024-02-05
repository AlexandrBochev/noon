import { Block } from "../../components/Block/Block"
import { Customers } from "../../components/Customers/Customers"
import { HeadCards } from "../../components/HeadCards/HeadCards"
import { Intro } from "../../components/Intro/Intro"
import { Meet } from "../../components/Meet/Meet"
import { Partners } from "../../components/Partners/Partners"
import { TickerLogos } from "../../components/TickerLogos/TickerLogos"
import { Welcome } from "../../components/Welcome/Welcome"
import { Workforce } from "../../components/Workforce/Workforce"
import block1 from "../../assets/images/block/block-1.png"
import block2 from "../../assets/images/block/block-2.png"
import block3 from "../../assets/images/block/block-3.png"

const Home = () => {
  return (
    <main>
      <Intro />
      <TickerLogos />
      <HeadCards />
      <Meet />
      <Welcome />
      <div>
        <Block titleIndex={2} img={block1} blockItems={1} changeOrder />
        <Block titleIndex={3} img={block2} blockItems={2} />
        <Block titleIndex={4} img={block3} blockItems={3} changeOrder />
      </div>
      <Partners />
      <Workforce />
      <Customers />
      <TickerLogos />
    </main>
  )
}

export { Home }