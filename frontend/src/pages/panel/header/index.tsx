import { useContext } from 'react';
import HeaderSvg from '../../../assets/header.svg';
import SubHeaderSvg from '../../../assets/subHeader.svg';
import Calendar from '../../../assets/calendar.svg';
import { SvgHeader, SvgSubHeader, LexioDiv, Div, Text, Exit } from './style';
import { PanelContext } from '../../../context/panelContext';
import { AuthContext } from '../../../context/authContext';

const Header: React.FC = () => {
	const context = useContext(PanelContext);
	const contextAuth = useContext(AuthContext);

	return (
		<>
			<SvgHeader>
				<img src={HeaderSvg} alt="Menu do usuário" />
				<Exit onClick={() => contextAuth.logout()} />
			</SvgHeader>
			<SvgSubHeader>
				<img
					src={SubHeaderSvg}
					className="SubheaderSVG"
					alt="Menu de Eventos"
				/>
				<Div>{context.listEvents.length}</Div>
				<Text>Eventos da semana</Text>
				<LexioDiv>Lexio Teste</LexioDiv>
				<img
					src={Calendar}
					className="CalendarSVG"
					alt="Calendário de Eventos"
				/>
			</SvgSubHeader>
		</>
	);
};

export default Header;
