import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
    //     <Stack.Screen
    //       name="Inicio"
    //       component={
    //       }
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
