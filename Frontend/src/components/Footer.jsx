import logotwo from "../assets/logotwo.png";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";


function Footer() {
return (
<footer className="bg-gray-900 text-white mt-16">
<div className="max-w-7xl mx-auto px-6 py-12">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      
      <div>
        <img
          src={logotwo}
          alt="StreetBites Logo"
          className="h-16 w-auto mb-4"
        />

        <p className="text-gray-400 text-sm leading-6">
          Discover the best restaurants, explore delicious cuisines,
          and find your next favorite place to eat with StreetBites.
        </p>
      </div>

      
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Quick Links
        </h3>

        <ul className="space-y-3 text-gray-400 text-sm">
          <li>
            <a href="/" className="hover:text-orange-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="/explore" className="hover:text-orange-500 transition">
              Explore
            </a>
          </li>

          <li>
            <a href="/categories" className="hover:text-orange-500 transition">
              Categories
            </a>
          </li>

          <li>
            <a href="/about" className="hover:text-orange-500 transition">
              About Us
            </a>
          </li>

          <li>
            <a href="/contact" className="hover:text-orange-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

    
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Explore
        </h3>

        <ul className="space-y-3 text-gray-400 text-sm">
          <li>
            <a href="/categories" className="hover:text-orange-500 transition">
               Pizza
            </a>
          </li>

          <li>
            <a href="/categories" className="hover:text-orange-500 transition">
               Burgers
            </a>
          </li>

          <li>
            <a href="/categories" className="hover:text-orange-500 transition">
               Indian
            </a>
          </li>

          <li>
            <a href="/categories" className="hover:text-orange-500 transition">
              Chinese
            </a>
          </li>

          <li>
            <a href="/categories" className="hover:text-orange-500 transition">
               Desserts
            </a>
          </li>
        </ul>
      </div>

      
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Get In Touch
        </h3>

        <ul className="space-y-3 text-gray-400 text-sm">
          <li>📍 India</li>
          <li>📧 hello@streetbites.com</li>
          <li>📞 +91 98765 43210</li>
        </ul>

     
        <div className="flex gap-4 mt-5">

          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
          >
            <CiFacebook />

          </a>

          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
          >
            <CiLinkedin />

          </a>

          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
          >
            <FaInstagram />

          </a>

        </div>
      </div>

    </div>

    <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

      <p className="text-gray-500 text-sm ">
        © 2026 StreetBites. All rights reserved.
      </p>

     
    </div>

  </div>
</footer>

);
}

export default Footer;