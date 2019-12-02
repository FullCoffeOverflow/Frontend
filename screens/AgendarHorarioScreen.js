import React, { Component } from 'react';
import { Font } from 'expo';
import { ToolbarAndroid, Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import {Header} from 'react-native-elements';
import { ListItem } from 'react-native-elements'




export class AgendarHorarioScreen extends Component {
  keyExtractor = (item, index) => index.toString()

  static navigationOptions = {
    title: 'Agendar horário',
    headerStyle: {
      backgroundColor: '#531919',
    },
    headerTintColor: '#fff'
  };
    
  render() {
    const { navigation } = this.props;
    const {navigate} = this.props.navigation;
    return (
    <React.Fragment>
    <View style={styles.container}>
    <Text style={{color: 'black', fontSize: 26, fontWeight: '300', textAlign: 'center'}} h2>{navigation.getParam('barberName', '')}</Text>
    <View style={styles.loginFormItem}>
        <TouchableOpacity style={styles.btn}>
            <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Galeria</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.loginFormItem}>
        <TouchableOpacity style={styles.btn}>
            <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Novo Agendamento</Text>
        </TouchableOpacity>
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
