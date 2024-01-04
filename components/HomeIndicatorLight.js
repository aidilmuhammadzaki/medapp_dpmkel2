import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const HomeIndicatorLight = () => {
  return (
    <View style={styles.homeIndicatorLight}>
      <View style={styles.homeIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicatorLight: {
    top: 778,
    left: 0,
    width: 375,
    height: 34,
    position: "absolute",
  },
});

export default HomeIndicatorLight;
