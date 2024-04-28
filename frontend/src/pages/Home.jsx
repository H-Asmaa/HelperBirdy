import Button from "../components/Button";
import Navbar from "../components/Navbar"
import volunteer from "../assets/volunteers.png"
import Card from "../components/Card1";
import Plans from "../components/Plans";
import Help from "../components/Help";


const Home = () => {
  return (
		<>
			<Navbar />
			<main className='bg-emerald-800 '>
				<div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto p-10'>
					<section className='text-white text-justify ml-5'>
						<h2 className='head'>Your Contribution has an effect</h2>
						<p className='headPara'>
							Welcome to HelperBird, where passion meets purpose! Our platform
							connects volunteers with organizations and causes in need,
							empowering individuals to make a meaningful impact with their
							skills and expertise.
						</p>
						<a href='/donate'>
							<div className='mt-8'>
								<Button value='Watch Video' className='btnHome' />
							</div>
						</a>
					</section>
					<section className=' flex items-center justify-center'>
						<img src={volunteer} alt='volunteers' className='h-72' />
					</section>
				</div>
			</main>
			<Card />
			<Plans />
			<Help/>
		</>
	);
}

export default Home
