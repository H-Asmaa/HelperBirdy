import honesty from '../assets/Honesty.png';
import birdy from '../assets/HelperBirdy.png';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='flex items-center justify-around'>
				<div className='flex flex-col items-center'>
					<div className='flex items-center'>
						<img src={birdy} alt='logo' className='w-16 pt-2' />
						<h2 className='text-lg lg:text-2xl'>Help Birdy</h2>
					</div>
					<div>
						<p className='w-96 border-r-2 border-gray-200 pr-4 pb-4'>
							Welcome to HelperBird, where passion meets purpose! Our platform
							connects volunteers with organizations and causes in need,
							empowering individuals to make a meaningful impact with their
							skills and expertise.
						</p>
					</div>
				</div>

				<div className='flex items-center mr-10'>
					<div className='mr-8'>
						<ul className='flex flex-col'>
							<li className='link'>
								<a href='/'>Home</a>
							</li>
							<li className='link'>
								<a href='/queue'>Queue</a>
							</li>
							<li className='link'>
								<a href='/news'>NewsLetter</a>
							</li>
							<li className='link'>
								<a href='/login'>Login</a>
							</li>
							<li className='link'>
								<a href='/signup'>Signup</a>
							</li>
						</ul>
					</div>
					<button className='flex items-center NavBtn'>
						<img src={honesty} alt='a helping hand' className='w-10 ml-2' />
						Donate
					</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
