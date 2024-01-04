import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NextSection from "../components/NextSection";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Loginsuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginsuccess}>
      <View style={styles.numberVerifiedDetails}>
        <Text style={[styles.loginUsingOther, styles.loginUsingOtherFlexBox]}>
          Selamat, nomor telepon Anda telah diverifikasi. Anda dapat mulai
          menggunakan aplikasi ini
        </Text>
        <Text
          style={[
            styles.nomorTeleponTerverifikasi,
            styles.loginUsingOtherFlexBox,
          ]}
        >
          Nomor Telepon Terverifikasi
        </Text>
      </View>
      <Image
        style={styles.taddaaaImageIcon}
        contentFit="cover"
        source={require("../assets/taddaaa-image.png")}
      />
      <NextSection
        propTop={730}
        propLeft={13}
        onGroupPressablePress={() => navigation.navigate("HomePage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginUsingOtherFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  loginUsingOther: {
    top: 53,
    left: 2,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorMidnightblue_300,
    width: 275,
    height: 79,
  },
  nomorTeleponTerverifikasi: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_5xl,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorMidnightblue_100,
    height: 35,
    width: 280,
  },
  numberVerifiedDetails: {
    top: 441,
    left: 45,
    height: 132,
    width: 280,
    position: "absolute",
  },
  taddaaaImageIcon: {
    top: 172,
    left: 56,
    width: 269,
    height: 216,
    position: "absolute",
  },
  loginsuccess: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Loginsuccess;
