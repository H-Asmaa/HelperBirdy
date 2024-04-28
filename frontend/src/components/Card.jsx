import leave  from "../assets/leaves.png"

const Card = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={leave} alt="leave" />
      </div>
    </div>
  )
}

export default Card
