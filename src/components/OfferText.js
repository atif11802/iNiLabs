import React from "react";
import truck from "../assets/delivery-truck-giftbox-svgrepo-com.svg";

const OfferText = () => {
	return (
		<div className=' w-[270px] mt-4'>
			<div className='flex justify-center items-center'>
				<img src={truck} alt='' className='w-16' />
			</div>
			<div className=''>
				<h3 className='text-[#151875] text-xl text-center mt-4 font-bold'>
					24/7 Support
				</h3>
				<p className='text-gray-400 text-sm text-center mt-4 font-bold'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
					gravida.
				</p>
			</div>
		</div>
	);
};

export default OfferText;
