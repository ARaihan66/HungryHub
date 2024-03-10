import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import ItemCart from "./ItemCart";

const Cart = () => {
  return (
    <div className="fixed right-0 top-0 w-full md:w-[20vw] h-full p-4 bg-white">
      <div className="flex justify-between my-3 mx-2">
        <span className="text-xl font-bold">My Order</span>
        <AiOutlineClose className="border-2 border-gray-600 text-gray-600 font-bold p-2 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
      </div>
      <ItemCart />
      <ItemCart />
      <ItemCart />
      <div className="absolute bottom-0 mb-12">
        <h3 className="text-semibold text-gray-800">Items:</h3>
        <h3 className="font-semibold text-gray-800">Total Amount:</h3>
        <hr />
        <button className="font-bold text-white bg-green-500 py-2 px-3 rounded-lg w-[90vw] md:w-[20vw]">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
