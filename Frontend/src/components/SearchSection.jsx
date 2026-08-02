function SearchSection(){
    return(
<section className="bg-white py-20">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center">
    <h2 className="text-4xl font-bold text-gray-800">
Find Restaurants.
    </h2>
    <p className="text-gray-500 mt-3 text-lg">
 Search your favorite restaurants, cafes, or cuisines near you.
    </p>
</div>
<div className=" bg-white shadow-lg  flex items-center mx-5 my-6 rounded-2xl p-4 mt-10 gap-4">
    <input type="text" placeholder="Search restaurants, cuisines..." className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"/>
    <select className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400">
        <option>Select Location</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Banglore</option>
        <option>Chandigarh</option>
        <option>Jaipur</option>
    </select>
    <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
        Search
    </button>
</div>
</div>
</section>
    )
}
export default SearchSection;