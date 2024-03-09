import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const FoodItemCard = ({ id, name, price, desc, rating, img }) => {
  return (
    <div className="font-bold w-[250px] p-5 m-5 bg-white flex flex-col rounded-lg">
      <img
        src={img}
        alt="Food-Item"
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="py-2 flex justify-between">
        <h2>{name}</h2>
        <span className="flex items-center text-green-500">
          <FaDollarSign /> {price}
        </span>
      </div>
      <p className="text-justify text-sm font-normal">{desc}</p>
      <div className="flex justify-between my-3">
        <span className="flex items-center gap-1">
          <AiFillStar className="text-yellow-400 w-[20px] h-[20px]" /> {rating}
        </span>
        <button className="p-2 text-white bg-green-500 hover:bg-green-600 rounded-xl">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItemCard;
