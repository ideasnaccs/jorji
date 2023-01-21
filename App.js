import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PaperProvider, BottomNavigation } from "react-native-paper";

import Home from "./screens/Home";
import Stats from "./screens/Stats";
import Closet from "./screens/Closet";

const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigator>
          <Screen name="Home" component={Home} />
          <Screen name="Stats" component={Stats} />
          <Screen name="Closet" component={Closet} />
        </Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
