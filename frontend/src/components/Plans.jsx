import { useState } from "react";
import { data } from "../plan";


const Plans = () => {
	const [plans]=useState(data)
	return (
		<main className='bg-emerald-800 text-white'>
			<div className='max-w-7xl mx-auto p-10'>
				<div className='mb-2'>
					<h2 className='plan1-title'>Our Plans</h2>
					<p>
						We want help people with different experiences and different
						backgrounds to reach communities in need for help. <br /> You can
						offer your help in different specializations.
					</p>
				</div>
				<div>
					{plans.map((plan) => (
						<div key={plan.id}>
							<div className='flex items-center'>
								<img
									src={plan.img}
									alt='our plan'
									className='rounded-full plan w-8 mt-2 hidden lg:block'
								/>
								<h3 className='plan2-title'>{plan.title}</h3>
							</div>
							<div className='lg:ml-12 text-justify'>
								<p>{plan.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default Plans;
