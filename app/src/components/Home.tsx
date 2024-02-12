import Carousel from "./Carousel"

import banner1 from "../assets/Banner.png"
import banner2 from "../assets/Banner2.png"
import banner3 from "../assets/Banner3.jpg"

const Home = () => {
  return (
    <div>
      <Carousel images={[banner1,banner2,banner3]}/>
    </div>
  )
}

export default Home