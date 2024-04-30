import { useState } from 'react';
// import leave from '../assets/leaves.png';
import { Card } from 'flowbite-react';
import { data } from '../mission' 

const Card1 = () => {
	const [missions]=useState(data)
	return (
		<main className='py-8 lg:py-12 max-w-7xl mx-auto'>
			<div className='flex justify-center items-center'>
				{/* <div>
					<img src={leave} alt='leave' className='h-40' />
				</div> */}
				<div>
					<h2 className='mission'>Mission & Goals</h2>
					<div className='flex justify-center'>
						<Card
							href='#'
							className='max-w-2xl cardTop mb-6 scale-in-top mx-4 lg:mx-0'>
							<p className='font-normal text-center'>
								The mission is to help people around the world in their quest to
								help people in need
							</p>
						</Card>
					</div>
					<div className='grid md:grid-cols-3 gap-4 lg:gap-8'>
						{missions.map((mission) => (
							<div key={mission.id}>
								<Card
									href='#'
									className='cardTop mb-6 5 scale-in-top mx-4 lg:mx-0'>
									<h2 className='font-normal text-center'>{mission.title}</h2>
									<hr />
									<p>{mission.text}</p>
								</Card>
							</div>
						))}
					</div>
				</div>
				{/* <div>
					<img src={leave} alt='leave' />
				</div> */}
			</div>
		</main>
	);
};

export default Card1;
