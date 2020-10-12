import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import Dots from './Dots';
import Slide, { GOLDEN_RATION_HEIGHT } from './Slide';
import SubSlide from './SubSlide';
import SlideImage from './SlideImage';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');
const BORDER_RADIUS = 75;
const slides = [
  {
    title: 'Relaxed',
    backgroundColor: '#1DD3BD',
    slideText: 'Slide 1',
    image_src: require('./../../assets/1.png'),
  },
  {
    title: 'Playful',
    backgroundColor: '#6A2C70',
    slideText: 'Slide 2',
    image_src: require('./../../assets/2.png'),
  },
  {
    title: 'Sinful',
    backgroundColor: '#E8505B',
    slideText: 'Slide 3',
    image_src: require('./../../assets/3.png'),
  },
  {
    title: 'Eccentric',
    backgroundColor: '#F08A5D',
    slideText: 'Slide 4',
    image_src: require('./../../assets/4.png'),
  },
  {
    title: 'Funky',
    backgroundColor: '#F9D56E',
    slideText: 'Slide 5',
    image_src: require('./../../assets/5.png'),
  },
];
const animatedX = new Animated.Value(0);

interface OnboardingProps {
  navigation: StackNavigationProp<any, string>;
}

const Onboarding = ({ navigation }: OnboardingProps) => {
  const scrollViewRef = useRef<any>(null);
  const backgroundColor = animatedX.interpolate({
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map((slide) => slide.backgroundColor),
  });

  const transform = {
    transform: [
      {
        translateX: animatedX.interpolate({
          inputRange: [0, width, 2 * width, 3 * width, 4 * width],
          outputRange: [4 * width, 3 * width, 2 * width, width, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const event = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: animatedX,
          },
        },
      },
    ],
    { useNativeDriver: false },
  );

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slide, { backgroundColor }]}>
        {slides.map(({ image_src }, index) => (
          <SlideImage
            key={index}
            src={image_src}
            animatedX={animatedX}
            index={index}
          />
        ))}
        <Animated.ScrollView
          ref={scrollViewRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          // scrollEnabled={false}
          scrollEventThrottle={1}
          onScroll={event}>
          {slides.map(({ title }, index) => (
            <Slide key={index} text={title} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={styles.overlay}>
          <Animated.View style={styles.dots}>
            {slides.map((_, index) => (
              <Dots key={index} animatedX={animatedX} index={index} />
            ))}
          </Animated.View>
          <Animated.View style={[styles.subslide, transform]}>
            {slides.map(({ title }, index) => (
              <SubSlide
                key={index}
                text={title}
                last={index === slides.length - 1}
                onPress={
                  index !== slides.length - 1
                    ? () => {
                        if (scrollViewRef.current) {
                          scrollViewRef.current.scrollTo({
                            x: width * (index + 1),
                            animated: true,
                          });
                        }
                      }
                    : () => navigation.navigate('Login')
                }
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slide: {
    height: GOLDEN_RATION_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
    overflow: 'hidden',
  },
  footer: {
    flex: 1,
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
    alignItems: 'flex-end',
    overflow: 'hidden',
  },
  dots: {
    ...StyleSheet.absoluteFillObject,
    width,
    height: BORDER_RADIUS,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    // backgroundColor: 'red',
    position: 'absolute',
  },
  subslide: {
    flex: 1,
    width: width * slides.length,
    paddingTop: 5,
    flexDirection: 'row',
    overflow: 'hidden',
  },
});

export default Onboarding;
