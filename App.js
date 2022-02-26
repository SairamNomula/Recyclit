// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View, LogBox } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import {createSwitchNavigator} from '@react-navigation/compat';

import * as Font from 'expo-font';

import Onboarding from './src/screens/Onboarding';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';


// LogBox.ignoreAllLogs();

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const customFonts = {
  'Inter-BoldItalic':require('./assets/fonts/Inter-BoldItalic.ttf'),
  'Inter-ExtraBoldItalic':require('./assets/fonts/Inter-ExtraBoldItalic.ttf'),
  'Inter-MediumItalic':require('./assets/fonts/Inter-MediumItalic.ttf'),
  'Poppins-Bold':require('./assets/fonts/Poppins-Bold.ttf')
};

const AppNavigator = createSwitchNavigator({
  Onboarding: {screen:Onboarding},
  Login: {screen:Login},
  Signup: {screen:Signup},
  Home: TabNavigator
}, {
  initialRouteName: 'Onboarding'
})

export default function App() {

  const [assetsLoaded,setAssetLoaded]=useState(false);
  const _loadAssetsSync = async ()=> {
    await Font.loadAsync(customFonts);
    setAssetLoaded(true);
  }

  useEffect(()=>{
    _loadAssetsSync();
  });

  return assetsLoaded ? (
    <NavigationContainer>
      <StatusBar/>
      <AppNavigator/>
    </NavigationContainer>
  ):(
    <ActivityIndicator size='small'/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

