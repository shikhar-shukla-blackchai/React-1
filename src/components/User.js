import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Simulate fetching user data from an API (replace with actual API call)
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/users/1"); // Replace with your API endpoint
      const userData = await response.json();
      setUser(userData);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md mt-26">
      <h1 className="text-2xl font-bold text-center mb-4">User Profile</h1>
      {user.name ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <p className="text-gray-700 font-medium">Name:</p>
            <p className="text-gray-500">{user.name}</p>
            <p className="text-gray-700 font-medium">Email:</p>
            <p className="text-gray-500">{user.email || "N/A"}</p>
            <p className="text-gray-700 font-medium">Location:</p>
            <p className="text-gray-500">{user.location || "N/A"}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-700 font-medium">Contact:</p>
            <p className="text-gray-500">{user.contact || "N/A"}</p>
            {/* Add more user details if available */}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading user data...</p>
      )}
    </div>
  );
};

export default User;
