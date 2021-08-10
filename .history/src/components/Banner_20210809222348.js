import { Carousel } from 'react-responsive-carousel'
//img loading lazy means that doesnt slows down the app
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
         <img loading="lazy" src="https://links.papareact.com/gil" alt="" />
      </div>
      <div>
         <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
      </div>
      <div>
         <img loading="lazy" src="https://links.papareact.com/gil" alt="" />
      </div>
      <div>
         <img loading="lazy" src="https://links.papareact.com/gil" alt="" />
      </div>
      </Carousel>


  </div>

)};

export default Banner;
