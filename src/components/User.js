import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  useEffect(() => {
    console.log("useEffect()");
    return () => {
      console.log("useEffect Return / ComponentWillUnmount()");
    };
  });

  console.log("render");
  return (
    <div className="border border-black p-2 m-4">
      <h1>Count: {count}</h1>
      <h1>Count: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Loaction: India, Gujarat </h3>
      <h4>Contact: shikharshukla678@gmail.com </h4>
    </div>
  );
};

export default User;
