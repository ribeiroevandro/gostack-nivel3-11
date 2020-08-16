import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextoInput, Icone } from './styles';

interface InputPropriedade extends TextInputProps {
	nome: string;
	icone: string;
}

interface InputvalorReferencia {
	valor: string;
}

const Input: React.FC<InputPropriedade> = ({ nome, icone, ...rest }) => {
	const inputElementoRef = useRef<any>(null);

	const { registerField, defaultValue = '', fieldName, error } = useField(nome);

	const inputValorRef = useRef<InputvalorReferencia>({ valor: defaultValue });

	useEffect(() => {
		registerField<string>({
			name: fieldName,
			ref: inputValorRef.current,
			path: 'valor',
			setValue(ref: any, valor) {
				inputValorRef.current.valor = valor;
				// VAI MUDAR VISUALMENTE O TEXTO DENTRO DO CAMPO
				inputElementoRef.current.setNativeProps({ text: valor });
			},
			// VAI APAGAR AS INFORMACOES QUANDO FOR SOLICITADO
			clearValue() {
				inputValorRef.current.valor = '';
				inputElementoRef.current.clear();
			},
		});
	}, [fieldName, registerField]);

	return (
		<Container>
			<Icone name={icone} size={20} color="#666360" />

			<TextoInput
				ref={inputElementoRef}
				// DEFINE O TEMA DO TECLADO
				keyboardAppearance="dark"
				// DEFINE A COR DO TEXTO DENTRO DO CAMPO
				placeholderTextColor="#666360"
				// VALOR QUE DEVE TER DENTRO AO INICIAR
				defaultValue={defaultValue}
				// FUNCAO QUE EXECUTA QUANDO O TEXTO DIGITADO MUDA
				onChangeText={valor => {
					// RECUPERA O VALOR SALVO
					inputValorRef.current.valor = valor;
				}}
				{...rest}
			/>
		</Container>
	);
};

export default Input;
