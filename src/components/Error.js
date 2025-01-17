import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.error(err); // Log the error for debugging

  return (
    <div className="container mx-auto p-4 text-center mt-28">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-500">
        {err.status}: {err.statusText}
      </p>
    </div>
  );
};

export default Error;