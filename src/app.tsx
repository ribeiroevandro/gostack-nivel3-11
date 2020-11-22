import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Hooks from './hooks';
import Rota from './router';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <Hooks>
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Rota />
      </View>
    </Hooks>
  </NavigationContainer>
);

export default App;
