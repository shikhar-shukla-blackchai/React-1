import React from "react";

const Grocery = () => {
  return (
    <div className="container mx-auto p-4 mt-28">
      <h1 className="text-2xl font-bold text-center mb-4">Grocery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Example Grocery Item 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/614871876/photo/apple-isolated-on-wood-background.jpg?s=612x612&w=0&k=20&c=_8ShFA2p-xbTBMz0g7JUSsfd329GBkyj47dzW3F1mqc=" // Replace with actual image URL
            alt="Grocery Item 1"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-1">Fresh Apples</h3>
            <p className="text-gray-500 text-sm">1 kg</p>
            <p className="text-green-500 font-bold">₹99</p>
          </div>
        </div>

        {/* Example Grocery Item 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1337307092/photo/pouring-fresh-milk-in-glass.jpg?s=612x612&w=0&k=20&c=8dUKQ5u-BbqmUvXpVIKzfUCQbBoCK4AF2qftMcAVkLM=" // Replace with actual image URL
            alt="Grocery Item 2"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-1">Organic Milk</h3>
            <p className="text-gray-500 text-sm">1 Litre</p>
            <p className="text-green-500 font-bold">₹60</p>
          </div>
        </div>

        {/* Example Grocery Item 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1360789044/photo/almonds-isolated-on-wooden-background-flat-lay.jpg?s=612x612&w=0&k=20&c=m3JUwL1ru0rHGQwdtkHpl7PjWjvdGzbMKcTnkyJmzFw=" // Replace with actual image URL
            alt="Grocery Item 3"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-1">Almonds</h3>
            <p className="text-gray-500 text-sm">250g</p>
            <p className="text-green-500 font-bold">₹220</p>
          </div>
        </div>

        {/* Example Grocery Item 4 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/906619122/photo/macro-photography-of-fresh-spinach-concept-of-organic-food.jpg?s=612x612&w=0&k=20&c=t7SjTCXqku_l50IQ-O97VIut5-vzU7nECXzlvPTVG1k=" // Replace with actual image URL
            alt="Grocery Item 4"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-1">Fresh Spinach</h3>
            <p className="text-gray-500 text-sm">500g</p>
            <p className="text-green-500 font-bold">₹30</p>
          </div>
        </div>

        {/* Add more grocery item components here */}
      </div>
    </div>
  );
};

export default Grocery;
