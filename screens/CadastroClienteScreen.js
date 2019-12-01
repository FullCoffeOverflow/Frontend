import React, { Component } from 'react';
import { Font } from 'expo';
import { ToolbarAndroid, Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

import { TopBar } from './TopBar'
import bigodeImage from './images/bigode.png'


export class CadastroClienteScreen extends Component {
  render() {
    return (
      <React.Fragment>

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
              <TextInput secureTextEntry={true} style={styles.formInput} placeholder={'Confirmar Senha'} />
            </View>
            <View style={styles.loginFormItem}>
              <TextInput style={styles.formInput} placeholder={'CEP'} />
            </View>
            <View style={styles.loginFormItem}>
              <TextInput style={styles.formInput} placeholder={'Telefone'} />
            </View>
            <View style={styles.loginFormItem}>
              <TouchableOpacity style={styles.btn}>
                <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Cadastrar-se como cliente</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
  }
});
