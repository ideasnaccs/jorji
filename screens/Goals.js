import React from "react";
import { Text } from "react-native-paper";

export default function Home() {
  const [pressed, setPressed] = React.setState(false);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#ecf0f1",
      padding: 20,
      border: 0,
    },
    subtitle: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      padding: 5,
    },
    title: {
      fontSize: 36,
      fontWeight: "bold",
      textAlign: "center",
      padding: 5,
    },
  });

  if (pressed) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.title}></Text>
            <Text style={styles.title}>Excellent!</Text>
            <Text style={styles.title}>Go forth and prosper :D</Text>
          </Card>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.title}></Text>
            <Text style={styles.title}>What's your goal?</Text>
            <Text style={styles.title}></Text>
            <Image source={require("../assets/stuff/self-care.png")} />
            <Image source={require("../assets/stuff/studying.png")} />
            <Image source={require("../assets/stuff/exercise.png")} />
            <Image source={require("../assets/stuff/cleaning.png")} />
          </Card>
        </View>
      </SafeAreaView>
    );
  }
}
