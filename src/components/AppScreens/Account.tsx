import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Account = () => {
  return (
    <View style={styles.container}>
      <Text> Account </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Account;
