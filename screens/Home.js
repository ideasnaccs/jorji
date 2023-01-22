import React, { useState, useRef } from "react";
import { Button, Text, Card } from "react-native-paper";
import { bleManager } from "../ble-utils/init";
import { DEVICE_NAME } from "../ble-utils/constants";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import StopwatchTimer from "react-native-animated-stopwatch-timer";

const MODE_DATA = {
  1: {
    titles: ["HELLO!!", "HOPE YOU ARE HAVING A GREAT DAY!", ""],
    image: require("../assets/stuff/corgi-pop.gif"),
  },
  2: {
    titles: ["CURRENTLY", "doing self care!", "TAKE A BREAK!"],
    image: require("../assets/stuff/corgi-sleeping.gif"),
  },
  3: {
    titles: ["CURRENTLY", "studying!", "YOU GOT THIS!"],
    image: require("../assets/stuff/corgi-reading.gif"),
  },
  4: {
    titles: ["CURRENTLY", "cleaning!", "YOU'RE DOING THIS FOR FUTURE YOU"],
    image: require("../assets/stuff/corgi-sweeping.gif"),
  },
  5: {
    titles: ["CURRENTLY", "exercising!", "YOU'RE DOING AMAZING!"],
    image: require("../assets/stuff/corgi-satisfied.gif"),
  },
};

export default function Home() {
  const [unconnectedDevice, setUnconnectedDevice] = useState(null);
  const [device, setDevice] = useState(null);
  const stopwatchRef = useRef(null);

  function startScan() {
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error(`Took an L when scanning: ${error}`);
      }

      if (device.name === DEVICE_NAME) {
        setUnconnectedDevice(device);

        bleManager.stopDeviceScan();
      }
    });
  }

  function connectDevice() {
    if (unconnectedDevice === null) {
      return;
    }

    unconnectedDevice.connect().then(async (connectedDevice) => {
      await connectedDevice.discoverAllServicesAndCharacteristics();
      setDevice(connectedDevice);
      setUnconnectedDevice(null);
    });
  }

  function disconnectDevice() {
    if (device === null) {
      return;
    }

    device.cancelConnection();
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-end",
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
    image: {
      alignSelf: "center",
    },
    stopWatchContainer: {
      alignSelf: "center",
      justifyContent: "center",
      padding: 20,
      backgroundColor: "#cfbfee",
      borderRadius: 24,
      width: 130,
    },
    stopWatchChar: {
      fontFamily: "Recoleta-Bold",
      fontSize: 24,
      alignSelf: "center",
    },
    button: {
      alignSelf: "center",
      width: 250,
      margin: 60,
    },
    buttonLabel: {
      fontFamily: "Recoleta-Bold",
      fontSize: 16,
    },
  });

  const [mode, setMode] = useState(5);

  function JorjiMode({ titles, image }) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Card mode="contained">
            <Text style={styles.title}>{titles[0]}</Text>
            <Text style={styles.title}>{titles[1]}</Text>
            <Image style={styles.image} source={image} />
            <StopwatchTimer
              ref={stopwatchRef}
              containerStyle={styles.stopWatchContainer}
              // `textCharStyle` is required, otherwise the app crashes. Not sure why.
              textCharStyle={styles.stopWatchChar}
              trailingZeros={0}
            />
            <Text style={styles.subtitle}>{titles[2]}</Text>
          </Card>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <>
      <JorjiMode
        titles={MODE_DATA[mode].titles}
        image={MODE_DATA[mode].image}
      />
      {unconnectedDevice === null ? (
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={() => startScan()}
        >
          SCAN FOR JORJI
        </Button>
      ) : device === null ? (
        <Button
          mode="contained"
          contentStyle={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={() => connectDevice()}
        >
          CONNECT ME HARDER
        </Button>
      ) : (
        <Button
          mode="contained"
          contentStyle={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={() => disconnectDevice()}
        >
          DISCONNECT ME HARDER
        </Button>
      )}
    </>
  );
}
