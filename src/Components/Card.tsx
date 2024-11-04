import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Products from "./Products";
import CategoryCard from "./CategoryCard";

interface data {
  subHead: String;
  Heading: String;
  Products?: Array<any>;
  Categories?: Array<any>;
  name?: String;
  rows?: number;
  cols?: number;
}

const Card: React.FC<data> = (props) => {
  function SampleNextArrow(props: {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: props.cols || 3,
    slidesToScroll: props.cols || 3,
    rows: props.rows || 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: props.cols || 3,
          slidesToScroll: props.cols || 3,
          rows: props.rows || 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-16 py-8 mx-auto">
        <div className="flex flex-col w-full mb-8">
          <div className="lg:w-1/2 w-full mb-6 flex items-center">
            <div className="h-12 w-6 bg-[#DB4444] rounded"></div>
            <h1 className="sm:text-xl text-[12px] font-bold title-font mb-2 text-[#DB4444] mx-2 my-3 text-center">
              {props.subHead}
            </h1>
          </div>
          <h1 className="text-3xl text-black my-4">{props.Heading}</h1>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {props.Products &&
              props.Products.map((product, index) => (
                <Products
                  key={index}
                  image={product.image}
                  Title={product.title}
                  Price={product.price}
                />
              ))}
            {props.Categories &&
              props.Categories.map((category, index) => (
                <CategoryCard key={index} Title={category} />
              ))}
          </Slider>
        </div>
        <div className="flex justify-center pt-2">
          <button className="bg-[#DB4444] px-12 py-4 text-white rounded">
            View All {props.name}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card;
