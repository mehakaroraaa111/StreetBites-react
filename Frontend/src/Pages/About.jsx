import React from "react";
import {
  FaUtensils,
  FaStar,
  FaMapMarkerAlt,
  FaRocket,
} from "react-icons/fa";

function About() {
  return (
    <>
     
      <section className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About StreetBites
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            StreetBites is your trusted food discovery platform that helps you
            explore the best restaurants, cafés, and street food around you.
            Find amazing places to eat, discover new cuisines, and enjoy
            unforgettable dining experiences.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
            alt="Restaurant"
            className="rounded-3xl shadow-lg"
          />

          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              StreetBites was created with one simple goal—to make food
              discovery easy and enjoyable. Instead of spending hours searching
              for restaurants, our platform helps users quickly explore nearby
              food spots, compare ratings, and discover hidden gems in their
              city.
            </p>
          </div>
        </div>
      </section>

   
      <section className="bg-orange-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Mission
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            Our mission is to connect food lovers with amazing restaurants by
            providing a fast, simple, and reliable platform for discovering the
            best dining experiences while supporting local businesses.
          </p>
        </div>
      </section>

    
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose StreetBites?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <FaUtensils className="text-5xl text-orange-500 mx-auto mb-5" />
              <h3 className="text-xl font-bold mb-3">Wide Variety</h3>
              <p className="text-gray-600">
                Discover restaurants serving Indian, Chinese, Italian,
                Mexican, desserts, cafés and much more.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <FaStar className="text-5xl text-orange-500 mx-auto mb-5" />
              <h3 className="text-xl font-bold mb-3">Trusted Ratings</h3>
              <p className="text-gray-600">
                Explore highly rated restaurants with genuine customer
                reviews.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <FaMapMarkerAlt className="text-5xl text-orange-500 mx-auto mb-5" />
              <h3 className="text-xl font-bold mb-3">Nearby Locations</h3>
              <p className="text-gray-600">
                Find the best restaurants near you with just a few clicks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <FaRocket className="text-5xl text-orange-500 mx-auto mb-5" />
              <h3 className="text-xl font-bold mb-3">Easy to Use</h3>
              <p className="text-gray-600">
                Enjoy a modern, responsive interface designed for quick and
                effortless food discovery.
              </p>
            </div>

          </div>
        </div>
      </section>

    
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-5xl font-bold text-orange-500">500+</h2>
            <p className="mt-3">Restaurants</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-orange-500">25+</h2>
            <p className="mt-3">Food Categories</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-orange-500">15K+</h2>
            <p className="mt-3">Happy Users</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-orange-500">4.8★</h2>
            <p className="mt-3">Average Rating</p>
          </div>

        </div>
      </section>

     
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Discover Your Next Favorite Restaurant?
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Join thousands of food lovers and start exploring the best
            restaurants near you today.
          </p>

          <div className="flex justify-center gap-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold">
              Explore Restaurants
            </button>

            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-semibold transition">
              Browse Categories
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;