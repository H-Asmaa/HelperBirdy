import leave from '../assets/leaves.png';
import { Card } from 'flowbite-react';

const Card1 = () => {
	return (
		<main>
			<div className='flex justify-center items-center mt-10'>
				<div>
					<img src={leave} alt='leave' />
				</div>
				<div>
					<h2 className='mission' style={{ marginTop: '-80px' }}>
						Mission and Goals
					</h2>
					<div className='flex justify-center'>
						<Card href='#' className='max-w-sm cardTop mb-6'>
							<p className='font-normal'>
								The mission is to help people around the world in their quest to
								help people in need
							</p>
						</Card>
					</div>
					<div className='grid md:grid-cols-3 gap-8'>
						<div className='flex flex-col items-center'>
							<Card href='#' className='max-w-sm cardTop'>
								<h5 className='text-xl font-bold tracking-tight text-black'>
									Volunteers from anywhere in the world
								</h5>
								<p className='font-normal'>
									The mission is to help people around the world in their quest
									to help people in need
								</p>
							</Card>
						</div>
						<div className='flex flex-col items-center'>
							<Card href='#' className='max-w-sm cardTop'>
								<h5 className='text-xl font-bold '>
									Connect to places in need of your help
								</h5>
								<p className='font-normal'>
									The mission is to help people around the world in their quest
									to help people in need
								</p>
							</Card>
						</div>
						<div className='flex flex-col items-center'>
							<Card href='#' className='max-w-sm cardTop'>
								<h5 className='text-xl font-bold '>Offer your expertise</h5>
								<p className='font-normal'>
									The mission is to help people around the world in their quest
									to help people in need
								</p>
							</Card>
						</div>
					</div>
				</div>
				<div>
					<img src={leave} alt='leave' />
				</div>
			</div>
		</main>
	);
};

export default Card1;
