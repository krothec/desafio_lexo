import { useContext, useEffect } from 'react';
import { api } from '../../services/api';
import { PanelContext } from '../../context/panelContext';

const Cards: React.FC = () => {
	const context = useContext(PanelContext);

	useEffect(() => {
		context.getEvents();
	}, []);

	useEffect(() => {
		context.getDocs();
	}, []);

	return (
		<>
			<h1>Painel de cards</h1>
		</>
	);
};

export default Cards;
