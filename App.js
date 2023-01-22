import { React, useState, useCallback } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import {
  Provider,
  BottomNavigation,
  MD3LightTheme,
  configureFonts,
} from "react-native-paper";

import Home from "./screens/Home";
import Stats from "./screens/Stats";
import Closet from "./screens/Closet";

SplashScreen.preventAutoHideAsync();

const fontConfig = {
  fontFamily: "Recoleta-Regular",
};

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
};

function BottomTabs() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: require("./assets/tab-bar/home.png"),
    },
    {
      key: "stats",
      title: "Stats",
      focusedIcon: require("./assets/tab-bar/stats.png"),
    },
    {
      key: "closet",
      title: "Closet",
      focusedIcon: require("./assets/tab-bar/closet.png"),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    stats: Stats,
    closet: Closet,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "Recoleta-Regular": require("./assets/fonts/Recoleta-Regular.ttf"),
    "Recoleta-Bold": require("./assets/fonts/Recoleta-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider theme={theme}>
      <BottomTabs />
    </Provider>
  );
}
