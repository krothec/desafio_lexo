import React, { ReactNode, useState } from 'react';
import { ToolDiv } from './style';

type IProps = {
	content: ReactNode;
	direction: string;
	delay: any;
	children: ReactNode;
};

const Tooltip = (props: IProps) => {
	let timeout: string | number | NodeJS.Timeout | undefined;
	const [active, setActive] = useState(false);

	const showTip = () => {
		timeout = setTimeout(() => {
			setActive(true);
		}, props.delay || 400);
	};

	const hideTip = () => {
		clearInterval(timeout);
		setActive(false);
	};

	return (
		<ToolDiv
			className="Tooltip-Wrapper"
			onMouseEnter={showTip}
			onMouseLeave={hideTip}
		>
			{props.children}
			{active && (
				<div className={`Tooltip-Tip ${props.direction || 'top'}`}>
					{props.content}
				</div>
			)}
		</ToolDiv>
	);
};

export default Tooltip;
