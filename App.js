import { React, useState } from "react";

import { Provider, BottomNavigation } from "react-native-paper";

import Home from "./screens/Home";
import Stats from "./screens/Stats";
import Closet from "./screens/Closet";

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "heart",
    },
    { key: "stats", title: "Stats", focusedIcon: "album" },
    {
      key: "closet",
      title: "Closet",
      focusedIcon: "bell",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    stats: Stats,
    closet: Closet,
  });

  return (
    <Provider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </Provider>
  );
}
