import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import SubmitBtn from "../components/SubmitBtn";
import NextSection from "../components/NextSection";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Verifyotp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verifyotp}>
      <Text style={styles.loginUsingOther}>
        Kode verifikasi akan kedaluwarsa pada 00:59
      </Text>
      <Text style={styles.loginUsingOther1}>Kirim Ulang Kode</Text>
      <SubmitBtn
        buttonText="SUBMIT CODE"
        submitBtnPosition="absolute"
        submitBtnTop={275}
        submitBtnLeft={20}
      />
      <View style={styles.otpInput}>
        <View style={[styles.otpInputChild, styles.otpChildLayout]} />
        <View style={[styles.otpInputItem, styles.otpChildLayout]} />
        <View style={[styles.otpInputInner, styles.otpChildLayout]} />
        <View style={[styles.lineView, styles.otpChildLayout]} />
        <View style={[styles.otpInputChild1, styles.otpChildLayout]} />
        <View style={[styles.otpInputChild2, styles.otpChildLayout]} />
        <Text style={[styles.text, styles.textTypo]}>0</Text>
        <Text style={[styles.text1, styles.textTypo]}>0</Text>
        <Text style={[styles.text2, styles.textTypo]}>0</Text>
        <Text style={[styles.text3, styles.textTypo]}>0</Text>
        <Text style={[styles.text4, styles.textTypo]}>0</Text>
        <Text style={[styles.text5, styles.textTypo]}>0</Text>
      </View>
      <View style={styles.textDetails}>
        <Text
          style={styles.loginUsingOther2}
        >{`Kami hanya mengirimkan Anda kode verifikasi melalui telepon
+91 9265614292`}</Text>
        <Text style={styles.enterTheVerify}>Enter the verify code</Text>
      </View>
      <Pressable
        style={styles.backBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back-btn.png")}
        />
      </Pressable>
      <NextSection
        propTop={731}
        propLeft={14}
        onGroupPressablePress={() => navigation.navigate("Loginsuccess")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  otpChildLayout: {
    height: 1,
    width: 48,
    borderTopWidth: 1,
    borderColor: Color.colorMidnightblue_100,
    borderStyle: "solid",
    top: 54,
    position: "absolute",
  },
  textTypo: {
    height: 42,
    width: 19,
    fontSize: FontSize.size_5xl,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    top: 0,
    fontFamily: FontFamily.overpassRegular,
    color: Color.colorMidnightblue_300,
    position: "absolute",
  },
  loginUsingOther: {
    top: 358,
    left: 59,
    width: 257,
    height: 21,
    textAlign: "center",
    color: Color.colorMidnightblue_300,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  loginUsingOther1: {
    top: 417,
    color: Color.colorMediumslateblue_100,
    width: 115,
    fontFamily: FontFamily.overpassRegular,
    left: 127,
    height: 21,
    textAlign: "center",
    lineHeight: 19,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  otpInputChild: {
    left: 0,
    width: 48,
    borderTopWidth: 1,
    borderColor: Color.colorMidnightblue_100,
    borderStyle: "solid",
    top: 54,
  },
  otpInputItem: {
    left: 63,
    width: 48,
    borderTopWidth: 1,
    borderColor: Color.colorMidnightblue_100,
    borderStyle: "solid",
    top: 54,
  },
  otpInputInner: {
    width: 48,
    borderTopWidth: 1,
    borderColor: Color.colorMidnightblue_100,
    borderStyle: "solid",
    top: 54,
    left: 127,
  },
  lineView: {
    left: 190,
    width: 48,
    borderTopWidth: 1,
    borderColor: Color.colorMidnightblue_100,
    borderStyle: "solid",
    top: 54,
  },
  otpInputChild1: {
    left: 253,
    width: 48,
    borderTopWidth: 1,
    borderColor: Color.colorMidnightblue_100,
    borderStyle: "solid",
    top: 54,
  },
  otpInputChild2: {
    left: 317,
    width: 48,
    borderTopWidth: 1,
    borderColor: Color.colorMidnightblue_100,
    borderStyle: "solid",
    top: 54,
  },
  text: {
    left: 15,
  },
  text1: {
    left: 79,
  },
  text2: {
    left: 142,
  },
  text3: {
    left: 206,
  },
  text4: {
    left: 269,
  },
  text5: {
    left: 333,
  },
  otpInput: {
    top: 191,
    left: 5,
    width: 364,
    height: 54,
    position: "absolute",
  },
  loginUsingOther2: {
    top: 46,
    left: 6,
    lineHeight: 21,
    width: 347,
    height: 48,
    textAlign: "left",
    color: Color.colorMidnightblue_300,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  enterTheVerify: {
    fontSize: 30,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorMidnightblue_100,
    justifyContent: "center",
    width: 314,
    height: 36,
    alignItems: "flex-end",
    display: "flex",
    top: 0,
    left: 0,
    textAlign: "center",
    position: "absolute",
  },
  textDetails: {
    top: 68,
    left: 19,
    width: 353,
    height: 94,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backBtn: {
    left: 25,
    top: 23,
    width: 28,
    height: 27,
    position: "absolute",
  },
  verifyotp: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Verifyotp;
