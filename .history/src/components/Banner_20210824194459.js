import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32  from-gray-100 bottom-0 z-20" />
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
          <Image loading="lazy" objectFit="contain" layout="fixed" height={300}  src="/images/slide-1.jpg" alt="" />
        </div>
        <div>
          <Image loading="lazy" objectFit="contain"  height={300} src="/images/slide-2.jpg" alt="" />
        </div>
        <div>
          <Image loading="lazy" objectFit="contain"  height={300} src="/images/slide-3.jpg" alt="" />
        </div>
        <div>
          <Image loading="lazy" objectFit="contain"  height={300} src="/images/slide-4.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
