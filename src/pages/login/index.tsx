import React from 'react';
import { Image } from 'react-native';

import { Container } from './estilo';

import logoImagem from '../../assets/logo.png';

const Login: React.FC = () => {
	return (
		<Container>
			<Image source={logoImagem} />
		</Container>
	);
};

export default Login;
