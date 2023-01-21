import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";
import theme from "./theme.json";

import Home from "./screens/Home";
import Stats from "./screens/Stats";
import Closet from "./screens/Closet";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <BottomNavigation>
        <BottomNavigationTab title="Home" component={Home} />
        <BottomNavigationTab title="Stats" component={Stats} />
        <BottomNavigationTab title="Closet" component={Closet} />
      </BottomNavigation>
    </ApplicationProvider>
  );
}
