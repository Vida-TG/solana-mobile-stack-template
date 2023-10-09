import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
});
