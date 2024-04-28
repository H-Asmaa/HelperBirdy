import leave  from "../assets/leaves.png"

const Card = () => {
  return (
		<main>
			<div className='flex justify-between items-center'>
				<div>
					<img src={leave} alt='leave' />
				</div>
				<div>
					<img src={leave} alt='leave' />
				</div>
      </div>
      
		</main>
	);
}

export default Card
