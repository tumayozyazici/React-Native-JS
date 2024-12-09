import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blueviolet'
        },
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen}
        options={{ headerTitle: 'User Login' }}
      />
      <Stack.Screen name="Signup" component={SignupScreen}
        options={{ headerTitle: 'User SignUp' }}
      />
    </Stack.Navigator>
  );
}

function AfterAuthenticatedStack() {
  const authContext = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blueviolet'
        },
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen}
        options={{ 
          headerTitle: 'Home Page',
          headerRight:()=>(
          <Pressable style={({pressed})=>pressed && styles.pressed}
          onPress={authContext.logout}
          >
            <MaterialIcons name="logout" size={24} color="black" />
            </Pressable>
        ) 
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authContext.isAuthenticated && <NormalStack/>}
      {authContext.isAuthenticated && <AfterAuthenticatedStack/>}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  pressed:{
    opacity:0.5
  }
});
