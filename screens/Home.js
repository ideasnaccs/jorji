import React, { useState } from "react";
import { Button, Text } from "react-native-paper";
import { bleManager } from "../ble-utils/init";
import { DEVICE_NAME, SERVICE_UUID } from "../ble-utils/constants";

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

  return (
    <>
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
