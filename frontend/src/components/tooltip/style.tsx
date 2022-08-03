import styled from 'styled-components';

export const ToolDiv = styled.div`
	display: flex;

	.Tooltip-Wrapper {
		display: flex;
	}

	.Tooltip-Tip {
		position: absolute;
		border-radius: 4px;
		transform: translateX(-50%);
		padding: 6px;
		color: ${props => props.theme.colors.lightBackground};
		background: ${props => props.theme.colors.label};
		font-size: 14px;
		font-family: sans-serif;
		line-height: 1;
		z-index: 100;
		white-space: nowrap;
	}

	.Tooltip-Tip::before {
		content: ' ';
		left: 50%;
		border: solid transparent;
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
		border-width: var(--tooltip-arrow-size);
		margin-left: calc(var(--tooltip-arrow-size) * -1);
	}

	.Tooltip-Tip.top {
		top: 0;
	}

	.Tooltip-Tip.top::before {
		top: 0;
		border-top-color: ${props => props.theme.colors.label};
	}
`;
