import { BleManager, LogLevel } from "react-native-ble-plx";

export const bleManager = new BleManager();
bleManager.logLevel(LogLevel.Verbose);
