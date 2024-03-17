import React from "react";
import FoodItemCard from "./FoodItemCard";
import FoodData from "../data/FoodApi";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const category = useSelector((state) => state.category.category);

  const handleToast = (name) => toast.success(`Added ${name} to the cart`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap justify-center gap-12 my-7">
        {FoodData.filter((food) => {
          if (category === "All") {
            return true;
          } else {
            return category === food.category;
          }
        }).map((food) => {
          const { id, name, price, desc, rating, img } = food; // Destructure food object
          return (
            <FoodItemCard
              key={id}
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
