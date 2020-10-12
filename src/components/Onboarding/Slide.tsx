import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

interface SlideProps {
  text: string;
}

const { width, height } = Dimensions.get('window');
export const GOLDEN_RATION_HEIGHT = 0.61 * height;
export const TITLE_HEIGHT = 100;

const Slide = ({ text }: SlideProps) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}> {text} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width,
    height: TITLE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      { translateY: (GOLDEN_RATION_HEIGHT - TITLE_HEIGHT) / 2 },
      { translateX: (-width + TITLE_HEIGHT) / 2 },
      { rotate: '90deg' },
    ],
  },
  title: {
    position: 'absolute',
    fontSize: 80,
    lineHeight: 80,
    color: 'white',
    textAlign: 'center',
  },
});

export default Slide;
