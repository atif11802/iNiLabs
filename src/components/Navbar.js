import React from "react";

import { Dropdown } from "flowbite-react";

const Navbar = () => {
	return (
		<>
			<div className=' bg-[#7E33E0] '>
				<div className='container mx-auto h-[44px] px-16 sm:px-8 lg:px-56 flex flex-col md:flex-row items-center justify-between'>
					<div className='flex'>
						<div className='flex text-white items-center '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-3 h-3'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
								/>
							</svg>
							<span className='text-xsm md:text-sm ml-2'>xyz@gmail.com</span>
						</div>
						<div className='flex text-white items-center ml-4'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-3 h-3'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z'
								/>
							</svg>

							<span className='text-xsm sm:text-sm ml-2'>+000 111234</span>
						</div>
					</div>
					<div>
						<ul className='flex text-white'>
							<li className='ml-3 text-sm flex items-center'>
								English
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-3 h-3 ml-1'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M19.5 8.25l-7.5 7.5-7.5-7.5'
										/>
									</svg>
								</span>
							</li>
							<li className='ml-3 text-sm flex items-center'>
								usd
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-3 h-3 ml-1'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M19.5 8.25l-7.5 7.5-7.5-7.5'
										/>
									</svg>
								</span>
							</li>
							<li className='ml-3 text-sm flex items-center'>
								Login
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-3 h-3 ml-1'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
										/>
									</svg>
								</span>
							</li>
							<li className='ml-3 text-sm flex items-center'>
								Wishlist
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-3 h-3 ml-1'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
										/>
									</svg>
								</span>
							</li>
							<li className='ml-3 text-sm flex items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-3 h-3'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
									/>
								</svg>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className=' container mx-auto m-2 px-0 sm:px-8 lg:px-56 flex flex-col-reverse md:flex-row items-center justify-between'>
				<div className='flex mt-2'>
					<h1 className='text-2xl font-bold  mr-16'>Hekto</h1>
					<ul className='hidden sm:flex '>
						<li className=' text-[#FB2E86] text-sm flex items-center'>
							English
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-3 h-3 ml-1'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M19.5 8.25l-7.5 7.5-7.5-7.5'
									/>
								</svg>
							</span>
						</li>
						<li className='ml-3 text-sm flex items-center'>Pages</li>
						<li className='ml-3 text-sm flex items-center'>Products</li>
						<li className='ml-3 text-sm flex items-center'>Blog</li>
						<li className='ml-3 text-sm flex items-center'>shop</li>
						<li className='ml-3 text-sm flex items-center'>contact</li>
					</ul>
					<div className='sm:hidden '>
						<Dropdown label='' size='sm'>
							<Dropdown.Item>English</Dropdown.Item>
							<Dropdown.Item>Pages</Dropdown.Item>
							<Dropdown.Item>Blog</Dropdown.Item>
							<Dropdown.Item>shop</Dropdown.Item>
							<Dropdown.Item>contact</Dropdown.Item>
						</Dropdown>
					</div>
				</div>
				<div className='flex'>
					<input
						type='search'
						className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#FB2E86] transition ease-in-out m-0 focus:text-[FB2E86] focus:bg-white focus:border-[#FB2E86] focus:outline-none'
						placeholder='Search'
						aria-label='Search'
						aria-describedby='button-addon2'
					/>
					<button className='bg-[#FB2E86] px-2 py-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 text-white'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
					</button>
				</div>
			</div>
		</>
	);
};

export default Navbar;
