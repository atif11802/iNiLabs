import React from "react";
import HomeChair from "../assets/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png";
import Eclipse63 from "../assets/Ellipse 63.png";

const UniqueProducts = () => {
	return (
		<div className='bg-[#F1F0FF] '>
			<div className=' md:w-[1200px] container flex flex-col md:flex-row p-3'>
				<div className='relative mx-auto md:p-4'>
					<img src={Eclipse63} alt='' />
					<img
						src={HomeChair}
						alt=''
						className='absolute top-0 left-2 sm:top-4 sm:left-14 md:top-6 md:left-20 w-[380px]'
					/>
				</div>
				<div className='md:mt-14 basis-1/2'>
					<h1 className='text-[#151875] text-3xl font-bold'>
						Unique Features Of leatest & Trending Poducts
					</h1>
					<ul className='mt-10'>
						<li className='text-[#ACABC3] text-sm mt-3 flex items-center'>
							<div className='rounded-full mr-3 w-2 h-2 bg-[#FB2E86]'></div> All
							frames constructed with hardwood solids and laminates
						</li>
						<li className='text-[#ACABC3] text-sm mt-3 flex items-center '>
							<div className='rounded-full mr-3 w-2 h-2 bg-[#151875]'></div>{" "}
							Reinforced with double wood dowels, glue, screw - nails corner
							blocks and machine nails
						</li>
						<li className='text-[#ACABC3] text-sm mt-3 flex items-center '>
							<div className='rounded-full mr-3 w-2 h-2 bg-[#08D15F]'></div>{" "}
							Arms, backs and seats are structurally reinforced
						</li>
					</ul>

					<div className='mt-6 flex'>
						<button className='bg-[#FB2E86] px-6 py-2 text-white text-sm'>
							Add to cart
						</button>
						<div className='text-[#151875] ml-4'>
							<p className='font-bold'>B&B Italian Sofa </p>
							<p>$32.00</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UniqueProducts;
