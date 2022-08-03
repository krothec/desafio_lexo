import { HTMLAttributes, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	value: string;
	placeholder?: string;
	width?: string;
	title?: string;
	subtitle?: string;
	disabled?: boolean;
	height?: string;
	border?: string;
	radius?: string;
	padding?: string;
	margin?: string;
	type?: string;
	background?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
	name,
	width,
	placeholder,
	height,
	border,
	radius,
	padding,
	value,
	onChange,
	margin,
	type,
	background,
}) => {
	return (
		<input
			placeholder={placeholder}
			value={value}
			name={name}
			onChange={onChange}
			type={type}
			style={{
				width,
				height,
				border,
				borderRadius: radius,
				padding,
				margin,
				background,
			}}
		></input>
	);
};
export default Input;
