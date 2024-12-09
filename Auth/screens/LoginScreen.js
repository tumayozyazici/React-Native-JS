import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import AuthContent from '../components/AuthContent';
import Loading from '../components/Loading';
import { useNavigation } from '@react-navigation/native';
import { login } from '../util/auth';
import { AuthContext } from '../store/auth-context';

export default function LoginScreen() {
  const authContext = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password)
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert('Login Failed.','Please check your information.')
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <Loading message='Logging User...' />
  }
  return (
    <View>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
