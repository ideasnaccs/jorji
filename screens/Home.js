import React, { useState } from "react";
import { Button, Text } from "react-native-paper";
import { bleManager } from "../ble-utils/init";
import { DEVICE_NAME, SERVICE_UUID } from "../ble-utils/constants";
import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";

export default function Home() {
  const [unconnectedDevice, setUnconnectedDevice] = useState(null);
  const [device, setDevice] = useState(null);

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
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.title}></Text>
            <Text style={styles.title}>HELLO!!</Text>
            <Text style={styles.title}>HOPE YOU ARE HAVING A GREAT DAY!</Text>
            <Text style={styles.title}></Text>
            <Image source={require("../assets/stuff/corgi-pop.gif")} />
          </Card>
        </View>
      </SafeAreaView>
    );
  }
  function Selfcare(props) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.title}></Text>
            <Text style={styles.title}>CURRENTLY</Text>
            <Text style={styles.title}>doing self care!</Text>
            <Text style={styles.title}></Text>
            <Image source={require("../assets/stuff/corgi-sleeping.gif")} />
            <Text style={styles.title}>TAKE A BREAK!</Text>
          </Card>
        </View>
      </SafeAreaView>
    );
  }
  function Study(props) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.title}></Text>
            <Text style={styles.title}>CURRENTLY</Text>
            <Text style={styles.title}>studying!</Text>
            <Text style={styles.title}></Text>
            <Image source={require("../assets/stuff/corgi-reading.gif")} />
            <Text style={styles.title}>YOU GOT THIS!</Text>
          </Card>
        </View>
      </SafeAreaView>
    );
  }
  function Exercise(props) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.title}></Text>
            <Text style={styles.title}>CURRENTLY</Text>
            <Text style={styles.title}>exercising!</Text>
            <Text style={styles.title}></Text>
            <Image source={require("../assets/stuff/corgi-reading.gif")} />
            <Text style={styles.title}>YOU'RE DOING AMAZING!</Text>
          </Card>
        </View>
      </SafeAreaView>
    );
  }
  function Clean(props) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.title}></Text>
            <Text style={styles.title}>CURRENTLY</Text>
            <Text style={styles.title}>cleaning!</Text>
            <Text style={styles.title}></Text>
            <Image source={require("../assets/stuff/corgi-sweeping.gif")} />
            <Text style={styles.title}>YOU'RE DOING THIS FOR FUTURE YOU</Text>
          </Card>
        </View>
      </SafeAreaView>
    );
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
      {unconnectedDevice === null ? (
        <Button onPress={() => startScan()}>SCAN ME HARDER</Button>
      ) : device === null ? (
        <Button onPress={() => connectDevice()}>CONNECT ME HARDER</Button>
      ) : (
        <Button onPress={() => disconnectDevice()}>DISCONNECT ME HARDER</Button>
      )}
    </>
  );
}
