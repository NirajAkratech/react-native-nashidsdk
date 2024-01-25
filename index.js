import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import StepCounter from './StepCounter';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StepCounter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
