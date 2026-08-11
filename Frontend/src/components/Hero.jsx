
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-orange-50 min-h-[90vh]">
      <div>
        <div className="max-w-7xl mx-auto px-8 py-16 flex items-center justify-between gap-16">

          
          <div className="w-1/2">

            <h1 className="text-4xl font-bold">
              Discover the Best Food Spots Near You 🍔
            </h1>

            <p className="text-gray-400 text-lg mt-4">
              Find the best restaurants, cafes, and street food spots near
              you with trusted ratings and reviews.
            </p>

           
            <Link
              to="/explore"
              className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-orange-600 transition"
            >
              Explore Now
            </Link>

          
            <Link
              to="/categories"
              className="inline-block bg-white mx-10 px-6 py-2 rounded-lg border-2 border-orange-300 text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-lg hover:-translate-y-1"
            >
              View Categories
            </Link>

          </div>

        
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop"
              alt="Delicious pizza"
              className="w-full max-w-xl h-[420px] object-cover rounded-3xl shadow-xl mt-10"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

