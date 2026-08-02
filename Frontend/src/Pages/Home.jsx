import CategorySection from "../components/CategorySection";
import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";
import PopularRestaurants from "../components/PopularRestaurants";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <CategorySection /> 
      <PopularRestaurants />
      <Footer />
    </>
  );
}

export default Home;