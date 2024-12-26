import { CDN_URL } from "../utils/Constants";
import UserContext from "../utils/UserContext";
import { use, useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, sla } = resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="res-card bg-zinc-100 m-4 ml-2 mb-4  w-[300] h-[475]  cursor-pointer rounded-xl rounded-t-3xl hover:bg-white hover:border-white black hover:border">
      <img
        className="res-logo w-[300] hover:border  h-[270]   hover:border-white rounded-3xl "
        src={CDN_URL + resData?.info?.cloudinaryImageId}
        alt="res-logo"
      />

      <div className="p-2 m-auto">
        <h3 className="font-bold text-2xl py-1">{name}</h3>
        <p className="font-semibold">{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{avgRating} Stars</p>
        <p>{sla.deliveryTime} mins</p>
        <p>User: {loggedInUser}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="text-white absolute  font-extrabold  text-2xl mt-56 ml-6 ">
          {props?.resData?.info?.aggregatedDiscountInfoV3?.header +
            " " +
            props?.resData.info?.aggregatedDiscountInfoV3?.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
