import { Carousel } from 'react-responsive-carousel'

const Banner = () => {
  return (
  <div className="relative">
      <Carousel
         autoPlay
         infiniteLoop
         showStatus={false}
         showIndicators={false}
         show
      >

      </Carousel>


  </div>

)};

export default Banner;
