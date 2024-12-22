import Shimmer from "./Shimmer";
import { MENU_IP } from "../utils/Constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(MENU_IP + resId);
    const json = await data.json();

    setResInfo(json);
    console.log(json);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  let { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap
    ?.REGULAR?.cards[2]?.card?.card
    ? resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card
    : resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.categories[0];

  return (
    <div className="p-4 m-4">
      <h1 className="font-bold text-2xl ">{name}</h1>
      <h2 className="p-1 ">
        - {cuisines.join(", ")}
        <span className="font-semibold"> - {costForTwoMessage}</span>{" "}
      </h2>
      <div>
        <h2 className="font-bold text-2xl py-2 ">Menu</h2>
        <ul className="">
          {itemCards.map((item) => {
            return (
              <li key={item.card.info.id}>
                - {item?.card?.info?.name}
                {" ₹"}
                <span className="font-semibold">
                  {item?.card?.info?.defaultPrice / 100 ||
                    item?.card?.info?.price / 100}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
