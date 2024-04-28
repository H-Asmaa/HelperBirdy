import leave  from "../assets/leaves.png"

const Card = () => {
  return (
		<main className='flex justify-between items-center'>
			<div>
				<img src={leave} alt='leave' />
			</div>
			<div>
				<img src={leave} alt='leave' />
			</div>
		</main>
	);
}

export default Card
