import styled from 'styled-components';

export const SvgHeader = styled.div`
	display: flex;
	position: relative;
	margin-bottom: 0.8rem;

	.responsive {
		width: 100%;
		height: auto;
	}
`;

export const LexioDiv = styled.p`
	font-weight: 700;
	font-size: 3rem;
	line-height: 3.5rem;
	color: ${props => props.theme.colors.offWhite};
	display: flex;
	flex-direction: row;
	position: absolute;
	margin-left: 5%;
	margin-top: 3%;

	@media screen and (max-width: 425px) {
		margin-top: 0rem;
		font-size: 1.5rem;
		left: 4rem;
	}
`;

export const Div = styled.div`
	display: flex;
	position: absolute;
	font-weight: 700;
	font-size: 3.5rem;
	margin-left: 75%;
	margin-top: 2.5%;

	color: ${props => props.theme.colors.offWhite};

	@media screen and (max-width: 425px) {
		margin-top: 1%;
		font-size: 2rem;
	}
`;

export const Text = styled.div`
	display: flex;
	position: absolute;
	color: ${props => props.theme.colors.offWhite};
	font-weight: 700;
	font-size: 1.5rem;
	margin-left: 78%;
	margin-top: 3.5%;

	@media screen and (max-width: 425px) {
		margin-top: 1%;
		font-size: 1rem;
	}
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

export const EventBar = styled.div`
	display: flex;
	max-width: 139.4rem;
	margin: auto;
	position: relative;

	.SubheaderSVG {
		width: 100%;
		height: auto;
	}

	.CalendarSVG {
		width: 4%;
		height: auto;
		display: flex;
		position: absolute;
		margin-left: 70%;
		margin-top: 2.5%;
	}
`;
