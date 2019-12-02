import React, { Component } from 'react';
import { Font } from 'expo';
import { ToolbarAndroid, Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import {Header} from 'react-native-elements';
import { ListItem } from 'react-native-elements'


let agendamentos = []


export class NovoAgendamentoScreen extends Component {
  static navigationOptions = {
    title: 'Novo Agendamento',
    headerStyle: {
      backgroundColor: '#531919',
    },
    headerTintColor: '#fff'
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
    agendamentos = []
  }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
      <ListItem
        topDivider
        title={item.name}
        subtitle={item.subtitle}
        bottomDivider
        chevron
        onPress={() => {const {navigate} = this.props.navigation; navigate('AgendarHorario', {userId: item.userId, barberId: item.barberId, barberName: item.name})}}
      />
    )


  componentWillMount() {
    this.renderMyData();
  }

  renderMyData(){
    let data = {
      method: 'GET',
      headers: {
          'auth': global.token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
    }
  
    this.setState({
      isLoading: true
    })
    
    console.log(`https://fullcoffeeoverflow.herokuapp.com/v01/barbeiros/byDistance/${global.usuarioId}`)
    fetch(`https://fullcoffeeoverflow.herokuapp.com/v01/barbeiros/byDistance/${global.usuarioId}`, data)
    .then((response) => {
      if(response.ok) {
        response.json().then((responseJson) => {
          console.log(responseJson)
          for(let i = 0; i < responseJson.length; i++) {
            distMetros = responseJson[i].distance.text
            distTime = responseJson[i].duration.text
            let element = {
              'name': responseJson[i].barbeiro.name,
              'subtitle': `${distMetros} (${distTime})`,
              'userId': global.userId,
              'barberId': responseJson[i].barbeiro._id, 
            }
            agendamentos.push(element)
          }
          console.log(agendamentos)
          this.setState({
              isLoading: false
          });
        })
      }
      else {
        console.log(response)
      }
    })
    .catch((error) => {
        console.error(error);
    });
  }
    
  render() {

    return (
    <React.Fragment>

    <Text style={{color: 'black', fontWeight: '300', textAlign: 'center'}} h2>Barbeiros próximos</Text>

    <FlatList
    keyExtractor={this.keyExtractor}
    data={agendamentos}
    renderItem={this.renderItem}
    extraData={this.state}
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
