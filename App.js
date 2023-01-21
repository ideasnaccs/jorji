import { NavigationContainer } from "@react-navigation/native";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";
import theme from "./theme.json";

import Studying from "./screens/Studying";
import Chores from "./screens/Chores";
import Exercise from "./screens/Exercise";
import SelfCare from "./screens/SelfCare";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <BottomNavigation>
        <BottomNavigationTab title="Home" component={Studying} />
        <BottomNavigationTab title="Coins" />
        <BottomNavigationTab title="Something Else IDK" />
      </BottomNavigation>
    </ApplicationProvider>
  );
}
