import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search p-4 mt-4 flex">
        <div className="mx-4">
          <input
            type="text"
            value={searchText}
            className="border border-black"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-black rounded-2xl text-white border border-blue-500 p-1 ml-2"
            onClick={() => {
              console.log(searchText);

              const filteredList = listOfRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurent(filteredList);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurent.map((restaurent) => (
          <RestaurantCard key={restaurent?.info?.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
