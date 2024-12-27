import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilteredRestaurent(restaurants);
    setListOfRestaurent(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Please check your internet</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (listOfRestaurent.length === 0) <Shimmer />;
  return (
    <div className=" bg-zinc-100 pt-1 h-auto w-auto pl-2">
      <div className="search p-4 mt-4 flex">
        <div className="mx-4">
          <input
            type="text"
            value={searchText}
            className="border border-black rounded-2xl h-8"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="bg-black rounded-2xl text-white border border-blue-500 p-1 ml-2"
            onClick={() => {
              const filteredList = listOfRestaurent.filter((res) =>
                res.info.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filteredList); // Update filtered list
            }}
          >
            Search
          </button>
        </div>

        <button
          className="bg-black rounded-2xl text-white border border-blue-500 p-1 "
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) =>
                res.info.avgRating &&
                !NaN(res.info.avgRating) &&
                Number(res.info.avgRating) > 4.1
            );
            setFilteredRestaurent(filteredList);
          }}
        >
          Top Rated Restaurent
        </button>
        <div>
          <label className=" ml-8">User Name: </label>
          <input
            className="border border-black ml-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurent.map((restaurent) => (
          <Link
            to={"/restaurants/" + restaurent?.info?.id}
            key={restaurent?.info?.id}
          >
            {restaurent?.info?.aggregatedDiscountInfoV3 ? (
              <RestaurantCardPromoted resData={restaurent} />
            ) : (
              <RestaurantCard resData={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
