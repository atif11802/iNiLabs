import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
	return (
		<footer class=' footer bg-[#EEEFFB] relative pt-1 border-b-2  mt-14'>
			<div class='container md:w-[1200px] justify-center  mx-auto px-6 py-20'>
				<div class='sm:flex sm:mt-8'>
					<div class='mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between'>
						<div class='flex flex-col'>
							<span class='font-bold text-2xl text-[#000000]uppercase mb-2'>
								Hekto
							</span>
							<span class='my-2'>
								<input
									type='text'
									placeholder='Enter email address'
									className='outline-none border-none focus:bg-white focus:border-0 focus:outline-none'
								/>
								<button className='bg-[#FB2E86] px-6 py-2 text-white'>
									Sign Up
								</button>
							</span>
							<span class='my-2'>
								<p className='text-[#8A8FB9] text-sm'>Contact Info</p>
								<p className='text-[#8A8FB9] text-sm'>
									17 Princess Road, London, Greater London NW1 8JR, UK
								</p>
							</span>
						</div>
						<div class='flex flex-col'>
							<span class=' text-xl text-[#000000]uppercase mb-2'>
								Catagories
							</span>
							<span class='my-2'>
								<p className='text-[#8A8FB9] text-sm mt-2'>
									Laptops & Computers
								</p>
								<p className='text-[#8A8FB9] text-sm mt-2'>
									Cameras & Photography
								</p>
								<p className='text-[#8A8FB9] text-sm mt-2'>
									Smart Phones & Tablets
								</p>
								<p className='text-[#8A8FB9] text-sm mt-2'>
									Video Games & Consoles
								</p>
								<p className='text-[#8A8FB9] text-sm mt-2'>
									Waterproof Headphones
								</p>
							</span>
						</div>
						<div class='flex flex-col'>
							<span class=' text-xl text-[#000000]uppercase mb-2'>
								Customer Care
							</span>
							<span class='my-2'>
								<p className='text-[#8A8FB9] text-sm mt-2'>My Account</p>
								<p className='text-[#8A8FB9] text-sm mt-2'>Discount</p>
								<p className='text-[#8A8FB9] text-sm mt-2'>Returns</p>
								<p className='text-[#8A8FB9] text-sm mt-2'>Orders History</p>
								<p className='text-[#8A8FB9] text-sm mt-2'>Order Tracking</p>
							</span>
						</div>
						<div class='flex flex-col'>
							<span class=' text-xl text-[#000000]uppercase mb-2'>Pages</span>
							<span class='my-2'>
								<p className='text-[#8A8FB9] text-sm mt-2'>Blog</p>
								<p className='text-[#8A8FB9] text-sm mt-2'>Browse the Shop</p>
								<p className='text-[#8A8FB9] text-sm mt-2'>Category</p>
								<p className='text-[#8A8FB9] text-sm mt-2'>Pre-Built Pages</p>
								<p className='text-[#8A8FB9] text-sm mt-2'>
									Visual Composer Elements
								</p>
								<p className='text-[#8A8FB9] text-sm mt-2'>WooCommerce Pages</p>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class=' bg-[#E7E4F8] '>
				<div className='container py-5 mx-auto  md:w-[1200px]  px-6 flex justify-between'>
					<div className='text-[#8A8FB9] text-sm'>
						©Webecy - All Rights Reserved
					</div>
					<div className='flex items-center'>
						<span className='ml-3'>
							<BsFacebook size={22} color={"#151875"} />
						</span>
						<span className='ml-3'>
							<AiFillInstagram size={26} color={"#151875"} />
						</span>
						<span className='ml-3'>
							<AiFillTwitterCircle size={26} color={"#151875"} />
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
