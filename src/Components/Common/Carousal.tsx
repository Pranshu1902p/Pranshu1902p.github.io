import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Carousal(props: { image: any[] }) {
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      stopOnHover={false}
    >
      {props.image.map((image: any) => (
        <div>
          <img className="rounded-lg" src={image} alt="" />
        </div>
      ))}
    </Carousel>
  );
}
