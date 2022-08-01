import Header from './header';
import { PanelContextProvider, PanelContext } from '../../context/panelContext';
import { AuthContext } from '../../context/authContext';
import { useContext, useEffect } from 'react';
import { api } from '../../services/api';
import Cards from '../cards';

const Panel: React.FC = () => {
	const panelContext = useContext(PanelContext);
	const authContext = useContext(AuthContext);

	return (
		<>
			<PanelContextProvider>
				<Header />
				<Cards />
			</PanelContextProvider>
		</>
	);
};

export default Panel;
