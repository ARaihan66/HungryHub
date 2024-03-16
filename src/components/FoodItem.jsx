import React from "react";
import FoodItemCard from "./FoodItemCard";
import FoodData from "../data/FoodApi";
import toast, { Toaster } from "react-hot-toast";

const FoodItem = () => {
  const handleToast = (name) => toast.success(`Added ${name} to the cart`);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap justify-center gap-12 my-7">
        {FoodData.map((item) => {
          const { id, name, price, desc, rating, img } = item;
          return (
            <FoodItemCard
              key={item.id}
              id={id}
              name={name}
              price={price}
              desc={desc}
              rating={rating}
              img={img}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodItem;
