import Navbar from '../components/Navbar';
import { useState } from 'react';
import { data } from '../news';
import Footer from '../components/Footer';
import Button from '../components/Button';

const News = () => {
	const [news] = useState(data);

	return (
		<>
			<div className='bg-emerald-800'>
				<Navbar />
				<div className='max-w-5xl mx-auto h-full'>
					<h2 className='queueTitle'>POST QUEUE</h2>
					<div className='queueContainer'>
						{news.map((item) => (
							<div key={item.id} className='queueholder p-3'>
								<div className='flex justify-end items-end sticky'>
									<img
										src={item.img1}
										alt='bookmark'
										className='w-12 hidden lg:block'
									/>
								</div>
								<div className='lg:text-2xl font-bold mb-6'>{item.title}</div>
								<div className='grid md:grid-cols-2'>
									<div className='pt-5'>
										<p className='text-justify pb-3 '>{item.text1}</p>
										<p className='text-justify'>{item.text2}</p>
										<Button
											value='Read'
											className='bg-green-400 text-white px-3 py-2 rounded-full mt-4'
										/>
									</div>
									<div>
										<img
											src={item.img2}
											alt='man'
											className='ml-14 h-72 hidden lg:block'
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default News;
