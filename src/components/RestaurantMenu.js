import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurentCatagoriy";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categories", categories);

  return (
    <div className="text-center bg-zinc-100 -mt-10">
      <h1 className="font-extrabold  text-2xl my-10 py-4">{name}</h1>
      <h2 className=" text-lg font-bold mb-4 -mt-2  ">
        {cuisines.join(", ")}
        <span className="font-bold"> - {costForTwoMessage}</span>
      </h2>
      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItem={index === showIndex}
            setShowIndex={() =>
              setShowIndex(showIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
