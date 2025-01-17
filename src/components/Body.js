import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const EDUCORS_URL = "https://educorssolver.host/api/getData";
      const targetUrl =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"; // Replace with your target URL
      const apiKey = process.env.REACT_APP_KEY_CORS; // Replace with your actual API key
      const data = await fetch(
        `${EDUCORS_URL}?ApiKey=${apiKey}&Target=${encodeURIComponent(
          targetUrl
        )}`
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setFilteredRestaurants(restaurants);
      setListOfRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="bg-gray-100 p-4 text-center">
        <h1>Please check your internet connection.</h1>
      </div>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-100 p-4 ">
      <div className="search flex justify-between items-center mb-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Restaurants"
            className="w-60 rounded-l-md pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <button
            className="absolute px-2 h-[2.6rem] bg-orange-500 text-white rounded-r-md hover:bg-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-orange-500 text-white rounded-md py-2 px-4 hover:bg-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating && Number(res.info.avgRating) > 4.1
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
            className="rounded-md overflow-hidden shadow-sm"
          >
            {restaurant?.info?.aggregatedDiscountInfoV3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <label className="text-sm mr-2">User Name: </label>
        <input
          type="text"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
          className="rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>
    </div>
  );
};

export default Body;
