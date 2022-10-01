import React from "react";
import TrendingPic from "../assets/image 1171.png";

const TrendingProduct = () => {
	return (
		<div className=''>
			<div className='flex  justify-center items-center bg-[#F5F6F8] p-4 '>
				<img src={TrendingPic} alt='chair' />
			</div>

			<div className='text-[#151875] text-center mt-5'>
				<p className='font-bold'>Cantilever chair</p>
				<div className='flex justify-center items-center mt-2'>
					<p className='ml-2 text-sm'>$26.00</p>
					<p className='ml-2 text-xs text-[#ACABC3]'>$42.00</p>
				</div>
			</div>
		</div>
	);
};

export default TrendingProduct;
