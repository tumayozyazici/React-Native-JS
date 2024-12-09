import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const handleLogout = () => {
    auth.signOut()
    .then(() => navigation.navigate('Login'))
    .catch(error=> alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Logged in user: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button}
        onPress={handleLogout}
      >
        <Text style={styles.buttontext}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    backgroundColor: '#0782F9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 700
  }
});
