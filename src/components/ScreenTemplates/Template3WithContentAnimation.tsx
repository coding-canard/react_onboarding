/* eslint-disable react-native/no-inline-styles */
import React, { ReactNode, useRef, useEffect, Children } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');
export const GOLDEN_RATION_HEIGHT = 0.61 * height;
const BORDER_RADIUS = 75;
const CONTENT_ANIMATION_DURATION = 1000;

interface TemplateProps {
  title: string;
  contentContainerBackgroundColor?: string;
  backgroundColor?: string;
  children: ReactNode;
  Footer?: React.FC;
  animatedContent?: boolean;
}

const Template = ({
  title,
  backgroundColor,
  contentContainerBackgroundColor,
  children,
  Footer,
  animatedContent,
}: TemplateProps) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    console.log(`${title} is mounted`);
    return () => console.log(`${title} is unmounted`);
  }, [title]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: CONTENT_ANIMATION_DURATION,
        useNativeDriver: false,
      }),
      Animated.timing(translateX, {
        toValue: 0,
        duration: CONTENT_ANIMATION_DURATION,
        useNativeDriver: false,
      }),
    ]).start();

    return () => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: CONTENT_ANIMATION_DURATION,
          useNativeDriver: false,
        }),
        Animated.timing(translateX, {
          toValue: width,
          duration: CONTENT_ANIMATION_DURATION,
          useNativeDriver: false,
        }),
      ]).start();
    };
  }, [opacity, translateX]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: contentContainerBackgroundColor,
    },
    heading: {
      alignItems: 'center',
      backgroundColor: backgroundColor,
      height: (0.39 * height) / 2,
      overflow: 'hidden',
    },
    justFlex: { flex: 2 },
    title: {
      flex: 1,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
    },
    mainContainer: {
      backgroundColor: backgroundColor,
      height: GOLDEN_RATION_HEIGHT,
    },
    contentContainer: {
      flex: 1,
      transform: [],
      backgroundColor: contentContainerBackgroundColor,
      borderTopLeftRadius: BORDER_RADIUS,
      borderTopRightRadius: BORDER_RADIUS,
      borderBottomRightRadius: BORDER_RADIUS,
      borderBottomLeftRadius: BORDER_RADIUS,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    footing: {
      alignItems: 'center',
      paddingTop: 20,
      backgroundColor: backgroundColor,
      height: (0.39 * height) / 2,
      overflow: 'hidden',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.justFlex} />
        <Text style={styles.title}> {title} </Text>
      </View>
      <View style={styles.mainContainer}>
        <Animated.View style={styles.contentContainer}>
          {Children.map(children, (child) => (
            <Animated.View
              style={
                animatedContent
                  ? { opacity, transform: [{ translateX }] }
                  : { opacity: 1 }
              }>
              {child}
            </Animated.View>
          ))}
          {/* {children} */}
        </Animated.View>
      </View>
      <View style={styles.footing}>
        <Footer />
      </View>
    </View>
  );
};

Template.defaultProps = {
  backgroundColor: '#EEE5C2',
  containerColor: 'white',
  Footer: <View />,
  animatedContent: false,
};

export default Template;
