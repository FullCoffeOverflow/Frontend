import React, { Component } from 'react';
import { Font } from 'expo';
import { ToolbarAndroid, Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, Alert} from 'react-native';

import {Header} from 'react-native-elements';

import {createAppContainer, NavigationActions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { TopBar } from './TopBar'
import bigodeImage from './images/bigode.png'

export class CadastroClienteScreen extends Component {
  constructor(props) {
    super(props);
        this.state = {
          isLoading: false,
          email: '',
          password: '',
          name: '',
          birthdate: '',
          cep: '',
          phone: '',
          number: '',
          description: '',
          passConfirm: ''
        }
  }

  static navigationOptions = {
    title: 'Cadastrar novo cliente',
    headerStyle: {
      backgroundColor: '#531919',
    },
    headerTintColor: '#fff'
  };

  renderButton() {
    if (this.state.isLoading) {
        return (
            <View style={styles.spinnerStyle}>
                <ActivityIndicator size={"large"} />
            </View>
        );
    }

    return (
      <TouchableOpacity style={styles.btn} onPress={() => this.cadastraCliente()}>
        <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Cadastrar-se como cliente</Text>
      </TouchableOpacity>
    );
  }

  cadastraCliente() {
    let data = {
        method: 'POST',
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          birthdate: this.state.birthdate,
          cep: this.state.cep,
          phone: this.state.phone,
          number: this.state.number,
          description: this.state.description
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    this.setState({
      isLoading: true
    })

    console.log(JSON.stringify(data))

    return fetch('https://fullcoffeeoverflow.herokuapp.com/v01/usuarios/cadastro', data)
            .then((response) => {
              this.setState({
                isLoading: false
              })
              if(response.ok) {
                const {navigate} = this.props.navigation;
                response.text().then((responseJson) => {
                  this.setState({
                      data: responseJson.data,
                  });
                  Alert.alert(
                    'Cadastrado',
                    'Cadstro realizado com sucesso',
                    [
                      {text: 'OK', onPress: () => navigate('Home', {})},
                    ]
                  )
                })
              }
              else {
                console.log(response)
                alert('Erro ao cadastrar usuario, tente novamente')
              }
            })
            .catch((error) => {
                console.error(error);
            });
  }

  render() {
    return (
      <React.Fragment>

        <ScrollView contentContainerStyle={styles.container}>

          <View style={styles.logoContainer}>
            <Image source={bigodeImage} style={{width: 193, height: 110}}/>
          </View>

          <View style={styles.loginForm}>
            <View style={styles.loginFormItem}>
              
              <TextInput style={styles.formInput} placeholder={'Email'} 
                         onChangeText={(text) => this.setState({ email: text })}
                         value={this.state.email} />
            </View>
            <View style={styles.loginFormItem}>
              
              <TextInput secureTextEntry={true} style={styles.formInput} placeholder={'Senha'} onChangeText={(text) => this.setState({ password: text })}
                       value={this.state.password} />
            </View>
            <View style={styles.loginFormItem}>
              
              <TextInput secureTextEntry={true} style={styles.formInput} placeholder={'Confirmar Senha'} onChangeText={(text) => this.setState({ passConfirm: text })} value={this.state.passConfirm} /> 
            </View>
            <View style={styles.loginFormItem}>
              
              <TextInput style={styles.formInput} placeholder={'Nome'} 
                         onChangeText={(text) => this.setState({ name: text })}
                         value={this.state.name} />
            </View>
            <View style={styles.loginFormItem}>
              
              <TextInput style={styles.formInput} placeholder={'Data de nascimento'} 
                         onChangeText={(text) => this.setState({ birthdate: text })}
                         value={this.state.birthdate} />
            </View>
            <View style={styles.loginFormItem}>
              
              <TextInput style={styles.formInput} placeholder={'CEP'} 
                         onChangeText={(text) => this.setState({ cep: text })}
                         value={this.state.cep} />
            </View>
            <View style={styles.loginFormItem}>
              
              <TextInput style={styles.formInput} placeholder={'Número do endereço'} 
                         onChangeText={(text) => this.setState({ number: text })}
                         value={this.state.number} />
            </View>
            <View style={styles.loginFormItem}>
              
              <TextInput style={styles.formInput} placeholder={'Telefone'} 
                         onChangeText={(text) => this.setState({ phone: text })}
                         value={this.state.phone} />
            </View>
            <View style={styles.loginFormItem}>
              
              <TextInput style={styles.formInput} placeholder={'Descrição'} 
                         onChangeText={(text) => this.setState({ description: text })}
                         value={this.state.description} />
            </View>
            <View style={styles.loginFormItem}>
              {this.renderButton()}
            </View>
          </View>
        </ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  formInput: {
    width: 300,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ADADAD',
    padding: 3,
    margin: 10
  },
  btn: {
    width: 300,
    backgroundColor: '#531919',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ADADAD',
    padding: 3,
    margin: 10,
    textAlign: 'center', 
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  loginForm: {
    textAlign: 'left',
    margin: 10,
    padding: 10
  },
  loginFormItem: {
    textAlign: 'left',
    margin: 3,
    padding: 3,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
