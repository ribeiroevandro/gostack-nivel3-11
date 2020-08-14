import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPagina from '../pages/login';
import CadastroPagina from '../pages/cadastro';

// NAVEGACAO DE AUTENTICACAO DO USUARIO
const Autenticacao = createStackNavigator();

const autenticacaoRota: React.FC = () => (
	<Autenticacao.Navigator
		// EDITAR A ESTILISACAO PADRAO DO NavigationContainer
		screenOptions={{
			// DESATIVA O CABECALHO
			headerShown: false,
			// MUDA A COR DE FUNDO
			cardStyle: { backgroundColor: '#312e38' },
			// DEFINE EM QUAL PAGINA INICIAR
		}}
		initialRouteName="CadastroPagina"
	>
		<Autenticacao.Screen name="LoginPagina" component={LoginPagina} />
		<Autenticacao.Screen name="CadastroPagina" component={CadastroPagina} />
	</Autenticacao.Navigator>
);

export default autenticacaoRota;
