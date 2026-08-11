
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Pizza",
    description: "Cheesy delicious pizza for every mood.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop",
  },

  {
    name: "Burger",
    description: "Juicy burgers packed with delicious flavors.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
  },

  {
    name: "Cafe",
    description: "Coffee, snacks and cozy cafe vibes.",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
  },

  {
    name: "Indian",
    description: "Authentic Indian food full of amazing flavors.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop",
  },

  {
    name: "Italian",
    description: "Classic Italian favourites.",
    image:
      "https://images.unsplash.com/photo-1616299915952-04c803388e5f?w=600&auto=format&fit=crop&q=60",
  },

  {
    name: "Chinese",
    description: "Noodles, rice and more.",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=60",
  },

  {
    name: "Desserts",
    description: "Sweet treats and desserts.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=60",
  },

  {
    name: "Healthy",
    description: "Fresh and healthy choices.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=60",
  },
];

function Categories() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

    
      <div className="flex flex-col items-center gap-3 mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Explore Categories
        </h1>

        <p className="text-gray-600">
          Find the restaurants based on what you're craving
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">

        {categories.map((category) => (
          <div
            key={category.name}
            className="w-72 rounded-2xl shadow-xl bg-white overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >

          
            <img
              src={category.image}
              className="h-40 w-full object-cover"
              alt={category.name}
            />

       
            <div className="p-5 text-center">

              <h2 className="font-bold text-xl text-gray-800">
                {category.name}
              </h2>

              <p className="text-gray-500 mt-2">
                {category.description}
              </p>

            
              <Link
                to={`/explore?category=${category.name}`}
                className="mt-4 text-orange-500 font-semibold inline-block hover:text-orange-600 transition"
              >
                Explore →
              </Link>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Categories;

