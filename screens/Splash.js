import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splash}
      onPress={() => navigation.navigate("GetStarted2")}
    >
      <Image
        style={[styles.logoBackgroundIcon, styles.logoIconPosition]}
        contentFit="cover"
        source={require("../assets/logo-background.png")}
      />
      <View style={[styles.logoInfo, styles.logoInfoLayout]}>
        <Image
          style={[styles.logoIcon, styles.logoIconPosition]}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
        <Text
          style={[styles.riauMedicine, styles.logoInfoLayout]}
        >{`Riau Medicine `}</Text>
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logoIconPosition: {
    top: 0,
    position: "absolute",
  },
  logoInfoLayout: {
    width: 289,
    position: "absolute",
  },
  logoBackgroundIcon: {
    left: -47,
    width: 468,
    height: 812,
    top: 0,
  },
  logoIcon: {
    left: 107,
    width: 114,
    height: 74,
  },
  riauMedicine: {
    top: 90,
    left: 0,
    fontSize: FontSize.size_9xl,
    fontStyle: "italic",
    fontFamily: FontFamily.robotoItalic,
    color: Color.colorWhite,
    textAlign: "center",
  },
  logoInfo: {
    top: 345,
    left: 43,
    height: 124,
  },
  vectorIcon: {
    height: "6.16%",
    width: "13.33%",
    top: "43.84%",
    right: "43.47%",
    bottom: "50%",
    left: "43.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  splash: {
    backgroundColor: Color.colorMediumslateblue_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default Splash;
