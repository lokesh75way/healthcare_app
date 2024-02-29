import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';
import SplashScreen from './src/SplashScreen';
import { useEffect } from 'react';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name='Detail' component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
