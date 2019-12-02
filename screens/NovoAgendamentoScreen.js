import React, { Component } from 'react';
import { Font } from 'expo';
import { ToolbarAndroid, Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import {Header} from 'react-native-elements';
import { ListItem } from 'react-native-elements'





const listLugaresProximos = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '1km de distância'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '2km de distância'

    },
  ]


export class NovoAgendamentoScreen extends Component {
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={{
          source: item.avatar_url && { uri: item.avatar_url },
          title: item.name[0]
        }}
        bottomDivider
        chevron
      />
    )
    
  render() {
    return (
    <React.Fragment>
        <Header
        centerComponent={{ text: 'Novo Agendamento', style: { color: 'white' } }}
        leftComponent={{ icon: 'home', color: '#fff' }}
        rightComponent={{ icon: 'menu', color: '#fff' }}
        containerStyle={{
          backgroundColor: '#531919',
          justifyContent: 'space-around',
        }}
        />
    <Text style={{color: 'black', fontWeight: '300', textAlign: 'center'}} h2>Barbeiros próximos</Text>

    <FlatList
      keyExtractor={this.keyExtractor}
      data={listLugaresProximos}
      renderItem={this.renderItem}
      />    

    
        
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
