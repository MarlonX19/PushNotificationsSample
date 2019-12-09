import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import firebase from 'firebase';
import OneSignal from 'react-native-onesignal';

const App = () => {

    useEffect(() => {
      OneSignal.init("cbaeb3fd-d542-484c-b5b5-5680f4f95dc7");
    }, [])
  

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Text style={{ fontSize: 20 }}>Hello notifications</Text>
        </SafeAreaView>
      </>
    );
  
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
