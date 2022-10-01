import React from "react";
import OffProduct from "./OffProduct";
import TrendingProduct from "./TrendingProduct";

const TrendingProducts = () => {
	return (
		<div>
			<h1 className='text-center text-[#1A0B5B] mt-28 font-bold text-3xl'>
				Trending Products
			</h1>
			<div className='md:w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-2 container mx-auto   items-center justify-items-center mt-8'>
				<TrendingProduct />
				<TrendingProduct />
				<TrendingProduct />
				<TrendingProduct />
			</div>
			<div className='md:w-[1000px]  container mx-auto   items-center justify-items-center mt-8'>
				<OffProduct />
			</div>
		</div>
	);
};

export default TrendingProducts;
