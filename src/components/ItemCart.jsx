import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
  totalPrice,
} from "../redux/slices/CartSlice";

const ItemCart = ({ id, img, name, price, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center gap-2 shadow-lg rounded-lg p-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id }));
        }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h5>{name}</h5>
        <div className="flex justify-between">
          <span className="flex items-center text-green-500">
            <FaDollarSign /> {price}
          </span>
          <div className="flex items-center gap-2 absolute right-7">
            <BsPlusLg
              onClick={() => {
                dispatch(incrementQty({ id }));
                //dispatch(totalPrice({ id }));
              }}
              className="font-bold border-2 border-gray-800 text-gray-800 cursor-pointer hover:text-white hover:bg-green-500 rounded-md transition-all ease-linear"
            />
            <span className="">{qty}</span>
            <FaMinus
              onClick={() => {
                if(qty > 1){
                  dispatch(decrementQty({ id }));
                }else{
                  qty = 1
                }
                //dispatch(totalPrice({ id }));
              }}
              className="text-xl border-2 border-gray-800 text-gray-800 cursor-pointer hover:text-white hover:bg-green-500 rounded-md transition-all ease-linear"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
