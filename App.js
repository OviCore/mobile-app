import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  },[])
  return (
    <MainContainer/>
  );
}

export default App;