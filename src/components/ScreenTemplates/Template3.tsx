/* eslint-disable react-native/no-inline-styles */
import React, { ReactNode } from 'react';
import { View, Dimensions, Image, StyleSheet, Text } from 'react-native';

const { width } = Dimensions.get('window');
const aspectRation = 2151 / 1658;
const imgWidth = width;
const imgHeight = width * aspectRation;
const BORDER_RADIUS = 75;

const pattern = require('./../../assets/pattern3.png');

interface TemplateProps {
  title: string;
  children: ReactNode;
  Footer?: React.FC;
  backgroundColor?: 'string';
  containerColor?: 'string';
}

const Template = ({
  title,
  children,
  Footer,
  backgroundColor,
  containerColor,
}: TemplateProps) => {
  const styles = StyleSheet.create({
    title: {
      height: BORDER_RADIUS,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      top: 10,
      position: 'absolute',
    },
    footer: {
      backgroundColor,
      height: 0.39 * 0.61 * imgHeight,
      overflow: 'hidden',
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: containerColor }}>
      <View
        style={{
          height: 0.39 * 0.61 * imgHeight,
          overflow: 'hidden',
        }}>
        <Image
          source={pattern}
          style={{
            resizeMode: 'repeat',
            width: imgWidth,
            height: imgHeight,
          }}
        />
      </View>
      <View style={{ flex: 1, overflow: 'hidden', backgroundColor }}>
        <Image
          source={pattern}
          style={{
            ...StyleSheet.absoluteFillObject,
            resizeMode: 'repeat',
            width: imgWidth,
            height: imgHeight,
            borderBottomLeftRadius: BORDER_RADIUS,
            top: -0.39 * 0.61 * imgHeight,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: containerColor,
            borderTopRightRadius: BORDER_RADIUS,
            borderTopLeftRadius: BORDER_RADIUS,
            borderBottomRightRadius: BORDER_RADIUS,
            borderBottomLeftRadius: BORDER_RADIUS,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.title}> {title} </Text>
          {children}
        </View>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

Template.defaultProps = {
  backgroundColor: '#EEE5C2',
  containerColor: 'white',
  Footer: <View />,
};
export default Template;
