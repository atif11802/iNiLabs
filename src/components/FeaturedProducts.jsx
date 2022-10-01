import React from "react";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = () => {
	return (
		<>
			<h1 className='text-center text-[#1A0B5B] mt-28 font-bold text-3xl'>
				Featured Products
			</h1>
			<div className='md:w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-2 container mx-auto   items-center justify-items-center mt-8'>
				<FeaturedProduct />
				<FeaturedProduct />
				<FeaturedProduct />
				<FeaturedProduct />
			</div>
		</>
	);
};

export default FeaturedProducts;
