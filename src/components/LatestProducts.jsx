import React from "react";
import LatestProduct from "./LatestProduct";

const LatestProducts = () => {
	return (
		<div className='mb-5'>
			<h1 className='text-center text-[#1A0B5B] mt-28  font-bold text-3xl'>
				Latest Products
			</h1>
			<div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-6 mt-9 mb-9  '>
				<p className='text-sm text-[#151875] cursor-pointer p-4 hover:text-[#FB2E86] hover:border-b-2 border-[#FB2E86]'>
					New Arrival
				</p>
				<p className='text-sm text-[#151875] cursor-pointer p-4 hover:text-[#FB2E86] hover:border-b-2 border-[#FB2E86]'>
					Best Seller
				</p>
				<p className='text-sm text-[#151875] cursor-pointer p-4 hover:text-[#FB2E86] hover:border-b-2 border-[#FB2E86]'>
					Featured
				</p>
				<p className='text-sm text-[#151875] cursor-pointer p-4 hover:text-[#FB2E86] hover:border-b-2 border-[#FB2E86]'>
					Special Offer
				</p>
			</div>

			<div className='md:w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center container mx-auto '>
				<LatestProduct />
				<LatestProduct show={true} />
				<LatestProduct />
				<LatestProduct />
				<LatestProduct />
				<LatestProduct />
			</div>
		</div>
	);
};

export default LatestProducts;
