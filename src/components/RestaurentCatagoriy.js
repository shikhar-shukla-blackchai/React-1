import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(showItem ? null : 0); // Set showIndex to 0 when expanding
  };

  return (
    <div className="mb-4 mt-26">
      <div
        className={`border border-gray-200 rounded-md p-2 cursor-pointer ${
          showItem ? "bg-gray-100" : ""
        }`}
        onClick={handleClick}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length || 0})
          </span>
          <span className="text-sm">{showItem ? "▲" : "▼"}</span>
        </div>
      </div>
      {showItem && (
        <div className="mt-2">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
