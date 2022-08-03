import styled from 'styled-components';

export const SvgHeader = styled.div`
	position: relative;
	img {
		width: -webkit-fill-available;
	}
`;
export const SvgSubHeader = styled.div`
	position: relative;

	.SubheaderSVG {
		display: flex;
		max-width: 139.4rem;
		width: -webkit-fill-available;
		margin: auto;
		margin-top: 0.6rem;
		margin-left: 2.2rem;
		margin-right: 2.2rem;
	}

	.CalendarSVG {
		width: 4.7rem;
		display: flex;
		position: absolute;
		right: 22.6rem;
		top: 0;
		margin-top: 3.5rem;
	}
`;

export const LexioDiv = styled.p`
	font-weight: 700;
	font-size: 2.4rem;
	line-height: 3.3rem;
	color: ${props => props.theme.colors.offWhite};
	display: flex;
	flex-direction: row;
	position: absolute;
	top: 0;
	left: 7.2rem;
	margin-top: 4.2rem;
`;

export const Div = styled.div`
	display: flex;
	position: absolute;
	font-weight: 700;
	font-size: 3.6rem;
	right: 19.5rem;
	color: ${props => props.theme.colors.offWhite};
	top: 3.3rem;
`;

export const Text = styled.div`
	display: flex;
	position: absolute;
	color: ${props => props.theme.colors.offWhite};
	font-weight: 700;
	font-size: 1.3rem;
	top: 4rem;
	right: 11rem;
	width: 7.1rem;
`;

export const Exit = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	right: 0;
	background: transparent;
	height: 6.3rem;
	width: 13rem;
	cursor: pointer;
`;
