import React from "react";
import star from "../images/star.png";

interface data {
  image?: string;
  Title: string;
  Price?: number;
}

const Products: React.FC<data> = (props) => {
  return (
    <>
      <div className="p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="h-60 rounded w-full object-contain object-center mb-6 bg-transparent mix-blend-multiply">
            <img
              className="h-full w-full object-contain mix-blend-multiply "
              src={props.image}
              alt="content"
            />
          </div>
          <h3 className="tracking-widest text-black text-[16px] font-medium title-font mb-4">
            {props.Title}
          </h3>
          <h2 className="text-lg font-medium title-font mb-4 text-[#DB4444]">
            ${props.Price}
          </h2>
          <img src={star} className="w-20" />
        </div>
      </div>
    </>
  );
};

export default Products;
