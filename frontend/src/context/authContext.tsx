/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useEffect, useState } from 'react';
import { IUser } from '../interfaces';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';

type AuthContextProps = {
	children: ReactNode;
};

type AuthContextType = {
	user: IUser | null;
	authenticated: boolean;
	loading: boolean;
	handleLogin: (user: IUser) => void;
	logout: () => void;
};

const defaultValue = {
	user: {
		email: '',
		password: '',
	},
	loading: true,
	authenticated: false,
	handleLogin: () => {},
	logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultValue);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
	const navigate = useNavigate();
	const [user, onSetUser] = useState(defaultValue.user);
	const [authenticated, onSetAuth] = useState(defaultValue.authenticated);
	const [loading, setLoading] = useState(true);

	useEffect((): void => {
		const recoveredUser = localStorage.getItem('user');
		const recoveredToken = localStorage.getItem('token');

		if (recoveredToken) {
			api.defaults.headers.common['Authorization'] = `Bearer ${recoveredToken}`;
			const parseUser = recoveredUser ? JSON.parse(recoveredUser) : '';
			onSetUser(parseUser);
			onSetAuth(true);
		} else {
			navigate('/');
		}

		setLoading(false);
	}, []);

	async function handleLogin(user: IUser): Promise<void> {
		const params = {
			email: user.email,
			password: user.password,
		};
		await api
			.post('/login', params)
			.then(function (response: AxiosResponse<any, any>): void {
				if (response.data) {
					localStorage.setItem('user', JSON.stringify(params));
					localStorage.setItem('token', JSON.stringify(response.data.token));
					api.defaults.headers.common[
						'Authorization'
					] = `Bearer ${response.data.token}`;
					onSetAuth(true);
					onSetUser(params);
					navigate('/panel');
				} else {
					console.error();
				}
			});
	}

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		api.defaults.headers.common['Authorization'] = '';
		navigate('/');
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				authenticated,
				handleLogin,
				loading,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
