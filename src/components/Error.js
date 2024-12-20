import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Ooop !!!💩💩💩💩💩💩💩💩😒</h1>
      <h2>Something went Wrong </h2>
      <h2>
        {err.status}:<span> {err.statusText}</span>
      </h2>
    </div>
  );
};

export default Error;
