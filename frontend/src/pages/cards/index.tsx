import React, { ChangeEvent, useState } from 'react';
import { useContext, useEffect } from 'react';
import CardComponent from '../../components/card';
import { PanelContext } from '../../context/panelContext';
import Input from '../../components/input';
import { Div } from './style';
import { MagnifyingGlass } from 'phosphor-react';

const Cards: React.FC = () => {
	const context = useContext(PanelContext);
	const [term, setTerm] = useState('');

	useEffect(() => {
		context.getEvents();
	}, []);

	useEffect(() => {
		context.getDocs();
	}, []);

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		context.onSearchDoc(e);
		setTerm(e.target.value);
	};

	return (
		<>
			<p aria-label="Painel de cards" />
			<Div>
				<Input
					placeholder="Buscar documento"
					width="76rem"
					height="3rem"
					border="1px solid #E2E4E9"
					radius="0.8rem"
					padding="8px 16px"
					background="#E2E4E9"
					value={term}
					onChange={onInputChange}
					name="name"
					icon={true}
				/>
			</Div>
			{context.listDocs.map((doc, idx) => {
				return <CardComponent key={idx.toString()} doc={doc} />;
			})}
		</>
	);
};

export default Cards;
