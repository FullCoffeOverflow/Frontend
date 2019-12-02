import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { FileSystem } from 'expo-file-system';

export class AtendimentoBarbeiroScreen extends Component {
  onPictureSaved = async photo => {

    let localUri = photo.uri;
    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    console.log(`${localUri}`);
    console.log(`${filename}`);
    console.log(`${type}`);
    /*await FileSystem.moveAsync({
      from: photo.uri,
      to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`,
    });*/

    let formdata = new FormData();

    formdata.append('image', { uri: localUri, name: filename, type });

    fetch('https://fullcoffeeoverflow.herokuapp.com/v01/images/saveImage/5dcf60261c9d4400005997d5', {
      method: 'POST',
      headers: {
        'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSWQiOiI1ZGU0ZDQ0MzU3YzNlMzRjNmIyY2FiOWQiLCJlbWFpbCI6InNreWJpbG9icmFuQGdtYWlsLmNvbSIsInJvbGUiOiJVU1VBUklPIiwiaWF0IjoxNTc1Mjg5OTc5LCJleHAiOjE1NzUyOTM1Nzl9.CQ0YBzPB4e4XjnMVwnrTdhyMu9IafEFdMtD1ln1JcGs'
      },
      body: formdata
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })

    this.setState({ newPhotos: true });
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
            style={{ flex: 1 }} 
            type={this.state.type} 
            ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
                  /*this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });*/
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}