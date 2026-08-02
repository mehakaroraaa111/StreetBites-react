function Hero(){
    return(
        <section className="bg-orange-50 min-h-[90vh]">
<div>
<div className="max-w-7xl mx-auto px-8 py-16 flex items-center justify-between gap-16">
    <div className="w-1/2">
        <h1 className="text-4xl font-bold">Discover the Best Food Spots Near You 🍔</h1>
        <p className="text-gray-400 text-lg mt-4">Find the best restaurants, cafes, and street food spots near you with trusted ratings and reviews.</p>
        <button className="bg-orange-500 text-white w-30 h-10 rounded-lg p-2 mt-6 hover:bg-orange-600 transition">
            Explore Now
        </button>
        <button className="bg-white mx-10 w-30 h-10 rounded-lg border-2 border-orange-300 text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-lg hover:-translate-y-1">
            View Categories
        </button>
    </div>
    <div className="w-1/2">
        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero-image" className="w-full max-w-xl h-105 object-cover rounded-3xl shadow-xl mt-10 "/>
    </div>
</div>

</div>
        </section>
    )
}
export default Hero;