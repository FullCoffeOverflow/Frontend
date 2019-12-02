import React, { Component } from 'react';
import { Font } from 'expo';
import { ToolbarAndroid, Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import {Header} from 'react-native-elements';
import { ListItem } from 'react-native-elements'

let histCortes = []
let proxCortes = []

export class ProximosAgendamentosScreen extends Component {

  static navigationOptions = {
    title: 'Próximos agendamentos',
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
        proxCortes = []
        histCortes = []
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      bottomDivider
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
    
    console.log(`https://fullcoffeeoverflow.herokuapp.com/v01/cortes/usuario/${global.usuarioId}/status/FINALIZADO`)
    fetch(`https://fullcoffeeoverflow.herokuapp.com/v01/cortes/usuario/${global.usuarioId}/status/FINALIZADO`, data)
    .then((response) => {
      if(response.ok) {
        response.json().then((responseJson) => {
          console.log(responseJson)
          for(let i = 0; i < responseJson.cortes.length; i++) {
            let element = {
              'name': responseJson.cortes[i].barbeiroName,
              'subtitle': responseJson.cortes[i].horarioFormatado
            }
            histCortes.push(element)
          }
          console.log(histCortes)
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

    console.log(`https://fullcoffeeoverflow.herokuapp.com/v01/cortes/usuario/${global.usuarioId}/status/AGUARDANDO`)
    fetch(`https://fullcoffeeoverflow.herokuapp.com/v01/cortes/usuario/${global.usuarioId}/status/AGUARDANDO`, data)
    .then((response) => {
      if(response.ok) {
        response.json().then((responseJson) => {
          console.log(responseJson)
          for(let i = 0; i < responseJson.cortes.length; i++) {
            let element = {
              'name': responseJson.cortes[i].barbeiroName,
              'subtitle': responseJson.cortes[i].horarioFormatado
            }
            proxCortes.push(element)
          }
          console.log(proxCortes)
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
    const {navigate} = this.props.navigation;
    return (      
    <React.Fragment>

      <Text style={{color: 'black', fontWeight: '100', textAlign: 'center'}} h2>Próximos agendamentos</Text>

      <FlatList
      keyExtractor={this.keyExtractor}
      data={proxCortes}
      renderItem={this.renderItem}
      />

      <View style={styles.loginFormItem}>
          <TouchableOpacity style={styles.btn} onPress={() => navigate('NovoAgendamento', {})}>
            <Text style={{color: 'white', fontWeight: '200', textAlign: 'center'}}>Novo agendamento</Text>
          </TouchableOpacity>
      </View>

      <Text style={{color: 'black', fontWeight: '100', textAlign: 'center'}} h2>Histórico de Cortes</Text>


      <FlatList
      keyExtractor={this.keyExtractor}
      data={histCortes}
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
