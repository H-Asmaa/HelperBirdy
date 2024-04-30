import wagon from '../assets/wagon.png';
import forward from '../assets/Forward.png';
import edu from "../assets/edu.png"
import climate from "../assets/Climate.png";
import Food from "../assets/Food.png";

const Plans = () => {
	return (
		<main className='bg-emerald-800 text-white'>
			<div className='max-w-7xl mx-auto p-10'>
				<div className='mb-2'>
					<h2 className='text-2xl'>Our Plans</h2>
					<p>
						communities in need for help. You can offer your help in different
						specializations.
					</p>
				</div>
				<div className='flex items-center mb-3'>
					<img
						src={wagon}
						alt='plans'
						className='p-2 w-8 rounded-full bg-yellow-900'
					/>
					<div className='ml-4'>
						<h3 className='flex items-center'>
							Health Care{' '}
							<span className='ml-3 pt-1'>
								<img src={forward} alt='forward' className='w-4' />
							</span>
						</h3>
						<p className='flex-cols text-justify '>
							Become a healthcare hero and lend your expertise to those in need!
							Whether you are a medical professional, therapist, or simply
							passionate about healthcare, Volunteer Match offers opportunities
							for you to make a difference.
						</p>
					</div>
				</div>
				<div className='flex items-center mb-3'>
					<img
						src={edu}
						alt='plans'
						className='p-2 w-8 rounded-full bg-yellow-900'
					/>
					<div className='ml-4'>
						<h3 className='flex items-center'>
							Education{' '}
							<span className='ml-3 pt-1'>
								<img src={forward} alt='forward' className='w-4' />
							</span>
						</h3>
						<p className='flex-cols text-justify '>
							Unlock the potential of future generations by volunteering for
							education initiatives. Whether you are a teacher, tutor, or
							passionate about learning, Volunteer Match offers opportunities to
							inspire and empower students.
						</p>
					</div>
				</div>
				<div className='flex items-center mb-3'>
					<img
						src={climate}
						alt='plans'
						className='p-2 w-8 rounded-full bg-yellow-900'
					/>
					<div className='ml-4'>
						<h3 className='flex items-center'>
							Climate Actions{' '}
							<span className='ml-3 pt-1'>
								<img src={forward} alt='forward' className='w-4' />
							</span>
						</h3>
						<p className='flex-cols text-justify '>
							Join the movement for a sustainable future by volunteering for
							climate action initiatives. Whether you are an environmental
							enthusiast, a conservationist, or simply passionate about
							protecting our planet, Volunteer Match provides opportunities to
							make a positive impact.
						</p>
					</div>
				</div>
				<div className='flex items-center'>
					<img
						src={Food}
						alt='plans'
						className='p-2 w-8 rounded-full bg-yellow-900'
					/>
					<div className='ml-4'>
						<h3 className='flex items-center'>
							Basic Needs{' '}
							<span className='ml-3 pt-1'>
								<img src={forward} alt='forward' className='w-4' />
							</span>
						</h3>
						<p className='flex-cols text-justify '>
							Make a direct impact by volunteering to support basic needs in
							your community. From food distribution to shelter assistance,
							Volunteer Match connects you with opportunities to provide vital
							support to those facing hardship.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Plans;
