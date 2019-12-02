import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as Font from 'expo-font';

import { LoginScreen } from "./screens/LoginScreen"
import { NovoCadastroScreen } from "./screens/NovoCadastroScreen"
import { CadastroBarbeiroScreen } from "./screens/CadastroBarbeiroScreen"
import { CadastroClienteScreen } from "./screens/CadastroClienteScreen"
import { ProximosAgendamentosScreen } from "./screens/ProximosAgendamentosScreen"
import { NovoAgendamentoScreen } from "./screens/NovoAgendamentoScreen"
import { AgendarHorarioScreen } from './screens/AgendarHorarioScreen';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  NovoCadastro: {screen: NovoCadastroScreen},
  CadastroBarbeiro: {screen: CadastroBarbeiroScreen},
  CadastroCliente: {screen: CadastroClienteScreen},
  Home: {screen: ProximosAgendamentosScreen},
  NovoAgendamento: {screen: NovoAgendamentoScreen},
  AgendarHorario: {screen: AgendarHorarioScreen}
});

const App = createAppContainer(MainNavigator);


export default App;


