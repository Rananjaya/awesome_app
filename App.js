import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/Login';
import DashboardScreen from './src/screens/Dashboard';
import 'react-native-gesture-handler';
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="loginScreen" component={LoginScreen} />
        <Stack.Screen name="dashboardScreen" component={DashboardScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
};

export default App;

const styles = StyleSheet.create({});
