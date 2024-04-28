import Navbar from "../components/Navbar"

import post from "../assets/volunteers.png"
import Button from "../components/Button";
import Footer from "../components/Footer";



const Queue = () => {
  return (
		<div>
			<Navbar />
			<div className='bg-emerald-800 '>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-3xl font-bold text-white mb-4'>Post Queue</h2>
					<div className='flex items-center justify-center border border-gray-300 rounded-3xl queue'>
						<img src={post} alt='post' className='w-64' />
						<p className='ml-6'>
							Welcome to HelperBird, where passion meets purpose! Our platform
							connects volunteers with organizations and causes in need,
							empowering individuals to make a meaningful impact with their
							skills and expertise.
						</p>
					</div>
					<div className='mt-6 pb-4 '>
						<Button
							value='view post'
							className='bg-green-400 text-white rounded-full p-2'
						/>
					</div>
				</div>
			</div>
			<div className='bg-emerald-800 '>
				<div className='max-w-7xl mx-auto'>
					<div className='flex items-center justify-center border border-gray-300 rounded-3xl queue'>
						<img src={post} alt='post' className='w-64' />
						<p className='ml-6'>
							Welcome to HelperBird, where passion meets purpose! Our platform
							connects volunteers with organizations and causes in need,
							empowering individuals to make a meaningful impact with their
							skills and expertise.
						</p>
					</div>
					<div className='mt-6 pb-4'>
						<Button
							value='view post'
							className='bg-green-400 text-white rounded-full p-2'
						/>
					</div>
				</div>
			</div>
			<div className='bg-emerald-800 '>
				<div className='max-w-7xl mx-auto'>
					<div className='flex items-center justify-center border border-gray-300 rounded-3xl queue'>
						<img src={post} alt='post' className='w-64' />
						<p className='ml-6'>
							Welcome to HelperBird, where passion meets purpose! Our platform
							connects volunteers with organizations and causes in need,
							empowering individuals to make a meaningful impact with their
							skills and expertise.
						</p>
					</div>
					<div className='mt-6 pb-4'>
						<Button
							value='view post'
							className='bg-green-400 text-white rounded-full p-2'
						/>
					</div>
				</div>
			</div>
			<div className='bg-emerald-800 '>
				<div className='max-w-7xl mx-auto'>
					
					<div className='flex items-center justify-center border border-gray-300 rounded-3xl queue'>
						<img src={post} alt='post' className='w-64' />
						<p className='ml-6'>
							Welcome to HelperBird, where passion meets purpose! Our platform
							connects volunteers with organizations and causes in need,
							empowering individuals to make a meaningful impact with their
							skills and expertise.
						</p>
					</div>
					<div className='mt-6 pb-4'>
						<Button
							value='view post'
							className='bg-green-400 text-white rounded-full p-2'
						/>
					</div>
				</div>
      </div>
      <Footer/>
		</div>
	);
}

export default Queue
