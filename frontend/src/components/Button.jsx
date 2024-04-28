import PropTypes from 'prop-types';
const Button = ({ onClick, value, className, type }) => {
	return (
		<div>
			<button onClick={onClick} value={value} className={className} type={type}>
				{value}
			</button>
		</div>
	);
};

Button.propTypes = {
	value: PropTypes.string.isRequired, // value should be a string and is required
	className: PropTypes.string, // className is optional and should be a string
	type: PropTypes.oneOf(['button', 'submit', 'reset']), // type should be one of these values
	onClick: PropTypes.func, // onClick should be a function and is required
};

export default Button;
