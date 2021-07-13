import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default class Profile extends React.Component {

  _onHomePress = () => {
    Alert.alert(
      "Hola",
      "Ya te encuentras ahí",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }


  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
              style={{ height }}
              source={require('../assets/images/fondoapp.jpg')}
            >
              
                <View style={{ flexDirection: 'column-reverse', backgroundColor: 'rgba(0, 165, 188, 0.8)', borderRadius: 3, justifyContent: 'center'}}>
                  
                  <Text style={styles.text}>PERFIL</Text>
                  
                </View>
             
    
            </ImageBackground>
          </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  button: {
    margin: width / 20,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: 1
  }
})