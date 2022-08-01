import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title?: string;
	color?: string;
	height: string;
	width: string;
	border?: string;
	children?: React.ReactNode;
	radius?: string;
	margin?: string;
	backgroundColor?: string;
	showIcon?: boolean;
	icon?: string;
	padding?: string;
	boxShadow?: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	title,
	border,
	color,
	height,
	onClick,
	radius,
	width,
	margin,
	backgroundColor,
	padding,
	boxShadow,
	...props
}) => {
	return (
		<button
			{...props}
			onClick={() => onClick?.()}
			style={{
				backgroundColor,
				border,
				borderRadius: radius,
				height,
				width,
				margin,
				color,
				padding,
				boxShadow,
			}}
		>
			{title}
		</button>
	);
};

export default Button;
