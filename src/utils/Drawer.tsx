import React, {
  ReactNode,
  useState,
  useEffect,
  forwardRef,
  RefObject,
  useImperativeHandle,
} from 'react';
import {
  Dimensions,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const SLIDING_DURATION = 500;
const DRAWER_WIDTH = width * 0.8;

interface DrawerProps {
  location?: 'left' | 'right';
  children: ReactNode;
  ref?: RefObject<any>;
}

const Drawer = forwardRef(({ location, children }: DrawerProps, ref) => {
  const [open, setOpen] = useState(false);

  const drawerX =
    location === 'left'
      ? new Animated.Value(-width)
      : new Animated.Value(width);
  useImperativeHandle(
    ref,
    () => ({
      show: () => setOpen(true),
      hide: () => setOpen(false),
    }),
    [],
  );

  useEffect(() => {
    if (open) {
      if (location === 'left') {
        Animated.timing(drawerX, {
          toValue: 0,
          duration: SLIDING_DURATION,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(drawerX, {
          toValue: 0,
          duration: SLIDING_DURATION,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();
      }
    } else {
      if (location === 'left') {
        Animated.timing(drawerX, {
          toValue: -width,
          duration: SLIDING_DURATION,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(drawerX, {
          toValue: width,
          duration: SLIDING_DURATION,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();
      }
    }
  }, [open, drawerX, location]);

  return (
    <Animated.View style={[styles.drawer, { left: drawerX }]}>
      <TouchableOpacity
        activeOpacity={0.95}
        style={{ ...StyleSheet.absoluteFillObject }}
        onPress={() => setOpen(false)}>
        <Animated.View
          style={[
            styles.container,
            location === 'left'
              ? { left: drawerX }
              : { left: width - DRAWER_WIDTH },
          ]}>
          <Text style={styles.text}> Hello </Text>
          {children}
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  drawer: {
    ...StyleSheet.absoluteFillObject,
    width,
    zIndex: 1000,
    backgroundColor: '#333333',
    opacity: 0.95,
  },
  container: {
    position: 'absolute',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center',
    top: 0,
    width: DRAWER_WIDTH,
    height,
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#000000',
    fontSize: 20,
  },
});

Drawer.defaultProps = {
  location: 'left',
};

export default Drawer;
