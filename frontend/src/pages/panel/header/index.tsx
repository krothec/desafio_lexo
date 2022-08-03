import { useContext } from 'react';
import HeaderSvg from '../../../assets/header.svg';
import SubHeaderSvg from '../../../assets/subHeader.svg';
import Calendar from '../../../assets/calendar.svg';
import { SvgHeader, LexioDiv, Div, Text, Exit, EventBar } from './style';
import { PanelContext } from '../../../context/panelContext';
import { AuthContext } from '../../../context/authContext';

const Header: React.FC = () => {
	const context = useContext(PanelContext);
	const contextAuth = useContext(AuthContext);

	return (
		<>
			<SvgHeader>
				<img className="responsive" src={HeaderSvg} alt="Menu do usuário" />
				<Exit onClick={() => contextAuth.logout()} />
			</SvgHeader>
			<EventBar className="EventBar">
				<img
					src={SubHeaderSvg}
					className="SubheaderSVG"
					alt="Menu de Eventos"
				/>
				<LexioDiv>Lexio Teste</LexioDiv>
				<img
					src={Calendar}
					className="CalendarSVG"
					alt="Calendário de Eventos"
				/>
				<Div>{context.listEvents.length}</Div>
				<Text>Eventos da semana</Text>
			</EventBar>
		</>
	);
};

export default Header;
