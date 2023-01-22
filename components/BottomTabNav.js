import { useState } from "react";
import { BottomNavigation } from "react-native-paper";

import Home from "../screens/Home";
import Goals from "../screens/Goals";
import Stats from "../screens/Stats";
import Closet from "../screens/Closet";

export default function BottomTabNav() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: require("../assets/tab-bar/home.png"),
    },
    {
      key: "stats",
      title: "Stats",
      focusedIcon: require("../assets/tab-bar/stats.png"),
    },
    {
      key: "goals",
      title: "Goals",
      focusedIcon: require("../assets/tab-bar/goals.png"),
    },
    {
      key: "closet",
      title: "Closet",
      focusedIcon: require("../assets/tab-bar/closet.png"),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    stats: Stats,
    goals: Goals,
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
