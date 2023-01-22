import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";

export default function Home() {
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

  const [checked, setChecked] = React.useState(false);

  function Nothing(props) {
    return (
      <Card>
        <Card.Title> hello </Card.Title>
        <Card.Content>
          <Text>yo</Text>
        </Card.Content>
      </Card>
    );
  }
  function Selfcare(props) {
    return <Text>yo (selfcare)</Text>;
  }
  function Study(props) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.title}></Text>
            <Text style={styles.title}>YOU ARE</Text>
            <Text style={styles.title}>STUDYING</Text>
            <Text style={styles.title}></Text>
            <Image source={require("../assets/stuff/corgi-reading.gif")} />
          </Card>
        </View>
      </SafeAreaView>
    );
  }
  function Exercise(props) {
    return <Text>yo (exercise)</Text>;
  }
  function Clean(props) {
    return <Text>yo (cleaning) </Text>;
  }

  function onCheckedChange(isChecked) {
    setChecked(isChecked);
  }

  function ChangeMode({ mode }) {
    if (mode === 1) {
      return <Nothing />;
    } else if (mode === 1) {
      return <Nothing />;
    } else if (mode === 2) {
      return <Selfcare />;
    } else if (mode === 3) {
      return <Study />;
    } else if (mode === 4) {
      return <Exercise />;
    } else if (mode === 5) {
      return <Clean />;
    }
  }

  return (
    <>
      <ChangeMode mode={3} />
    </>
  );
}
