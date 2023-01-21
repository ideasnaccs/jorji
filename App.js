import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Studying from "./screens/Studying";
import Chores from "./screens/Chores";
import Exercise from "./screens/Exercise";
import SelfCare from "./screens/SelfCare";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Studying" component={Studying}></Tab.Screen>
        <Tab.Screen name="Chores" component={Chores}></Tab.Screen>
        <Tab.Screen name="Exercise" component={Exercise}></Tab.Screen>
        <Tab.Screen name="Self Care" component={SelfCare}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
