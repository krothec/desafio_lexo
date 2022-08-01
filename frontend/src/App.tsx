import React, { ReactChild, ReactNode, SuspenseProps, useContext } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
	Navigate,
} from 'react-router-dom';

import { AuthContext, AuthContextProvider } from './context/authContext';
import { ThemeProvider } from 'styled-components';
import Login from './pages/login';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Panel from './pages/panel';

const App: React.FC = () => {
	const Private = ({ children }: any) => {
		const { authenticated, loading } = useContext(AuthContext);
		if (loading) {
			return <div>Carregando...</div>;
		}
		if (!authenticated) {
			return <Navigate to="/" />;
		}
		return children;
	};

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<AuthContextProvider>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route
							path="/panel"
							element={
								<Private>
									<Panel />
								</Private>
							}
						/>
					</Routes>
				</AuthContextProvider>
				<GlobalStyle />
			</ThemeProvider>
		</Router>
	);
};

export default App;
