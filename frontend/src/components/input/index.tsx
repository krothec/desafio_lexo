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
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
	placeholder,
	name,
	width,
	title,
	subtitle,
	height,
	border,
	radius,
	padding,
	value,
	onChange,
	margin,
	type,
}) => {
	return (
		<div style={{ position: 'relative' }}>
			<p>{title}</p>
			<input
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
				}}
			></input>
		</div>
	);
};
export default Input;
