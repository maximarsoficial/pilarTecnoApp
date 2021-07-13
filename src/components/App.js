import React,{ Component } from 'react';
import {Provider} from 'react-redux';
import { store } from '../store';

import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  useColorScheme,
  View,
} from 'react-native';
import Home from '../screens/Home';
import AppStack from '../routs/app';
import { NavigationContainer } from '@react-navigation/native';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

  const mapDispatchToProps = dispatch => ({
        setUser: (data) =>
        dispatch(actions.user.setUser(data)),
  })
  
  const mapStateToProps = state => ({
        user: state.user.user
    })
    

 const App = (props) => {

    return (
      <Provider store={store}>
           <NavigationContainer>
               <AppStack />
           </NavigationContainer>
      </Provider>
      
    );
}

const styles = StyleSheet.create({
  text: {
    fontSize:30,
    fontWeight:'bold',
    color:'red',
    textAlign:'center'
  },
  button: {
    margin: width/20,
    height:width/2.5,
    width:width/2.5,
    borderRadius:15,
    justifyContent:'center',
    backgroundColor:'#fff',
    zIndex:1
  }
})

export default connect(mapStateToProps, mapDispatchToProps)((App))
