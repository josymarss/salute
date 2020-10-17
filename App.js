import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React,{ useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';

import Map from './screens/Map/Map'
import Messages from './screens/Messages/Messages'
import Hospitals from './screens/Hospitals/Hospitals'
import Home from './screens/Home/Home'
import Routes from './screens/Routes';



export default function App({navigation}) {

  /*useEffect(() => {
  const getData = async() =>{

    const user = await AsyncStorage.getItem('salute-user')
    
    user ? <Routes /> : <Login/>

    },[])
   
  }*/

  return (

    <SafeAreaView style={styles.container}>

      {/* <Messages /> */}


      { user
          ? 
            <NavigationContainer>
              <Routes/>
            </NavigationContainer> 
          :
            <Login />
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    backgroundColor:'#171717',
  }
});
