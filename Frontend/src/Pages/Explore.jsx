import { FaSearch } from "react-icons/fa";
import restaurants from "../data/restaurants";
const categories=[
"All",
"Pizza",
"Burger",
"Cafe",
"Indian",
"Italic",
"Chinese",
"Desserts",
"Healthy",
]
function Explore() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
       

   <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
        Explore Restaurants
        </span>

   <h1 className="text-5xl font-bold text-gray-800 mt-6">
          Discover Amazing Places to Eat
        </h1>

  <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-5 leading-8">
          Browse top-rated restaurants, cafés, and street food spots.
          Search by cuisine, location, or your favorite dish and discover
          your next delicious meal.
    </p>
    <div className="max-w-2xl mx-auto mt-10 relative">
  <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

  <input
    type="text"
    placeholder="Search restaurants, cuisines..."
    className="w-full border border-gray-300 rounded-full py-4 pl-14 pr-5 text-lg outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 shadow-sm"
  />
</div>
<div className="flex flex-wrap justify-center gap-4 mt-10">
  {categories.map((category)=>(
<button 
key={category}
className="px-6 py-3 bg-white border border-gray-300 rounded-full hover:bg-orange-500 hover-text-white hover:border-orange-500 transition duration-300">
{category}
</button>
  ))
  }
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
  
{
restaurants.map((restaurant)=>(
    <div key={restaurant.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300">

        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />

        <div className="p-5">
            <h2 className="text-xl font-bold">
                {restaurant.name}
            </h2>

            <p className="text-gray-500">
                {restaurant.category}
            </p>

            <p>
                 {restaurant.rating}
            </p>

            <p>
                {restaurant.location}
            </p>

            <p>
                 {restaurant.deliveryTime}
            </p>

            <p>
                 {restaurant.openingHours}
            </p>
        </div>

    </div>
))
}

</div>

</div>

      </div>
    </section>
  );
}

export default Explore;