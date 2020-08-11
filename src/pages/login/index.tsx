import React from 'react';
import { Image } from 'react-native';

import { Container, Titulo } from './estilo';

import logoImagem from '../../assets/logo.png';

const Login: React.FC = () => {
	return (
		<Container>
			<Image source={logoImagem} />

			<Titulo>Faça seu login</Titulo>
		</Container>
	);
};

export default Login;
