import { MagnifyingGlass } from 'phosphor-react';
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
	icon?: boolean;
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
	icon,
}) => {
	return (
		<div
			style={{
				display: 'flex',
				position: 'relative',
			}}
		>
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
			{icon && (
				<MagnifyingGlass
					size={32}
					weight="thin"
					style={{
						position: 'absolute',
						right: 0,
						marginTop: '1rem',
						marginRight: '1rem',
					}}
				/>
			)}
		</div>
	);
};
export default Input;
