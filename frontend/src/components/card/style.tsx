import styled from 'styled-components';

export const Card = styled.section`
	max-width: 131.3rem;
	max-height: 7.9rem;
	border-radius: 1.6rem;
	background-color: ${props => props.theme.colors.lightBackground};
	display: flex;
	margin: auto;
	margin-top: 0.7rem;
	margin-bottom: 0.7rem;
	flex-direction: row;
	align-items: center;
`;

export const LeftArea = styled.div`
	display: flex;
	width: 26rem;
	padding: 1.9rem 0rem 1.8rem 2rem;

	h1 {
		color: ${props => props.theme.colors.label};
		font-weight: 700;
		font-size: 1.4rem;
		font-family: ${props => props.theme.fonts.secondaryFont};
		letter-spacing: 0.1rem;
		margin: 0rem;
	}

	h2 {
		color: ${props => props.theme.colors.gray};
		font-weight: 400;
		font-size: 1.2rem;
		letter-spacing: 0.1rem;
		margin: 0rem;
	}
`;
export const TagArea = styled.div`
	display: flex;
	width: 30rem;
	align-items: center;
	flex-direction: row;
	justify-content: center;
`;
export const ObjectArea = styled.div`
	width: 28.7rem;
	padding: 2.5rem 0rem 2.5rem 0rem;
	font-weight: 600;
	font-size: 1.2rem;
	line-height: 1.6rem;
	display: flex;
	align-items: center;
	letter-spacing: 0.1rem;
	span {
		color: ${props => props.theme.colors.text};
	}
	p {
		color: ${props => props.theme.colors.label};
	}
`;
export const PartArea = styled.div`
	display: flex;
	width: 20rem;
	margin-left: 10rem;
	background: #f5f5f5;
	align-items: flex-start;
	flex-direction: column;
	justify-content: space-between;
	padding: 0.9rem 0rem 1rem 0.9rem;
	position: relative;

	.partes {
		font-weight: 700;
		margin: 0rem;
		font-size: 1.2rem;
		line-height: 1.6rem;
		margin-bottom: 1rem;
		color: ${props => props.theme.colors.label};
	}
`;

export const AvatarRound = styled.div`
	display: inline-block;
	vertical-align: middle;
	position: relative;
	background-color: rgba(0, 0, 0, 0.3);
	color: #fff;
	border-radius: 50%;
	height: 3.5rem;
	width: 3.5rem;
	margin-right: 0.7rem;
`;

export const Letters = styled.p`
	left: 50%;
	position: absolute;
	transform: translate(-50%, -50%);
	color: ${props => props.theme.colors.text};
	font-weight: 700;
`;

export const Div = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;

export const SVG = styled.div`
	rect {
		margin-left: '60px';
		color: '#6C7892';
	}
`;
