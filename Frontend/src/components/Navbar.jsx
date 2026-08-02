import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

       
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="StreetBites Logo"
            className="w-14 h-14 object-contain"
          />
          <h1 className="text-2xl font-bold text-orange-500">
            StreetBites
          </h1>
        </div>

        
        <div className="flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          <Link to="/explore" className="hover:text-orange-500 transition">
            Explore
          </Link>

          <Link to="/categories" className="hover:text-orange-500 transition">
            Categories
          </Link>

          <Link to="/about" className="hover:text-orange-500 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </div>

        
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-orange-500 font-medium hover:text-orange-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;