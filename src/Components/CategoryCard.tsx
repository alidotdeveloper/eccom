import React from "react";

interface data {
  image?: string;
  Title: string;
  Price?: number;
}

const CategoryCard: React.FC<data> = (props) => {
  return (
    <>
      <div className="p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
            className="h-60 rounded w-full object-contain object-center mb-6"
            src={props.image || "https://dummyimage.com/720x400"}
            alt="image"
          />
          <h3 className="tracking-widest text-black text-[16px] font-medium title-font mb-4">
            {props.Title}
          </h3>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
