import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const [more, setMore] = useState(false);
  const dispatch = useDispatch();

  const showMore = () => {
    setMore(!more);
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-24">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative h-48 w-full">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="object-cover w-full h-full rounded-t-lg"
            />
            <button
              className="absolute bottom-2 right-2 py-1 px-2 text-sm text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-1">{item.card.info.name}</h3>
            <p className="text-gray-500 text-sm mb-2">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <div className="flex items-center text-green-500 text-sm mb-1">
              <svg
                className="w-4 h-4 mr-1"
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
              <span>
                {item?.card?.info?.ratings?.aggregatedRating?.rating}{" "}
              </span>
              <span className="text-gray-400 text-xs">
                ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              {more
                ? item?.card?.info?.description
                : item?.card?.info?.description?.substring(0, 100)}
              <span className="text-blue-500 cursor-pointer" onClick={showMore}>
                {more ? "Show Less" : "Show More"}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
