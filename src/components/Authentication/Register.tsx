import React, { useState, useRef } from 'react';
import { Template2 as Template } from './../ScreenTemplates';
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Keyboard,
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

interface RegisterProps {
  navigation: any;
}

const { width } = Dimensions.get('window');

const Register = ({ navigation }: RegisterProps) => {
  // const FooterContent = () => (
  //   <>
  //     <Button
  //       type="clear"
  //       title={'Login'}
  //       onPress={() => navigation.navigate('Login')}
  //     />
  //   </>
  // );

  const [email, setEmail] = useState('');
  const emailRef = useRef(null);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const confirmPasswordRef = useRef(null);

  const removeFocus = () => {
    emailRef.current.blur();
    passwordRef.current.blur();
    confirmPasswordRef.current.blur();
    Keyboard.dismiss();
  };

  return (
    <Template title={'Register'} Footer={() => <View />}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={removeFocus}>
        <TextInput
          ref={emailRef}
          label="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          mode="outlined"
          style={styles.textInputStyle}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          theme={{ colors: { primary: '#9f9f9f' } }}
          clearButtonMode={'while-editing'}
        />
        <TextInput
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
          mode="outlined"
          style={styles.textInputStyle}
          secureTextEntry={true}
          theme={{ colors: { primary: '#9f9f9f' } }}
          clearButtonMode={'while-editing'}
        />
        <TextInput
          ref={confirmPasswordRef}
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={(value) => setConfirmPassword(value)}
          mode="outlined"
          style={styles.textInputStyle}
          secureTextEntry={true}
          theme={{ colors: { primary: '#9f9f9f' } }}
          clearButtonMode={'while-editing'}
        />
        <Button
          type="outline"
          style={styles.buttonStyle}
          title={'Register'}
          onPress={() => console.log('Registered')}
        />
        <View style={styles.clickableTextContainerStyle}>
          <Text onPress={() => navigation.goBack()} style={styles.linkStyle}>
            Go back to Login
          </Text>
        </View>
      </TouchableOpacity>
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    borderRadius: 10,
    width: 150,
  },
  buttonContainer: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textInputStyle: {
    width: 0.8 * width,
    borderColor: 'transparent',
    marginBottom: 20,
  },
  clickableTextContainerStyle: {
    width,
    borderRadius: 10,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkStyle: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
  registerStyle: {
    fontSize: 14,
    color: 'red',
    textDecorationLine: 'underline',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Register;
