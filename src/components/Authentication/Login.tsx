import React, { useState, useRef } from 'react';
import { Template1 as Template } from './../ScreenTemplates';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

interface LoginProps {
  navigation: any;
}
const { width } = Dimensions.get('window');

const Login = ({ navigation }: LoginProps) => {
  const FooterContent = () => <View />;

  const [email, setEmail] = useState('');
  const emailRef = useRef(null);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const removeFocus = () => {
    emailRef.current.blur();
    passwordRef.current.blur();
    Keyboard.dismiss();
  };

  return (
    <Template title={'Login'} Footer={FooterContent}>
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
        <Button
          style={styles.buttonStyle}
          type="outline"
          title={'Login'}
          onPress={() => navigation.navigate('Home')}
        />
        <View style={styles.clickableTextContainerStyle}>
          <Text>
            Don't have an account?
            <Text
              onPress={() => navigation.navigate('Register')}
              style={styles.linkStyle}>
              {' '}
              Register{' '}
            </Text>
            here.
          </Text>
        </View>
        <View style={styles.clickableTextContainerStyle}>
          <Text>
            Forgot password?
            <Text
              onPress={() => navigation.navigate('ForgotPassword')}
              style={styles.linkStyle}>
              {' '}
              Reset{' '}
            </Text>
            here.
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
    borderWidth: 0.25,
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

export default Login;
