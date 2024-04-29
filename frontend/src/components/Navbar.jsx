import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import honesty from '../assets/Honesty.png';
import logo from '../assets/HelperBirdy.png';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	function Modal() {
		setOpen(!open);
	}

	return (
		<header className='bg-white lg:bg-emerald-800'>
			<nav className='flex justify-between items-center xl:max-7xl xl:mx-auto py-5 px-[8%] w-full flex-wrap'>
				<div className='hidden lg:block'>
					<a href='/' className='flex items-center cursor-pointer mt-2'>
						<img
							src={logo}
							alt='the logo of helperbird which shows the context of the application'
							className='w-20'
						/>
						<h1 className='text-2xl font-semibold logo'>HelperBirdy</h1>
					</a>
				</div>

				<FiMenu
					className='lg:hidden block cursor-pointer h-6 w-6'
					onClick={Modal}
				/>
				<div
					className={`lg:flex lg:items-center lg:w-auto w-full ${
						open ? 'block' : 'hidden'
					}`}>
					<ul className='bg-yellow lg:flex lg:justify-between items-center mt-4 lg:mt-0'>
						<li className='list'>
							<a href='/'>Home</a>
						</li>
						<li className='list ml-0 lg:ml-4'>
							<a href='/queue'>Queue</a>
						</li>
						<li className='list ml-0 lg:ml-4'>
							<a href='/news'>NewsLetter</a>
						</li>
						<li className='list ml-0 lg:ml-4'>
							<a href='/login'>Login</a>
						</li>
						<li className='list ml-0 lg:ml-4'>
							<a href='/signup'>Signup</a>
						</li>
					</ul>
				</div>
				<button className='flex items-center NavBtn'>
					<img src={honesty} alt='a helping hand' className='w-10 mr-1' />
					<span>Donate</span>
				</button>
			</nav>
		</header>
	);
}
