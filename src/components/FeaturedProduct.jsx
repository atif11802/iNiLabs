import React from "react";
import FeaturedChair from "../assets/image 1168.png";

const FeaturedProduct = () => {
	return (
		<div className='w-[270px] h-[361px] group hover:cursor-pointer  bg-[#F6F7FB'>
			<div className='ml-8  invisible group-hover:visible transition delay-150 flex gap-2 mb-4 '>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-5 h-5 text-[#2F1AC4]'
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
						className='w-5 h-5 text-blue-500'
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
						className='w-5 h-5 text-blue-700'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6'
						/>
					</svg>
				</div>
			</div>
			<div className='flex  justify-center items-center '>
				<img src={FeaturedChair} alt='chair' />
			</div>

			<div className='text-center bg-white  group-hover:bg-[#2F1AC4] py-4 transition delay-75'>
				<p className='text-[#FB2E86] text-2xl font-bold mt-2 group-hover:text-white transition delay-150'>
					Cantilever chair
				</p>
				<div className='mt-2 flex justify-center items-center gap-2'>
					<div className='w-5 rounded h-1 bg-[#05E6B7]'></div>
					<div className='w-5 rounded h-1 bg-[#F701A8]'></div>
					<div className='w-5 rounded h-1 bg-[#00009D]'></div>
				</div>
				<h1 className='text-[#151875] text-sm mt-2 group-hover:text-white transition delay-150'>
					Code - Y523201
				</h1>
				<p className='text-[#151875] text-sm mt-2 group-hover:text-white transition delay-150'>
					$ 42.00
				</p>
			</div>
		</div>
	);
};

export default FeaturedProduct;
