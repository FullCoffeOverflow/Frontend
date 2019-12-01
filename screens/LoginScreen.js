import React, { Component } from 'react';
import { Font } from 'expo';
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

import bigodeImage from './images/bigode.png'

export class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={bigodeImage} style={{width: 193, height: 110}}/>
        </View>

        <View style={styles.loginForm}>

          <View style={styles.loginFormItem}>
            <TextInput style={styles.formInput} placeholder={'Email'} />
          </View>
          
          <View style={styles.loginFormItem}>
            <TextInput secureTextEntry={true} style={styles.formInput} placeholder={'Senha'} />
          </View>
          <View style={styles.loginFormItem}>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Logar como cliente</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginFormItem}>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Logar como barbeiro</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginFormItem}>
            <Text style={{color: '#00B2FF', textAlign: 'center'}}>Não possui uma conta? Registre-se agora</Text>
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
