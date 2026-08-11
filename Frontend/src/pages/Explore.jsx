
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import restaurants from "../data/restaurants";

const categories = [
  "All",
  "Pizza",
  "Burger",
  "Indian",
  "Chinese",
  "South Indian",
  "Beverages",
  "Desserts",
  "Wraps & Rolls",
];

function Explore() {
  const [search, setSearch] = useState("");

  const [searchParams] = useSearchParams();

  const categoryFromURL = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] =
    useState(categoryFromURL);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      restaurant.category.toLowerCase() ===
        selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 m-10">
            Explore Restaurants
          </h1>

          <p className="text-gray-500 mt-3">
            Discover the best restaurants around you
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="flex items-center bg-white rounded-full shadow-md px-5 py-3">
            <FaSearch className="text-gray-400 mr-3" />

            <input
              type="text"
              placeholder="Search restaurants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full border transition ${
                selectedCategory === category
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white border-gray-200 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Restaurant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Restaurant Image */}
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />

              {/* Restaurant Information */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800">
                  {restaurant.name}
                </h2>

                <p className="text-gray-500 mt-1">
                  {restaurant.category}
                </p>

                <p className="mt-3">
                  ⭐ {restaurant.rating}
                </p>

                <p className="text-gray-600 mt-2">
                  📍 {restaurant.location}
                </p>

                <p className="text-gray-600 mt-2">
                  🕐 {restaurant.deliveryTime}
                </p>

                <p className="text-gray-600 mt-2">
                  🕒 {restaurant.openingHours}
                </p>

                {/* View Details */}
                <button className="w-full mt-5 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRestaurants.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No restaurants found.
          </p>
        )}

      </div>
    </section>
  );
}

export default Explore;

