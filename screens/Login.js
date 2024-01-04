import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NextSection from "../components/NextSection";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.splashDetails}>
        <Text style={[styles.silakanMasukkanNomor, styles.textFlexBox]}>
          Silakan Masukkan Nomor Ponsel Anda untuk Login/Daftar
        </Text>
      </View>
      <View style={[styles.logoInfo, styles.logoInfoLayout]}>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo1.png")}
        />
        <Text style={[styles.riauMedicine, styles.logoInfoLayout]}>
          Riau Medicine
        </Text>
      </View>
      <View style={styles.loginChild} />
      <Text style={[styles.text, styles.textFlexBox]}>+91 9265614292</Text>
      <NextSection
        propTop={734}
        propLeft={16}
        onGroupPressablePress={() => navigation.navigate("Verifyotp")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.colorMidnightblue_300,
    position: "absolute",
  },
  logoInfoLayout: {
    width: 289,
    position: "absolute",
  },
  silakanMasukkanNomor: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    top: 0,
    width: 255,
  },
  splashDetails: {
    top: 450,
    height: 48,
    width: 255,
    left: 43,
    position: "absolute",
  },
  logoIcon: {
    left: 107,
    width: 74,
    height: 74,
    top: 0,
    position: "absolute",
  },
  riauMedicine: {
    top: 90,
    fontSize: FontSize.size_9xl,
    fontStyle: "italic",
    fontFamily: FontFamily.robotoItalic,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    left: 0,
  },
  logoInfo: {
    top: 239,
    height: 124,
    left: 43,
  },
  loginChild: {
    top: 534,
    left: 38,
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: Color.labelColorLightPrimary,
    borderWidth: 1,
    width: 299,
    height: 44,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 532,
    left: 49,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.overpassRegular,
    width: 270,
    height: 42,
  },
  login: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Login;
