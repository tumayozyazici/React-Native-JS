import { StyleSheet, Text, View,Alert } from 'react-native';
import React, { useState,useContext } from 'react';
import AuthContent from '../components/AuthContent'
import { createUser } from '../util/auth';
import Loading from '../components/Loading';
import { AuthContext } from '../store/auth-context';



export default function SignupScreen() {
  const authContext = useContext(AuthContext)
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password)
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert('Signing Up is Failed.','Please check your information.')
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <Loading message = 'Creating User...'/>
  }

  return (
    <AuthContent onAuthenticate={signUpHandler} />
  );
}

const styles = StyleSheet.create({});
