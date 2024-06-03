import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Dashboard from './src/pages/dashboard';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Dashboard />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
