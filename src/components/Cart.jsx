import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  return (
    <>
      {/*<div
        className={`fixed right-0 top-0 w-full md:w-[20vw] h-full p-4 bg-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }`}
      >*/}
      {activeCart && (
        <div className="fixed right-0 top-0 w-full md:w-[20vw] h-full p-4 bg-white z-50 overflow-y-scroll">
          <div className="flex justify-between my-3 mx-2">
            <span className="text-xl font-bold">My Order</span>
            <AiOutlineClose
              onClick={() => setActiveCart(!activeCart)}
              className="border-2 border-gray-600 text-gray-600 font-bold p-2 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
            />
          </div>

          {cartItems.map((food) => {
            const { id, img, name, price, qty } = food;
            return (
              <ItemCart
                key={id}
                id={id}
                img={img}
                name={name}
                price={price}
                qty={qty}
              />
            );
          })}

          <div className="absolute bottom-0 mb-12">
            <h3 className="text-semibold text-gray-800">Items:</h3>
            <h3 className="font-semibold text-gray-800">Total Amount:</h3>
            <hr />
            <button className="font-bold text-white bg-green-500 py-2 px-3 rounded-lg w-[90vw] md:w-[20vw]">
              Checkout
            </button>
          </div>
        </div>
      )}

      <TiShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className="text-3xl fixed rounded-full bottom-10 right-1 p-2 bg-orange-400 cursor-pointer"
      />
    </>
  );
};

export default Cart;
