import Button from '../components/Button';
import Navbar from '../components/Navbar';
import man from '../assets/man.png';
import Footer from '../components/Footer';

const News = () => {
	return (
		<div>
			<Navbar />
			<div className='bg-emerald-800'>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-3xl font-bold text-white mb-4'>NewLetter</h2>
					<div className='flex items-center justify-center border border-gray-300  rounded-3xl queue'>
						<div className='mr-6'>
							<p className='font-bold text-xl mb-2 pl-3'>
								Rojer’s experience with volunteering
							</p>
							<p className='ml-6'>
								Welcome to HelperBird, where passion meets purpose! Our platform
								connects volunteers with organizations and causes in need,
								empowering individuals to make a meaningful impact with their
								skills and expertise.
							</p>
						</div>
						<img src={man} alt='news' className='w-64' />
					</div>
					<div className='mt-6 pb-4'>
						<Button
							value='Read'
							className='bg-green-400 text-white rounded-full p-2'
						/>
					</div>
				</div>
				<div className='max-w-7xl mx-auto'>
					
					<div className='flex items-center justify-center border border-gray-300 rounded-3xl queue'>
						<div className='mr-6'>
							<p className='font-bold text-xl mb-2 pl-3'>
								Rojer’s experience with volunteering
							</p>
							<p className='ml-6'>
								Welcome to HelperBird, where passion meets purpose! Our platform
								connects volunteers with organizations and causes in need,
								empowering individuals to make a meaningful impact with their
								skills and expertise.
							</p>
						</div>
						<img src={man} alt='news' className='w-64' />
					</div>
					<div className='mt-6 pb-4'>
						<Button
							value='Read'
							className='bg-green-400 text-white rounded-full p-2'
						/>
					</div>
				</div>
      </div>
      <Footer/>
		</div>
	);
};

export default News;
