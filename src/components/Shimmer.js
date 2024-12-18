const ShimmerContimer = () => {
  return (
    <div className="m-4 ml-2 mb-4 p-2 rounded-2xl bg-gray-300 h-80 w-48"></div>
  );
};

const Shimmer = () => {
  return (
    <div className="body">
      <div className="search p-4 mt-4">
        <button className="bg-gray-300 rounded-2xl border border-blue-500 p-1">
          Top Rated Restaurent
        </button>
      </div>
      <div className="flex flex-wrap">
        <ShimmerContimer />
        <ShimmerContimer />
        <ShimmerContimer />
        <ShimmerContimer />
        <ShimmerContimer />
        <ShimmerContimer />
        <ShimmerContimer />
        <ShimmerContimer />
      </div>
    </div>
  );
};

export default Shimmer;
