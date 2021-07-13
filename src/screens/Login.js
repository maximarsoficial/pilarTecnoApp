import React,{ Component } from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import {Button} from 'react-native-elements';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default class Login extends React.Component {

  render(){
    return( 
      <SafeAreaView style={{flex:1}}>
        <ImageBackground
          style={{ height }}
          source={require('../assets/images/fondoapp.jpg')}
        >
          <Text style={styles.text}> BIENVENIDOS </Text>
          <Input style={styles.input}
          placeholder='Ingresa tu usuario o mail'
          
          // leftIcon={<Icon 
          //   name='fas fa-user'
          //   size={50}
          //   color='#512E5F'/>}
            
        />
          <Input style={styles.input} 
          placeholder="Ingresa tu contraseña" 
          secureTextEntry={true} 
          // leftIcon={<Icon 
          //     name='lock'
          //     size={30}
          //     color='#008080'/>}
              />
          <TouchableOpacity style={[styles.buttonSinIn, { backgroundColor:'#171107' }]}>
            <Text style={styles.textButton}>
              INGRESAR
            </Text>
          </TouchableOpacity>    
          <TouchableOpacity style={[styles.buttonSinUp, { backgroundColor:'#171107' }]}>
            <Text style={styles.textButton}>
              REGISTRARSE
            </Text>
          </TouchableOpacity>   

          




        </ImageBackground>
    </SafeAreaView>
     
    )}
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
    text: {
      marginTop:100,
      fontSize:40, 
      fontWeight:'bold', 
      color:`#ff4500`,
      textAlign:'center',
    },
    textButton: {
      margin: width/20,
      fontSize:20, 
      color:`#ff4500`,
      textAlign:'center',
    },
    input: {
        marginTop: 40,
        fontSize:15, 
        color:'#90ee90',
        textAlign:'left',
        backgroundColor:'#f0ffff',
    },
    buttonSinIn: {
      marginTop:180,
      marginLeft: 60,
      marginRight: 60,
      marginBottom: 70,
      paddingBottom:3,
      borderRadius:2,
      justifyContent:'center',
    },
    buttonSinUp: {
      marginTop:-40,
      marginLeft: 60,
      marginRight: 60,
      marginBottom: 70,
      paddingBottom:3,
      borderRadius:2,
      justifyContent:'center',
    },
  })