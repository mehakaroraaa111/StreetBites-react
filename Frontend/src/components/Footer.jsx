import { Link } from "react-router-dom";
import logo from "../assets/logotwo.png";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <img
            src={logotwo}
            alt="StreetBites Logo"
            className="w-12 h-12 object-contain"
          />

          <span className="text-2xl font-bold text-orange-600">
            StreetBites
          </span>
        </Link>

       
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>

          <Link to="/explore" className="hover:text-orange-500">
            Explore
          </Link>

          <Link to="/categories" className="hover:text-orange-500">
            Categories
          </Link>

          <Link to="/about" className="hover:text-orange-500">
            About
          </Link>

          <Link to="/contact" className="hover:text-orange-500">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;