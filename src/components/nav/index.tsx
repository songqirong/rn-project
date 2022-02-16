import React, { FC }  from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from '../../pages/routes';
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Toast } from "../index";
const Stack = createNativeStackNavigator();

export const Nav: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
          <Stack.Navigator initialRouteName='qrcode' screenOptions={ (props)  => {
            return {
              // headerTitleAlign: 'center',
              header: () => undefined,
            };
          }}>
            {routes.map(item => (
              <Stack.Screen component={item.component} name={item.name} navigationKey={item.name} key={item.name} />
            ))}
          </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </SafeAreaView>
  )
}