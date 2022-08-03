import React from 'react';
import { ITag } from '../../interfaces';

type TagType = {
	text: string;
	background?: string;
};

const Tag = (tag: TagType) => {
	return (
		<p
			style={{
				maxHeight: '2.8rem',
				background: `${tag.background}`,
				padding: '0.6rem 1.8rem 0.6rem 2.6rem',
				borderRadius: '0.8rem',
				fontSize: '1.2rem',
				fontWeight: '700',
				color: '#FCFCFC',
			}}
		>
			<svg
				width="5"
				height="4"
				viewBox="0 0 5 4"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{ marginRight: '6px', marginBottom: '2px' }}
			>
				<circle cx="2.5" cy="2" r="2" fill="#FCFCFC" />
			</svg>
			{tag.text}
		</p>
	);
};

export default Tag;
