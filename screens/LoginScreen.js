import React, { Component } from 'react';
import { Font } from 'expo';
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import bigodeImage from './images/bigode.png'

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
        this.state = {
          isLoading: false,
          email: '',
          password: ''
        }
  }

  static navigationOptions = {
    title: 'Login',
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
      <TouchableOpacity style={styles.btn} onPress={() => this.loginCliente()}>
        <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Logar como cliente</Text>
      </TouchableOpacity>
    );
  }

  loginCliente() {
    let data = {
        method: 'POST',
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    this.setState({
      isLoading: true
    })

    return fetch('https://fullcoffeeoverflow.herokuapp.com/v01/auth/login', data)
            .then((response) => {
              if(response.ok) {
                response.text().then((responseJson) => {
                  this.setState({
                      isLoading: false,
                      data: responseJson.data,
                  });
                  console.log(JSON.stringify(responseJson));
                })
              }
            })
            .catch((error) => {
                console.error(error);
            });
  }



  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={bigodeImage} style={{width: 193, height: 110}}/>
        </View>

        <View style={styles.loginForm}>

          <View style={styles.loginFormItem}>
            <TextInput style={styles.formInput} placeholder={'Email'} 
                       onChangeText={(text) => this.setState({ email: text })}
                       value={this.state.email}/>
          </View>
          
          <View style={styles.loginFormItem}>
            <TextInput secureTextEntry={true} style={styles.formInput} placeholder={'Senha'}
                       onChangeText={(text) => this.setState({ password: text })}
                       value={this.state.password} />
          </View>
          <View style={styles.loginFormItem}>
            {this.renderButton()}
          </View>
          <View style={styles.loginFormItem}>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Logar como barbeiro</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginFormItem}>
            <TouchableOpacity onPress={() => navigate('NovoCadastro', {})}>
              <Text style={{color: '#00B2FF', textAlign: 'center'}}>Não possui uma conta? Registre-se agora</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    flex: 1,
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
  },
});
