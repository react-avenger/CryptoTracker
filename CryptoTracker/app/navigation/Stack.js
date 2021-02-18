import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import Home from '../screens/Home';
import SearchCurrency from '../screens/SearchCurrency';

const Stack = createStackNavigator();
const homeOptions = {
  title: 'My home',
  headerStyle: {
    backgroundColor: '#fff',
  },

  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} options={homeOptions} />
        <Stack.Screen name="SearchCurrency" component={SearchCurrency} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
