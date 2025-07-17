import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 py-3 px-6 flex items-center justify-between">
      {/* Logo or Brand Name */}
      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-xl font-bold text-gray-800 hover:text-blue-600 transition duration-200"
        >
          🎓 StudentApp
        </Link>

        {token && (
          <Link
            to="/profile"
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
          >
            Profile
          </Link>
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        {token ? (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-1.5 rounded-md shadow transition duration-200"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-1.5 rounded-md transition duration-200"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
