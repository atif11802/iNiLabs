import React from "react";
import latestChair from "../assets/image 1166.png";

const LatestProduct = ({ show }) => {
	return (
		<div className='relative mt-8 bg-[#F7F7F7]'>
			{show && (
				<div className='absolute top-2'>
					<div className='bg-[#3F509E] text-white px-6 my-4'>
						<p>sale</p>
					</div>
					<div className='absolute top-28'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 mt-4 text-[#2F1AC4]'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
								/>
							</svg>
						</div>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 mt-4 text-[#2F1AC4]'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
								/>
							</svg>
						</div>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 mt-3 text-[#2F1AC4]'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6'
								/>
							</svg>
						</div>
					</div>
				</div>
			)}

			<div className='flex  justify-center items-center'>
				<img src={latestChair} alt='chair' />
			</div>

			<div className='flex justify-between items-center mt-8 text-[#151875] bg-white '>
				<p>Comfort Handy Craft</p>
				<div className='flex items-center'>
					<p className='text-sm'>$42.00</p>
					<span className='text-[#FB2448] text-xs ml-2 line-through'>
						$65.00
					</span>
				</div>
			</div>
		</div>
	);
};

export default LatestProduct;
