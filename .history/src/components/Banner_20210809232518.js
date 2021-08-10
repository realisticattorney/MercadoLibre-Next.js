import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
  return (
  <div className="relative">
  <div className="absolute w-full" />
      <Carousel
         autoPlay
         infiniteLoop
         showStatus={false}
         showIndicators={false}
         showThumbs={false}
         interval={5000}
      >
      <div>
      {/* img loading lazy means that doesnt slows down the app*/}
         <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
      </div>
      <div>
         <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
      </div>
      <div>
         <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
      </div>
      </Carousel>


  </div>

)};

export default Banner;
