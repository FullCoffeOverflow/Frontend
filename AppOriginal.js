import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

import * as Font from 'expo-font';

import { LoginScreen } from "./screens/LoginScreen"
import { NovoCadastroScreen } from "./screens/NovoCadastroScreen"
import { CadastroBarbeiroScreen } from "./screens/CadastroBarbeiroScreen"
import { CadastroClienteScreen } from "./screens/CadastroClienteScreen"
import { ProximosAgendamentosScreen } from "./screens/ProximosAgendamentosScreen"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Pacifico':require('./assets/fonts/Pacifico.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if(this.state.fontLoaded) {
      return (
        <ProximosAgendamentosScreen />
      );
    }
    else {
      return (
        <ActivityIndicator size="large" /> 
      );
    }
  }
}