import { ChangeEvent, useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import HeaderSvg from '../../../assets/header.svg';
import SubHeaderSvg from '../../../assets/subHeader.svg';
import Calendar from '../../../assets/calendar.svg';
import { SvgHeader, SvgSubHeader } from './style';

const Header: React.FC = () => {
	const context = useContext(AuthContext);

	return (
		<>
			<SvgHeader>
				<img src={HeaderSvg} alt="Menu do usuário" />
			</SvgHeader>
			<SvgSubHeader>
				<img
					src={SubHeaderSvg}
					className="SubheaderSVG"
					alt="Menu de Eventos"
				/>
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
