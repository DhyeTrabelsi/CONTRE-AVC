import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SignInScreen from './app/src/views/screens/login/SignInScreen';
import Drawer_med from './app/src/views/screens/Profile_med/Drawer_med';
import Details_med from './app/src/views/screens/Profile_med/Details_med';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from './app/src/views/OnboardingScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(() => { (async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }

  
  })();
}, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen screenOptions={{headerShown: false}} name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="Med" component={Drawer_med} />
        <Stack.Screen name="Details_med" component={Details_med} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
