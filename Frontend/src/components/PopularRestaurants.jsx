import {
  FaPizzaSlice,
  FaStar,
  FaMapMarkerAlt,
  FaHamburger,
  FaCoffee,
  FaIceCream,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";

const restaurants = [
  {
    id: 1,
    name: "Domino's Pizza",
    cuisine: "Pizza",
    icon: <FaPizzaSlice className="text-orange-500" />,
    location: "Delhi",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1169&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Burger King",
    cuisine: "Burger",
    icon: <FaHamburger className="text-yellow-500" />,
    location: "Delhi",
    rating: "4.3",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Starbucks",
    cuisine: "Cafe",
    icon: <FaCoffee className="text-amber-700" />,
    location: "Chandigarh",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1589476993333-f55b84301219?w=1000&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Barbeque Nation",
    cuisine: "Indian",
    icon: <GiMeal className="text-red-500" />,
    location: "Gurgaon",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1000&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "KFC",
    cuisine: "Fast Food",
    icon: <FaHamburger className="text-yellow-500" />,
    location: "Hisar",
    rating: "4.2",
    image:
      "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=1000&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Haldiram's",
    cuisine: "North Indian",
    icon: <GiMeal className="text-red-500" />,
    location: "Jaipur",
    rating: "4.4",
    image:
      "https://images.unsplash.com/photo-1742281257687-092746ad6021?w=1000&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    name: "Bikanerwala",
    cuisine: "Sweets",
    icon: <FaIceCream className="text-pink-500" />,
    location: "Udaipur",
    rating: "4.5",
    image:
      "https://plus.unsplash.com/premium_photo-1698500035576-9c5fa2dcd387?w=1000&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    name: "Pizza Hut",
    cuisine: "Pizza",
    icon: <FaPizzaSlice className="text-orange-500" />,
    location: "Jaipur",
    rating: "4.1",
    image:
      "https://plus.unsplash.com/premium_photo-1667682942060-977925f9a54b?w=1000&auto=format&fit=crop&q=60",
  },
];

function PopularRestaurants() {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-8">
      
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
            <span>⭐</span>
            <span className="text-sm font-semibold uppercase tracking-wider">
              Top Picks
            </span>
          </div>

          <h2 className="text-4xl font-bold text-orange-800">
            Popular Restaurants
          </h2>

          <p className="mt-3 text-lg text-gray-500">
            Discover top-rated restaurants loved by food lovers near you.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <div className="flex items-center gap-2 text-yellow-500 mb-2">
                  <FaStar />
                  <span className="font-semibold text-gray-700">
                    {restaurant.rating}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {restaurant.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  {restaurant.icon}
                  <span>{restaurant.cuisine}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-5">
                  <FaMapMarkerAlt className="text-red-500" />
                  <span>{restaurant.location}</span>
                </div>

                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2">
                  View Details
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularRestaurants;