import { ChangeEvent, useContext, useState } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import { IUser } from '../../interfaces';
import { InputStyle, Title, P, Left, Right, Div } from './style';
import { AuthContext } from '../../context/authContext';
import { useTheme } from 'styled-components';
import Main from '../../assets/main.svg';
import Lexio from '../../assets/lexio.svg';

interface IProps {
	onLogin?: (login: IUser) => void;
}

const initLogin = {
	email: '',
	password: '',
};

const Login: React.FC<IProps> = () => {
	const [user, setUser] = useState(initLogin);
	const context = useContext(AuthContext);
	const theme = useTheme();

	const onFormSubmit = () => {
		context.handleLogin(user);
	};
	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};
	return (
		<Div>
			<Left>
				<img className="logo" src={Main} alt="Lexio" />
				<img className="LexioAlt" src={Lexio} alt="Lexio alternativo" />
			</Left>
			<Right>
				<Title>Bem vindo(a)!</Title>
				<P>
					Crie, assine e gerencie contratos como nunca antes!
					<br />
					<strong>Comece agora!</strong>
				</P>
				<InputStyle>
					<Input
						type="text"
						placeholder="Email"
						name="email"
						value={user.email}
						onChange={onInputChange}
						height="5.6rem"
						border="none"
						title="Email"
						padding="0rem 1.6rem 0rem 1.6rem"
						margin="0rem 0rem 3.1rem 0rem"
					/>
					<Input
						type="text"
						placeholder="Senha"
						name="password"
						value={user.password}
						onChange={onInputChange}
						height="5.6rem"
						border="none"
						title="Email"
						padding="0rem 1.6rem 0rem 1.6rem"
						margin="0rem 0rem 3.1rem 0rem"
					/>
				</InputStyle>
				<Button
					title="Login"
					height="4.8rem"
					width="20.6rem"
					radius="1.2rem"
					padding="1.1rem 1.6rem 1.1rem 1.6rem"
					border="none"
					backgroundColor={`${theme.colors.yellow}`}
					boxShadow="0rem 0.8rem 1.6rem rgba(17, 17, 17, 0.1)"
					onClick={() => onFormSubmit()}
				/>
			</Right>
		</Div>
	);
};

export default Login;
