import leave  from "../assets/leaves.png"

const Card = () => {
  return (
		<main>
			<div
				className='flex justify-center items-center mt-10'>
				<div>
					<img src={leave} alt='leave' />
				</div>
				<div>
					<h2 className='mission' style={{marginTop:"-20px"}}>Mission and Goals</h2>
				</div>
				<div>
					<img src={leave} alt='leave' />
				</div>
			</div>
		</main>
	);
}

export default Card
