import { React, useState, useCallback } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import {
  Provider,
  BottomNavigation,
  MD3LightTheme,
  configureFonts,
} from "react-native-paper";

import BottomTabNav from "./components/BottomTabNav";

SplashScreen.preventAutoHideAsync();

const fontConfig = {
  fontFamily: "Recoleta-Regular",
};

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "Recoleta-Regular": require("./assets/fonts/Recoleta-Regular.ttf"),
    "Recoleta-Bold": require("./assets/fonts/Recoleta-Bold.ttf"),
  });

  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider theme={theme}>
      <BottomTabNav />
    </Provider>
  );
}
