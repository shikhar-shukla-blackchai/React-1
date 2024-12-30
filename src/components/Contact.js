import React from "react";

const Contact = () => {
  return (
    <div className="mt-10">
      <h1>Contact US </h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 bg-zinc-200 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
