import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, deliveryTime } = resData?.info;

  return (
    <div className="res-card bg-gray-300 m-4 ml-2 mb-4 p-2 w-52  border hover:border-black cursor-pointer rounded-xl">
      <img
        className="rounded-xl  res-logo w-auto border-black border "
        src={CDN_URL + resData?.info?.cloudinaryImageId}
        alt="res-logo"
      />

      <div className="p-2 m-auto">
        <h3 className="font-bold text-2xl py-1">{name}</h3>
        <p className="font-semibold">{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{avgRating} Stars</p>
        <p>{deliveryTime} mins</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
