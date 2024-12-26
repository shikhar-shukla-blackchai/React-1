import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    console.log("showItem", showItem);
    setShowIndex();
  };

  return (
    <div className="bg-zinc-100">
      <div className="w-6/12 mx-auto my-4 bg-gray-200  ">
        <div className=" flex justify-between " onClick={handleClick}>
          <span className="font-bold text-2xl pl-3 cursor-pointer ">
            {data.title} ({data.itemCards.length || 0})
          </span>
          <span className="pr-3 pt-2">{showItem ? "▲" : "▼"}</span>{" "}
        </div>
        <div className="ml-3 ">
          {showItem && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
