import React, { useRef } from 'react'; // SING IN
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import IconeFeather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import InputComponente from '../../components/input';
import BotaoComponente from '../../components/botao';
import { Container, Titulo, Voltar, VoltarTexto } from './styles';

import logoImagem from '../../assets/logo.png';

const Cadastro: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	const navegacao = useNavigation();

	return (
		<>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				// IDENTIFICA QUAL E O SISTEMA OPERACIONAL
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
				enabled
			>
				<ScrollView
					// FECHA O TECLADO AO CLICAR FORA DO CAMPO DE DIGITACAO
					keyboardShouldPersistTaps="handled"
					contentContainerStyle={{ flex: 1 }}
				>
					<Container>
						<Image source={logoImagem} />

						<View>
							<Titulo>Crie sua conta</Titulo>
						</View>

						<Form
							ref={formRef}
							onSubmit={data => {
								console.log(data);
							}}
						>
							<InputComponente nome="nome" icone="user" placeholder="Nome" />
							<InputComponente nome="email" icone="mail" placeholder="E-mail" />
							<InputComponente nome="senha" icone="lock" placeholder="Senha" />

							<BotaoComponente onPress={() => formRef.current?.submitForm()}>
								Entrar
							</BotaoComponente>
						</Form>
					</Container>
				</ScrollView>
			</KeyboardAvoidingView>

			<Voltar
				onPress={() => {
					// ENVIA PARA UMA PAGINA ESPECIFICA
					navegacao.navigate('LoginPagina');
				}}
			>
				<IconeFeather name="arrow-left" size={20} color="#ffffff" />

				<VoltarTexto>Voltar para login</VoltarTexto>
			</Voltar>
		</>
	);
};

export default Cadastro;
