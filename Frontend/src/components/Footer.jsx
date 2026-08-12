import { Link } from "react-router-dom";
import logotwo from "../assets/logotwo.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <img
              src={logotwo}
              alt="StreetBites Logo"
              className="w-48 h-auto object-contain"
            />

            <p className="text-gray-400 mt-4 max-w-sm">
              Discover the best restaurants and delicious food around you
              with StreetBites.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link to="/" className="text-gray-400 hover:text-orange-500">
                Home
              </Link>

              <Link
                to="/explore"
                className="text-gray-400 hover:text-orange-500"
              >
                Explore
              </Link>

              <Link
                to="/categories"
                className="text-gray-400 hover:text-orange-500"
              >
                Categories
              </Link>

              <Link
                to="/about"
                className="text-gray-400 hover:text-orange-500"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-gray-400 hover:text-orange-500"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Account
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                className="text-gray-400 hover:text-orange-500"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="text-gray-400 hover:text-orange-500"
              >
                Sign Up
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 StreetBites. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;