import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

import Drawer from './../../utils/Drawer';
import Settings from './Settings';
import Account from './Account';

interface HomeProps {
  navigation: any;
}

const { height } = Dimensions.get('window');

// const HomeDrawer = createDrawerNavigator();

const Home = ({ navigation }: HomeProps) => {
  const drawerRef = useRef(null);

  return (
    // <NavigationContainer
    //   independent={true}
    //   screenOptions={{
    //     gestureEnabled: false,
    // }}>
    //   <HomeDrawer.Navigator initialRouteName="Account">
    //     <HomeDrawer.Screen name="Account" component={Account} />
    //     <HomeDrawer.Screen name="Settings" component={Settings} />
    //   </HomeDrawer.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      <Drawer location="left" ref={drawerRef}>
        <Text> children 1 </Text>
        <Text> children 2 </Text>
        <Text> children 3 </Text>
      </Drawer>
      <View style={styles.children}>
        <Text> Home </Text>
        <Text> This page is used to test the side drrawer.</Text>
        <Button
          style={styles.buttonStyle}
          type="outline"
          title={'Back to login'}
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          style={styles.buttonStyle}
          type="outline"
          title={'Show drawer'}
          onPress={() => drawerRef.current.show()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },

  children: {
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonStyle: {
    marginTop: 20,
    borderRadius: 10,
    width: 150,
  },
});

export default Home;
