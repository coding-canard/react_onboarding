import React from 'react';
import {
  Animated,
  StyleSheet,
  Dimensions,
  ImageRequireSource,
} from 'react-native';

interface SlideImageProps {
  src: ImageRequireSource;
  animatedX: Animated.Value;
  index: number;
}

const { width, height } = Dimensions.get('window');
export const GOLDEN_RATION_HEIGHT = 0.61 * height;

const SlideImage = ({ src, animatedX, index }: SlideImageProps) => {
  const opacity = animatedX.interpolate({
    inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.Image style={[styles.imageStyle, { opacity }]} source={src} />
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    ...StyleSheet.absoluteFillObject,
    height: GOLDEN_RATION_HEIGHT,
    width,
    zIndex: -1000,
    position: 'absolute',
    // aspectRatio: 1,
    resizeMode: 'contain',
  },
});

export default SlideImage;
