
import { FaSearch } from "react-icons/fa";
import restaurants from "../data/restaurants";

const categories = [
  "All",
  "Pizza",
  "Burger",
  "Cafe",
  "Indian",
  "Italian",
  "Chinese",
  "Desserts",
  "Healthy",
];

function Explore() {
  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">

     
        <div className="text-center mb-8">
  <h1 className="text-4xl font-bold text-gray-800 m-10">
    Explore Restaurants
  </h1>

  <p className="text-gray-500 mt-3">
    Discover the best restaurants around you
  </p>
</div>

       
        <div className="max-w-xl mx-auto mb-8">
          <div className="flex items-center bg-white rounded-full shadow-md px-5 py-3">
            <FaSearch className="text-gray-400 mr-3" />

            <input
              type="text"
              placeholder="Search restaurants..."
              className="w-full outline-none"
            />
          </div>
        </div>

       
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className="px-5 py-2 rounded-full bg-white border border-gray-200 hover:bg-orange-500 hover:text-white transition"
            >
              {category}
            </button>
          ))}
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
             
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />

              
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
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Explore;

