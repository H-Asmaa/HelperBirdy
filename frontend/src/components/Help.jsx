import { BsFillArrowUpSquareFill } from "react-icons/bs";
import Button from "./Button"


const Help = () => {
  return (
		
			<div className=' help-container'>
				<div className='flex flex-col items-center justify-center'>
					<h3 className='help-title'>Be as helpful as you want to be</h3>
					<a href='/donate' className='shadow-2xl'>
						<Button value='Join Help Birdy' className='helpbtn' />
					</a>
        </div>
        <a href='#'>
				<div className='flex justify-end items-end sticky'>
					<BsFillArrowUpSquareFill className='text-yellow-900 text-2xl lg:text-3xl' />
				</div>
			</a>
    </div>
		);
}

export default Help
