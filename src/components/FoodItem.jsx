import React from "react";
import FoodItemCard from "./FoodItemCard";
import FoodData from "../data/FoodApi";

const FoodItem = () => {
  return (
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
          />
        );
      })}
    </div>
  );
};

export default FoodItem;
