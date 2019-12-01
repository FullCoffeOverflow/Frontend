import React, { Component } from 'react';
import { Font } from 'expo';
import { ToolbarAndroid, Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 
'react-native';

export class TopBar extends Component {
  render() {
    return (
      <ToolbarAndroid style={styles.toolbar} actions={[{title: '', show: 'always'}]}>
        <View style={styles.view}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </ToolbarAndroid>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    paddingTop: 20,
    backgroundColor: '#531919',
    height: 80,
    alignSelf: 'stretch'
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Pacifico',
    color: 'white',
    fontSize: 20,
    textAlign: 'auto'
  }
});
