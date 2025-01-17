const ShimmerContimer = () => {
  return (
    <div className="m-4 p-2 rounded-md bg-gray-300 h-48 w-48 animate-pulse" />
  );
};

const Shimmer = () => {
  return (
    <div className="bg-gray-100 p-4 mt-26">
      <div className="search flex justify-between items-center mb-4">
        <div className="w-full max-w-md relative">
          <div className="w-full rounded-md pl-10 pr-4 py-2 bg-gray-300 animate-pulse" />
        </div>
        <div className="bg-gray-300 rounded-md py-2 px-4 animate-pulse" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
