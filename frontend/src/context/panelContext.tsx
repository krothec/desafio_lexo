/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useEffect, useState } from 'react';
import { IEvents, IDocs } from '../interfaces';

import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const defaultDocs: Array<IDocs> = [];
const defaultEvents: Array<IEvents> = [];

type PanelContextProps = {
	children: ReactNode;
};

type PanelContextType = {
	listEvents: IEvents[];
	listDocs: IDocs[];
	doc: IDocs;
	getEvents: () => void;
	getDocs: () => void;
	onSearchDoc: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const defaultValue = {
	listEvents: defaultEvents,
	listDocs: defaultDocs,
	doc: {
		id: 0,
		title: '',
		sub_title: '',
		status: '',
		parties: [],
		object: '',
	},
	getEvents: () => {},
	getDocs: () => {},
	onSearchDoc: (e: React.ChangeEvent<HTMLInputElement>) => {},
};

export const PanelContext = createContext<PanelContextType>(defaultValue);

export const PanelContextProvider = ({ children }: PanelContextProps) => {
	const navigate = useNavigate();
	const [listEvents, setListEvents] = useState(defaultValue.listEvents);
	const [listDocs, setListDocs] = useState(defaultValue.listDocs);
	const [doc, onSetDoc] = useState(defaultValue.doc);

	const token = localStorage.getItem('token');
	const parseToken = token ? JSON.parse(token) : '';

	async function getEvents() {
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
		const resp = await api.get('/documents', {
			headers: {
				Authorization: `${parseToken}`,
			},
		});
		if (resp.data) {
			setListDocs(resp.data);
		}
	}

	const onSearchDoc = (e: React.ChangeEvent<HTMLInputElement>) => {
		const keyword = e.target.value.toLowerCase();
		const newListDocs: IDocs[] = [];
		if (keyword !== '') {
			listDocs.filter(doc => {
				if (doc.title.toLowerCase().startsWith(keyword.toLowerCase())) {
					newListDocs.push(doc);
				}
				if (doc.sub_title.toLowerCase().startsWith(keyword.toLowerCase())) {
					newListDocs.push(doc);
				}
				if (doc.status.toLowerCase().startsWith(keyword.toLowerCase())) {
					newListDocs.push(doc);
				}
				if (doc.object.toLowerCase().startsWith(keyword.toLowerCase())) {
					newListDocs.push(doc);
				}
				doc.parties.filter(part => {
					if (part.toLowerCase().startsWith(keyword.toLowerCase())) {
						newListDocs.push(doc);
					}
				});
			});
			const res = Array.from(new Set(newListDocs));
			setListDocs(res);
		} else {
			getDocs();
		}
	};

	return (
		<PanelContext.Provider
			value={{
				listEvents,
				listDocs,
				getEvents,
				getDocs,
				onSearchDoc,
				doc,
			}}
		>
			{children}
		</PanelContext.Provider>
	);
};
