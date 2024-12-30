import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log("items", items);

  const [more, setMore] = useState(false);

  const dispatch = useDispatch();

  const showMore = () => {
    setMore(!more);
  };

  const handleAddItem = (items) => {
    dispatch(addItem(items));
  };

  return (
    <div className="bg-zinc-100 -mx-7 ">
      {items.map((items) => (
        <div
          data-testId="foodItems"
          key={items.card.info.id}
          className="p-2 m-2 border-gray-200 pt-12 pb-14 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 my-1">
              <span className="font-bold text-2xl">{items.card.info.name}</span>
              <p className="font-bold text-2xl my-1">
                ₹
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}
              </p>
              <p className="text-green-800 font-medium text-lg mt-2">
                ★ {items?.card?.info?.ratings?.aggregatedRating?.rating}{" "}
                <span className="text-gray-400">
                  ({items?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                  )
                </span>
              </p>
            </div>
            <p className="text-base mb-1 text-gray-500 ">
              {" "}
              {more
                ? items?.card?.info?.description
                : items?.card?.info?.description?.substring(0, 25)}{" "}
              <button
                className="font-semibold text-gray-500"
                onClick={showMore}
              >
                {more ? "Show less" : "...more"}
              </button>
            </p>
          </div>{" "}
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="h-11 w-36 ml-7 mt-[118] rounded-md  text-green-600 bg-white text-lg font-bold"
                onClick={() => handleAddItem(items)}
              >
                ADD
              </button>{" "}
            </div>
            <img
              src={CDN_URL + items.card.info.imageId}
              className="w-full h-36 rounded-lg border-none"
            />
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default ItemList;
