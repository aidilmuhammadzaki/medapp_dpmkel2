import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";

const IPhoneX11ProLightBas = ({ dimensionText, carDimensions }) => {
  return (
    <View style={[styles.iphoneX11ProLightBas, styles.batteryIconPosition]}>
      <View style={styles.rightSide}>
        <Image
          style={[styles.batteryIcon, styles.batteryIconPosition]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={dimensionText}
        />
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <Image
          style={styles.recordingIndicatorIcon}
          contentFit="cover"
          source={require("../assets/recording-indicator.png")}
        />
      </View>
      <Image
        style={styles.leftSideIcon}
        contentFit="cover"
        source={carDimensions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  batteryIconPosition: {
    top: 0,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneX11ProLightBas: {
    left: 0,
    width: 375,
    height: 44,
    overflow: "hidden",
  },
});

export default IPhoneX11ProLightBas;
