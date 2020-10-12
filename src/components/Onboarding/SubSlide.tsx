import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

interface SubSlideProps {
  text: string;
  onPress: () => void;
  last: boolean;
}

const SubSlide = ({ text, onPress, last }: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.slideText}> Be {text.toLowerCase()}! </Text>
      <Button
        type="outline"
        buttonStyle={styles.buttonStyle}
        title={last ? 'Get started' : 'Next'}
        {...{ onPress }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    borderRadius: 10,
    width: 150,
  },
  slideText: {
    fontSize: 40,
    lineHeight: 40,
    color: 'black',
    textAlign: 'justify',
    marginBottom: 20,
  },
});

export default SubSlide;
