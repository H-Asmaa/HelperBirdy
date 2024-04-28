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
      <div>
        <h2 className="mission">Mission and Goals</h2>
      </div>
		</main>
	);
}

export default Card
