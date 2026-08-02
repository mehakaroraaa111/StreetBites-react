const categories = [
  {
    name: "Pizza",
    image: "https://plus.unsplash.com/premium_vector-1730466396924-0f2282b62c95?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Burger",
    image: "https://plus.unsplash.com/premium_vector-1721890180863-f518975cd5a0?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Indian",
    image: "https://plus.unsplash.com/premium_vector-1731031067378-e2ee7ee61922?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Chinese",
    image: "https://plus.unsplash.com/premium_vector-1728829636183-b0dc1caeea24?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name:"South Indian",
    image:"https://plus.unsplash.com/premium_vector-1714402562939-54e26b3ed449?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name:"Beverages",
    image:"https://plus.unsplash.com/premium_vector-1736332941551-b7256f48c18a?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name:"Desserts",
    image:"https://plus.unsplash.com/premium_vector-1741869089109-02cecac5a4b2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
name:"Wraps & Rolls",
image:"https://plus.unsplash.com/premium_vector-1721890180897-d1cbfb33a97d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }

];

function CategorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-4 gap-6">
          {categories.map((item) => (
            <div className="shadow-lg rounded-xl overflow-hidden">
              
              <img 
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />

              <h3 className="text-xl font-bold text-center py-4">
                {item.name}
              </h3>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategorySection;