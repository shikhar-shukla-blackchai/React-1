import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, sla } = resData?.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testId="resCard"
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <p className="text-gray-500 text-sm mb-1">{cuisines.join(", ")}</p>
        <div className="flex items-center mb-2">
          <svg
            className="w-5 h-5 text-orange-500 mr-2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.089A12.776 12.776 0 0 0 2.348 12.778h.049c1.397-6.162 5.707-10.78 11.344-11.344z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 14.82a12.776 12.776 0 0 1-11.344-11.343h.049c1.396 6.162 5.707 10.78 11.344 11.344z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 12.778a3.762 3.762 0 1 1-7.524 0z"
            />
          </svg>
          <span className="text-gray-500 text-sm">{avgRating} Stars</span>
        </div>
        <div className="flex items-center mb-1">
          <svg
            className="w-5 h-5 text-orange-500 mr-2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 18h.049c.592-1.5 1.595-3.038 2.893-4.558a11.96 11.96 0 0 0 0-4.555c-1.298 1.52-2.3 3.057-2.893 4.558V18z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h.049c.592-1.5 1.595-3.038 2.893-4.558a11.96 11.96 0 0 1 0-4.555c-1.298 1.52-2.3 3.057-2.893 4.558V12z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12h.049c.592-1.5 1.595-3.038 2.893-4.558a11.96 11.96 0 0 0 0-4.555c-1.298 1.52-2.3 3.057-2.893 4.558V12z"
            />
          </svg>
          <span className="text-gray-500 text-sm">{sla.deliveryTime} mins</span>
        </div>
        <p className="text-xs text-gray-400">Cost for Two: {costForTwo}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <RestaurantCard {...props} />
      {props?.resData?.info?.aggregatedDiscountInfoV3 && (
        <div className="absolute top-0 left-0 bg-orange-500 text-white px-2 py-1 rounded-tl-lg">
          {props?.resData?.info?.aggregatedDiscountInfoV3?.header}
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;
