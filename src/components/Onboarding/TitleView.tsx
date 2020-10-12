import React from 'react';
import { Dimensions, StyleSheet, Animated } from 'react-native';

interface TitleViewProps {
  title: string;
  animatedX: Animated.Value;
  index: number;
}

const { width } = Dimensions.get('window');

const TitleView = ({ title, animatedX, index }: TitleViewProps) => {
  const opacity = animatedX.interpolate({
    inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.Text style={[styles.title, { opacity }]}> {title} </Animated.Text>
  );
};

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    fontSize: 80,
    lineHeight: 80,
    color: 'white',
    textAlign: 'center',
  },
});

export default TitleView;
