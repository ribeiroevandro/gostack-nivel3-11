import React from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import IconeFeather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import InputComponente from '../../components/input';
import BotaoComponente from '../../components/botao';
import {
	Container,
	Titulo,
	AjudaSenha,
	AjudaSenhaTexto,
	CriarConta,
	CriarContaTexto,
} from './styles';

import logoImagem from '../../assets/logo.png';

const Login: React.FC = () => {
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
							<Titulo>Faça seu login</Titulo>
						</View>

						<InputComponente nome="email" icone="mail" placeholder="E-mail" />
						<InputComponente nome="senha" icone="lock" placeholder="Senha" />

						<BotaoComponente
							onPress={() => {
								console.log('TE LIGUEI...');
							}}
						>
							Entrar
						</BotaoComponente>

						<AjudaSenha
							onPress={() => {
								console.log('TOMO BANHO DE LUA...');
							}}
						>
							<AjudaSenhaTexto>Esqueci minha senha</AjudaSenhaTexto>
						</AjudaSenha>
					</Container>
				</ScrollView>
			</KeyboardAvoidingView>

			<CriarConta
				onPress={() => {
					// FAZ VOLTAR PARA A UTILIMA TELA ACESSADA
					navegacao.goBack();
				}}
			>
				<IconeFeather name="log-in" size={20} color="#ff9000" />

				<CriarContaTexto>Criar uma conta</CriarContaTexto>
			</CriarConta>
		</>
	);
};

export default Login;
