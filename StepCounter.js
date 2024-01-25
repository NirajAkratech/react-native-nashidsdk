import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StepCounter = () => {
  const [stepCount, setStepCount] = useState(0);

  const incrementStep = () => {
    setStepCount(stepCount + 1);
  };

  const decrementStep = () => {
    if (stepCount > 0) {
      setStepCount(stepCount - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.stepText}>Step Count: {stepCount}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={incrementStep} />
        <Button title="Decrement" onPress={decrementStep} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
});

export default StepCounter;
