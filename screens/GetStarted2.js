import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import IPhoneX11ProLightBas from "../components/IPhoneX11ProLightBas";
import HomeIndicatorLight from "../components/HomeIndicatorLight";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const GetStarted2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.getStarted}>
      <View style={[styles.light, styles.nextPosition]}>
        <IPhoneX11ProLightBas
          dimensionText={require("../assets/wifi.png")}
          carDimensions={require("../assets/left-side.png")}
        />
        <HomeIndicatorLight />
      </View>
      <Text style={[styles.langkah1Of, styles.nextTypo]}>Langkah 1 of 3</Text>
      <Text
        style={styles.masukkanAlamatEmail}
      >{`Masukkan Alamat Email Anda dan pilih yang kuat
Kata sandi.`}</Text>
      <Text style={[styles.atau, styles.atauClr]}>ATAU</Text>
      <Pressable
        style={styles.gunakanNomorPonselContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={[styles.gunakanNomorPonselSaya, styles.atauTypo]}
        >{`Gunakan Nomor Ponsel Saya `}</Text>
      </Pressable>
      <Text style={[styles.mulai, styles.atauClr]}>Mulai</Text>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.emailAddress, styles.nextTypo]}>
          Email Address
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.emailAddress, styles.nextTypo]}>Password</Text>
      </View>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleLayout]}
        onPress={() => navigation.navigate("GetStarted1")}
      >
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={styles.nextWrapper}>
          <Text style={[styles.next, styles.nextTypo]}>Next</Text>
        </View>
      </Pressable>
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nextPosition: {
    left: 0,
    top: 0,
  },
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  atauClr: {
    color: Color.colorGray_300,
    textAlign: "left",
    position: "absolute",
  },
  atauTypo: {
    fontSize: FontSize.size_sm,
    lineHeight: 8,
    fontFamily: FontFamily.robotoRegular,
  },
  rectangleLayout: {
    height: 44,
    width: 343,
    left: 16,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_7xs,
    height: 44,
    width: 343,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupIconLayout: {
    width: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  light: {
    width: 375,
    position: "absolute",
    height: 812,
    top: 0,
  },
  langkah1Of: {
    top: 96,
    fontSize: FontSize.size_lgi,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    left: 16,
  },
  masukkanAlamatEmail: {
    top: 178,
    fontSize: FontSize.size_xs,
    lineHeight: 8,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoRegular,
    left: 16,
    position: "absolute",
  },
  atau: {
    top: 368,
    left: 177,
    fontSize: FontSize.size_sm,
    lineHeight: 8,
    fontFamily: FontFamily.robotoRegular,
  },
  gunakanNomorPonselSaya: {
    color: Color.colorMediumslateblue_200,
    textAlign: "center",
  },
  gunakanNomorPonselContainer: {
    left: 95,
    top: 400,
    position: "absolute",
  },
  mulai: {
    top: 137,
    fontSize: FontSize.size_14xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    lineHeight: 25,
    left: 16,
    color: Color.colorGray_300,
  },
  groupIcon: {
    height: "1.77%",
    width: "4.27%",
    top: "37.78%",
    right: "8%",
    bottom: "60.44%",
    left: "87.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
  },
  emailAddress: {
    top: 16,
    left: 8,
    fontSize: FontSize.size_base,
    lineHeight: 12,
    color: Color.colorLightgray,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  rectangleParent: {
    top: 240,
  },
  rectangleGroup: {
    top: 300,
  },
  groupInner: {
    backgroundColor: Color.colorMediumslateblue_200,
  },
  next: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    lineHeight: 25,
    left: 0,
    top: 0,
  },
  nextWrapper: {
    top: 11,
    left: 152,
    width: 39,
    height: 25,
    position: "absolute",
  },
  rectangleContainer: {
    top: 731,
  },
  groupIcon1: {
    height: "2.22%",
    top: "38.55%",
    right: "7.73%",
    bottom: "59.24%",
    left: "86.93%",
  },
  groupIcon2: {
    height: "1.85%",
    top: "7.76%",
    right: "90.13%",
    bottom: "90.39%",
    left: "4.53%",
  },
  getStarted: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default GetStarted2;
