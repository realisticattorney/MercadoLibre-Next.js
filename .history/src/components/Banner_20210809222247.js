import { Carousel } from 'react-responsive-carousel'

const Banner = () => {
  return (
  <div className="relative">
      <Carousel
         autoPlay
         infiniteLoop
         showStatus={false}
         showIndicators={false}
         showThumbs={false}
         interval={5000}
      >
      <div>
         <img src="https://" alt="" />
      </div>
      </Carousel>


  </div>

)};

export default Banner;
