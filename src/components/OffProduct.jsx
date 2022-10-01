import React from "react";
import Clock from "../assets/image 1162.png";
import desk from "../assets/image 1161.png";
import miniChair from "../assets/image 30.png";

const OffProduct = () => {
	return (
		<div className='flex flex-col md:flex-row justify-center gap-7'>
			<div className='bg-[#FFF6FB] basis-1/3'>
				<div className='text-[#151875] text-xl '>
					<h1 className='font-bold'>23% off in all products</h1>
					<p className='text-[#FB2E86] text-xs'>Shop Now</p>
				</div>
				<div className='ml-32'>
					<img src={Clock} alt='clock' />
				</div>
			</div>
			<div className='bg-[#FFF6FB] basis-1/3'>
				<div className='text-[#151875] text-xl '>
					<h1 className='font-bold'>23% off in all products</h1>
					<p className='text-[#FB2E86] text-xs'>Shop Now</p>
				</div>
				<div className='ml-32'>
					<img src={desk} alt='desk' />
				</div>
			</div>
			<div className='bg-[#FFF6FB] basis-1/3'>
				<div className='flex items-center'>
					<img src={miniChair} alt='miniChair' />
					<div className='text-[#151875] ml-4 '>
						<h1 className='text-sm font-bold'>Executive Seat chair</h1>
						<p className='text-xs line-through'>$32.00</p>
					</div>
				</div>
				<div className='flex items-center mt-3'>
					<img src={miniChair} alt='miniChair' />
					<div className='text-[#151875] ml-4 '>
						<h1 className='text-sm font-bold'>Executive Seat chair</h1>
						<p className='text-xs line-through'>$32.00</p>
					</div>
				</div>
				<div className='flex items-center mt-3'>
					<img src={miniChair} alt='miniChair' />
					<div className='text-[#151875] ml-4 '>
						<h1 className='text-sm font-bold'>Executive Seat chair</h1>
						<p className='text-xs line-through'>$32.00</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OffProduct;
