/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useEffect, useState } from 'react';
import { IEvents, IDocs } from '../interfaces';

import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

type PanelContextProps = {
	children: ReactNode;
};

type PanelContextType = {
	listEvents: IEvents[];
	listDocs: IDocs[];
	getEvents: () => void;
	getDocs: () => void;
};

const defaultValue = {
	listEvents: [],
	listDocs: [],
	getEvents: () => {},
	getDocs: () => {},
};

export const PanelContext = createContext<PanelContextType>(defaultValue);

export const PanelContextProvider = ({ children }: PanelContextProps) => {
	const navigate = useNavigate();
	const [listEvents, setListEvents] = useState(defaultValue.listEvents);
	const [listDocs, setListDocs] = useState(defaultValue.listDocs);

	const token = localStorage.getItem('token');
	const parseToken = token ? JSON.parse(token) : '';

	async function getEvents() {
		console.log(parseToken);
		const resp = await api.get('/events', {
			headers: {
				Authorization: `${parseToken}`,
			},
		});
		if (resp.data) {
			setListEvents(resp.data);
		}
	}

	async function getDocs() {
		console.log(parseToken);
		const resp = await api.get('/documents', {
			headers: {
				Authorization: `${parseToken}`,
			},
		});
		if (resp.data) {
			setListDocs(resp.data);
		}
	}

	return (
		<PanelContext.Provider
			value={{
				listEvents,
				listDocs,
				getEvents,
				getDocs,
			}}
		>
			{children}
		</PanelContext.Provider>
	);
};
