import React, { ReactNode, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
export const GOLDEN_RATION_HEIGHT = 0.61 * height;
const BORDER_RADIUS = 75;

interface TemplateProps {
  title: string;
  contentContainerBackgroundColor?: string;
  backgroundColor?: string;
  children: ReactNode;
  Footer?: React.FC;
}

const Template = ({
  title,
  backgroundColor,
  contentContainerBackgroundColor,
  children,
  Footer,
}: TemplateProps) => {
  useEffect(() => {
    console.log(`${title} is mounted`);
    return () => console.log(`${title} is unmounted`);
  }, [title]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: contentContainerBackgroundColor,
    },
    heading: {
      alignItems: 'center',
      backgroundColor: backgroundColor,
      height: (0.39 * height) / 2,
      borderBottomRightRadius: BORDER_RADIUS,
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
      backgroundColor: contentContainerBackgroundColor,
      borderTopLeftRadius: BORDER_RADIUS,
      borderBottomRightRadius: BORDER_RADIUS,
      borderBottomLeftRadius: BORDER_RADIUS,
      alignItems: 'center',
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
        <View style={styles.contentContainer}>{children}</View>
      </View>
      <View style={styles.footing}>
        <Footer />
      </View>
    </View>
  );
};

Template.defaultProps = {
  backgroundColor: '#EEE5C2',
  contentContainerBackgroundColor: 'white',
  Footer: <View />,
};

export default Template;
