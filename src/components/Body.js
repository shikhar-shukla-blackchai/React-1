import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState(resList);
  return (
    <div className="body">
      <div className="search p-4 mt-4">
        <button
          className="bg-gray-300 rounded-2xl border border-blue-500 p-1"
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurent(filteredList);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {listOfRestaurent.map((restaurent) => (
          <RestaurantCard key={restaurent?.info?.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
