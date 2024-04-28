import leave from "../assets/leaves.png"
import { Card } from "flowbite-react";

const Card1 = () => {
  return (
		<main>
			<div
				className='flex justify-center items-center mt-10'>
				<div>
					<img src={leave} alt='leave' />
				</div>
				<div>
          <h2 className='mission' style={{ marginTop: "-20px" }}>Mission and Goals</h2>
          <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  


				</div>
				<div>
					<img src={leave} alt='leave' />
				</div>
			</div>
		</main>
	);
}

export default Card1