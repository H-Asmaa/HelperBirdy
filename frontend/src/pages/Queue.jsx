import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { data } from '../queue';
import Button from '../components/Button';

const Queue = () => {
	const [queues] = useState(data);
	return (
		<div className='bg-emerald-800'>
			<Navbar />
			<div className=' max-w-7xl mx-auto min-h-screen'>
				<h2 className='queueTitle'>POST QUEUE</h2>
				<div className='queueContainer'>
					{queues.map((queue) => (
						<div key={queue.id} className='queueholder'>
							<div className='flex justify-end items-end sticky '>
								<img
									src={queue.img1}
									alt='bookmark'
									className='w-12 hidden lg:block'
								/>
							</div>
							<div className='lg:flex items-center'>
								<img src={queue.img2} alt='volunteers' className='w-80' />
								<div className=' px-4 lg:px-0 ml-0 lg:ml-12'>
									<h3 className='font-bold text-lg lg:text-3xl pb-4 mt-4 lg:mt-0'>
										{queue.title}
									</h3>
									<p>{queue.text}</p>
									<div className='pb-4 lg:pb-0'>
										<Button value='View Post' className='queueBtn' />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Queue;
