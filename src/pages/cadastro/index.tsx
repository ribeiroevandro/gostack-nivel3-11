import React, { useRef } from 'react'; // SING UP
import {
	Image,
	View,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
	TextInput,
} from 'react-native';
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

	const emailInputRef = useRef<TextInput>(null);
	const senhaInputRef = useRef<TextInput>(null);

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
							<InputComponente
								nome="nome"
								icone="user"
								placeholder="Nome"
								autoCorrect={false}
								// PRIMEIRA LETRA DE CADA PALAVRA EM CAIXA ALTA
								autoCapitalize="words"
								returnKeyType="next"
								onSubmitEditing={() => {
									emailInputRef.current?.focus();
								}}
							/>
							<InputComponente
								ref={emailInputRef}
								nome="email"
								icone="mail"
								placeholder="E-mail"
								autoCorrect={false}
								autoCapitalize="none"
								keyboardType="email-address"
								returnKeyType="next"
								onSubmitEditing={() => {
									senhaInputRef.current?.focus();
								}}
							/>
							<InputComponente
								ref={senhaInputRef}
								nome="senha"
								icone="lock"
								placeholder="Senha"
								secureTextEntry
								// BLOQUEA A CHEGARACAO AUTOMATICA DE SENHA DO SISTEMA
								textContentType="newPassword"
								returnKeyType="send"
								onSubmitEditing={() => formRef.current?.submitForm()}
							/>

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
