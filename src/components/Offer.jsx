import React from "react";
import OfferText from "./OfferText";

const Offer = () => {
	return (
		<div className='mt-16 mb-8'>
			<h1 className='text-center text-3xl font-bold text-[#151875]'>
				What Shopex Offer!
			</h1>
			<div className='md:w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-2 container mx-auto   items-center justify-items-center mt-20'>
				<OfferText />
				<OfferText />
				<OfferText />
				<OfferText />
			</div>
		</div>
	);
};

export default Offer;
