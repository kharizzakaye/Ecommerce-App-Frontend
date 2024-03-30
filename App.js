import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart } from './screens';

// to manage navigation
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  // check if fonts have loaded
  const onLayoutRootView = useCallback ( async() => {
    if (fontsLoaded)
    {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded)
  {
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='BottomNavigation'
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}