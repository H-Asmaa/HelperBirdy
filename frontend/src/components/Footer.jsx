import honesty from '../assets/Honesty.png';
import birdy from '../assets/HelperBirdy.png';
import phone from '../assets/Phone.png'
import location from '../assets/location.png'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='flex items-center p-8'>
				<div className='flex flex-col items-center'>
					<div className='flex items-center'>
						<img src={birdy} alt='logo' className='w-16 pt-2' />
						<h2 className='footer-title'>HelperBirdy</h2>
					</div>
					<div className='lg:border-r-2 border-gray-200 pb-4 text-justify'>
						<p className='footer-text'>
							Welcome to HelperBird, where passion meets purpose! Our platform
							connects volunteers with organizations and causes in need,
							empowering individuals to make a meaningful impact with their
							skills and expertise.
						</p>
					</div>
				</div>
				<div className='footer-list'>
					<div className='mr-8 hidden lg:block'>
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
					<div className='ml-[500px]'>
						<button className='flex items-center footerBtn'>
							<img src={honesty} alt='a helping hand' className='w-10 ml-2' />
							Donate
						</button>
					</div>
				</div>
			</div>
			<hr />
			<div className='footer-Details'>
				<div className='flex items-center mb-4 lg:mb-0'>
					<img src={phone} alt='phone map pin' className='w-8' />
					<p>123456789</p>
				</div>
				<div className='flex items-center  mb-4 lg:mb-0'>
					<img src={location} alt='location' className='w-8' />
					<p>123 Main Street Lumumba Town Savannah Province Nairobi, Kenya</p>
				</div>
				<div>
					&copy; {new Date().getFullYear()}{' '}
					<span className='font-bold footer-span'>HelperBirdy</span>. All rights
					reserved.
				</div>
			</div>
		</div>
	);
};

export default Footer;
