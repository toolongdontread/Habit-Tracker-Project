import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { StyleSheet } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

function App(){
  return(
    <MainContainer/>
  );
}


export default App;

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  }
})