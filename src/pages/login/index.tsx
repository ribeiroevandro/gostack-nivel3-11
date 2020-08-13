import React from 'react';
import { Image } from 'react-native';

import InputComponente from '../../components/input';
import BotaoComponente from '../../components/botao';
import { Container, Titulo } from './styles';

import logoImagem from '../../assets/logo.png';

const Login: React.FC = () => {
	return (
		<Container>
			<Image source={logoImagem} />

			<Titulo>Faça seu login</Titulo>

			<InputComponente nome="email" icone="mail" placeholder="E-mail" />
			<InputComponente nome="senha" icone="lock" placeholder="Senha" />

			<BotaoComponente
				onPress={() => {
					console.log('TE LIGUEI...');
				}}
			>
				Entrar
			</BotaoComponente>
		</Container>
	);
};

export default Login;
