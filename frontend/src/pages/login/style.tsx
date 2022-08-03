import styled from 'styled-components';

export const Title = styled.h1`
	color: ${props => props.theme.colors.text};
	font-size: 3.6rem;
	font-weight: 700;
	line-height: 4.5rem;
	letter-spacing: 0rem;
	text-align: left;
`;

export const InputStyle = styled.div`
	display: flex;
	flex-direction: column;
	input {
		font-family: ${props => props.theme.fonts.secondaryFont};
		font-size: 1.4rem;
		font-weight: 700;
		line-height: 1.6rem;
		letter-spacing: 0.02rem;
		text-align: left;

		&:focus-visible {
			outline: none;
		}
	}
	input[type='text'] {
		padding: 1.7rem 2rem 0rem 0rem;
	}

	p {
		position: absolute;
		left: 1.6rem;
		bottom: 5.2rem;
	}
`;

export const P = styled.p`
	color: ${props => props.theme.colors.label};
	font-family: ${props => props.theme.fonts.secondaryFont};
`;

export const Left = styled.div`
	.logo {
		max-width: 72.5rem;
		@media screen and (max-width: 768px) {
			display: none;
		}
		@media screen and (max-width: 1024px) {
			width: 360px;
		}
	}
	.LexioAlt {
		display: none;
		@media screen and (max-width: 768px) {
			display: flex;
		}
	}
`;

export const Right = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 6.2rem;
	margin-top: 4rem;
	max-width: 58rem;

	@media screen and (max-width: 768px) {
		margin-left: 0rem;
		margin: auto;
	}

	button {
		font-family: ${props => props.theme.fonts.font};
		font-weight: 900;
		align-self: end;
		@media screen and (max-width: 768px) {
			width: 100% !important;
		}
	}
`;

export const Div = styled.div`
	display: flex;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		margin-top: 3rem;
	}
`;
