import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextoInput, Icone } from './styles';

interface InputPropriedade extends TextInputProps {
	nome: string;
	icone: string;
}

const Input: React.FC<InputPropriedade> = ({ nome, icone, ...rest }) => (
	<Container>
		<Icone name={icone} size={20} color="#666360" />

		{/* keyboardAppearance DEFINE O TEMA DO TECLADO */}
		<TextoInput keyboardAppearance="dark" placeholderTextColor="#666360" {...rest} />
	</Container>
);

export default Input;
