import React, { useState, useEffect } from "react";

const User = ({ username }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error(`Error fetching user data: ${response.status}`);
        }
        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading user data...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  const { location, name, avatar_url, public_repos, followers, following } =
    userInfo;

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md mt-26">
      <h1 className="text-2xl font-bold text-center mb-4">User Profile</h1>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <img
          src={avatar_url}
          alt={`${name}'s profile picture`}
          className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
        />
        <div className="flex flex-col space-y-2">
          <p className="text-gray-700 font-medium">Name:</p>
          <p className="text-gray-500">{name}</p>
          <p className="text-gray-700 font-medium">Location:</p>
          <p className="text-gray-500">{location || "N/A"}</p>
          {/* Add more user details if available */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <p className="text-2xl font-bold text-gray-700">{public_repos}</p>
          <p className="text-gray-500">Public Repositories</p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <p className="text-2xl font-bold text-gray-700">{followers}</p>
          <p className="text-gray-500">Followers</p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <p className="text-2xl font-bold text-gray-700">{following}</p>
          <p className="text-gray-500">Following</p>
        </div>
      </div>
    </div>
  );
};

export default User;
