import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-orange-500">
              StreetBites
            </h2>
            <p className="text-gray-400 mt-3">
              Discover the best food and restaurants around you.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-orange-500">
                Home
              </Link>

              <Link to="/explore" className="text-gray-400 hover:text-orange-500">
                Explore
              </Link>

              <Link to="/categories" className="text-gray-400 hover:text-orange-500">
                Categories
              </Link>

              <Link to="/about" className="text-gray-400 hover:text-orange-500">
                About
              </Link>

              <Link to="/contact" className="text-gray-400 hover:text-orange-500">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Account</h3>

            <div className="flex flex-col gap-2">
              <Link to="/login" className="text-gray-400 hover:text-orange-500">
                Login
              </Link>

              <Link to="/signup" className="text-gray-400 hover:text-orange-500">
                Sign Up
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-500">
          © 2026 StreetBites. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;