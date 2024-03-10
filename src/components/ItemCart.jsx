import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ItemCart = () => {
  return (
    <div className="flex items-center gap-2 shadow-lg rounded-lg p-3">
      <MdDelete className="absolute right-7 text-gray-600" />
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        className="w-[50px] h-[50px]"
      />
      <div className="leading-5">
        <h2>Onion Pizza</h2>
        <div className="flex justify-between">
          <span className="flex items-center text-green-500">
            <FaDollarSign /> 120
          </span>
          <div className="flex items-center gap-2 absolute right-7">
            <BsPlusLg className="font-bold border-2 border-gray-800 text-gray-800 cursor-pointer hover:text-white hover:bg-green-500 rounded-md transition-all ease-linear" />
            <span className="">2</span>
            <FaMinus className="text-xl border-2 border-gray-800 text-gray-800 cursor-pointer hover:text-white hover:bg-green-500 rounded-md transition-all ease-linear" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
