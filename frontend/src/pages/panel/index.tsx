import Header from './header';
import { PanelContextProvider } from '../../context/panelContext';
import Cards from '../cards';

const Panel: React.FC = () => {
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
