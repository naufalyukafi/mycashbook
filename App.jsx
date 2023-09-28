import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/login';
import HomeScreen from './src/home';
import AddIncomeScreen from './src/income';
import AddExpenditureScreen from './src/expenditure';
import SettingScreen from './src/setting';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddIncom" component={AddIncomeScreen} />
        <Stack.Screen name="AddExpenditure" component={AddExpenditureScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
