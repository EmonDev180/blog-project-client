import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";







const Banner = ({img}) => {
  return (

    <Carousel>
      <div>
        <img src={img} />
        <p className="legend">Legend 1</p>
      </div>
   

    </Carousel>
  );
};

export default Banner;