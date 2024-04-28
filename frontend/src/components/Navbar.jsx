import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import honesty from "../assets/Honesty.png"



export default function Navbar() {
	const [open, setOpen] = useState(false);

	function Modal() {
		setOpen(!open);
	}

	return (
		<header className='bg-emerald-800 text-white active:bg-yellow-700'>
			<div className='flex justify-between items-center xl:max-7xl xl:mx-auto py-5 px-[8%] w-full flex-wrap'>
				<a href='/'>
					<h1 className='flex lg:text-2xl items-center cursor-pointer logo'>
						HelperBirdy
					</h1>
				</a>
				<FiMenu
					className='lg:hidden block cursor-pointer h-6 w-6'
					onClick={Modal}
				/>
				<nav
					className={`lg:flex lg:items-center lg:w-auto w-full ${
						open ? 'block' : 'hidden'
					}`}>
					<ul className='lg:flex lg:justify-between items-center'>
						<li className='list'>
							<a href='/'>Home</a>
						</li>
						<li className='list'>
							<a href='/queue'>Queue</a>
						</li>
						<li className='list'>
							<a href='/news'>NewsLetter</a>
						</li>
						<li className='list'>
							<a href='/login'>Login</a>
						</li>
						<li className='list'>
							<a href='/signup'>Signup</a>
						</li>
					</ul>
				</nav>
				<button className='flex items-center NavBtn'>
					<img src={honesty} alt='a helping hand' className='w-10' />
					Donate
				</button>
			</div>
		</header>
	);
}
