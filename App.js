import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";

import theme from "./theme.json";
import mapping from "./mapping.json";

import Home from "./screens/Home";
import Stats from "./screens/Stats";
import Closet from "./screens/Closet";

const { Navigator, Screen } = createBottomTabNavigator();

function BottomTabBar({ navigation, state }) {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
      customMapping={mapping}
    >
      <BottomNavigationTab title="Home" />
      <BottomNavigationTab title="Stats" />
      <BottomNavigationTab title="Closet" />
    </BottomNavigation>
  );
}

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
          <Screen name="Home" component={Home} />
          <Screen name="Stats" component={Stats} />
          <Screen name="Closet" component={Closet} />
        </Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
