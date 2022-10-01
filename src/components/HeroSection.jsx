import React from "react";
import Lamp from "../assets/image 32.png";
import Chair from "../assets/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png";
import Eclipse from "../assets/Ellipse 60.png";
import "../styles/custom.css";

const HeroSection = () => {
	return (
		<>
			<div className=' bg-[#F1F0FF] pb-32 flex flex-col md:flex-row '>
				<div className='flex flex-col md:flex-row basis-1/2 justify-center'>
					<img src={Lamp} alt='lamp' className='h-[387px] w-[387px]' />
					<div className='mt-16 md:mt-56'>
						<p className='text-[#FB2E86] text-sm'>
							Best Furniture For Your Castle....
						</p>
						<h1 className='font-bold text-3xl my-4'>
							New Furniture Collection Trends in 2020
						</h1>
						<p className='text-[#8A8FB9] text-xsm'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
							est adipiscing in phasellus non in justo.
						</p>
						<button className='bg-[#FB2E86] px-8 py-2 text-sm mt-3 text-white'>
							Shop Now
						</button>
					</div>
				</div>
				<div className='basis-1/4 relative '>
					<img
						src={Eclipse}
						alt='eclipse'
						className='w-[400px] sm:w-[451px]  md:h-[451px] sm:mt-20 sm:ml-40 md:mt-20 md:ml-28 '
					/>
					<img
						src={Chair}
						alt=''
						className=' absolute sm:w-[451px] sm:top-28 sm:left-36 top-3 md:top-32 md:left-28 z-40'
					/>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
