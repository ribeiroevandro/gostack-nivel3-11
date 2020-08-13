import Styled from 'styled-components/native';
import IconeFeather from 'react-native-vector-icons/Feather';

export const Container = Styled.View`
	width: 100%;
	height: 60px;
	padding: 0 16px;
	background: #232129;
	border-radius: 10px;
	margin-bottom: 8px;

	/* DEFINE A FORMA DE ALINHAMENTO */
	flex-direction: row;
	align-items: center;
`;

export const TextoInput = Styled.TextInput`
 flex: 1;
 color: #ffffff;
 font-size: 16px;
 font-family: 'RobotoSlab-Regular';
`;

export const Icone = Styled(IconeFeather)`
	margin-right: 16px;
`;
