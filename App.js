import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import theme from "./theme.json";

import Studying from "./screens/Studying";
import Chores from "./screens/Chores";
import Exercise from "./screens/Exercise";
import SelfCare from "./screens/SelfCare";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Studying" component={Studying}></Tab.Screen>
          <Tab.Screen name="Chores" component={Chores}></Tab.Screen>
          <Tab.Screen name="Exercise" component={Exercise}></Tab.Screen>
          <Tab.Screen name="Self Care" component={SelfCare}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
