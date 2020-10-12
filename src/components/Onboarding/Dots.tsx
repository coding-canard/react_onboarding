import React from 'react';
import { Dimensions, StyleSheet, Animated } from 'react-native';

interface DotsProps {
  animatedX: Animated.Value;
  index: number;
}

const { width } = Dimensions.get('window');

const Dots = ({ animatedX, index }: DotsProps) => {
  const opacity = animatedX.interpolate({
    inputRange: [(index - 1) * width, index * width, (index + 1) * width],
    outputRange: [0.4, 1, 0.4],
    extrapolate: 'clamp',
  });

  const scale = animatedX.interpolate({
    inputRange: [(index - 1) * width, index * width, (index + 1) * width],
    outputRange: [0.75, 1, 0.75],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[styles.container, { opacity, transform: [{ scale }] }]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2CB9B0',
    height: 6,
    width: 6,
    borderRadius: 3,
    margin: 5,
    justifyContent: 'center',
  },
});

export default Dots;
