import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data);
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96 text-center">

        <div className="w-20 h-20 rounded-full bg-indigo-600 mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome
        </h2>

        {user ? (
          <div className="space-y-3">
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-gray-500 text-sm">Name</p>
              <p className="font-semibold text-gray-800">{user.name}</p>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-semibold text-gray-800">{user.email}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition duration-300"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Profile;
