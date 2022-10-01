import React from "react";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LatestProducts from "./components/LatestProducts";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import TrendingProducts from "./components/TrendingProducts";
import UniqueProducts from "./components/UniqueProducts";

const App = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<FeaturedProducts />
			<LatestProducts />
			<Offer />
			<UniqueProducts />
			<TrendingProducts />
			<Footer />
		</>
	);
};

export default App;
