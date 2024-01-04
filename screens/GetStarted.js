import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import IPhoneX11ProLightBas from "../components/IPhoneX11ProLightBas";
import HomeIndicatorLight from "../components/HomeIndicatorLight";
import AddressSection from "../components/AddressSection";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.getStarted, styles.iconLayout]}>
      <Text style={[styles.langkah3Of, styles.langkah3OfTypo]}>
        Langkah 3 of 3
      </Text>
      <Text
        style={[styles.masukkanAlamatAnda, styles.langkah3OfTypo]}
      >{`Masukkan alamat Anda di mana kami mengirimkan obat-obatan Anda
dan detail janji temu pemesanan Anda.`}</Text>
      <Text style={[styles.beritahuKamiAlamat, styles.rectangleParentPosition]}>
        Beritahu kami Alamat Anda
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("SelectAPlan1")}
      >
        <View style={[styles.groupChild, styles.nextPosition]} />
        <View style={styles.nextWrapper}>
          <Text style={[styles.next, styles.nextPosition]}>Next</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("GetStarted1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group2.png")}
        />
      </Pressable>
      <View style={[styles.light, styles.nextPosition]}>
        <IPhoneX11ProLightBas
          dimensionText={require("../assets/wifi.png")}
          carDimensions={require("../assets/left-side1.png")}
        />
        <HomeIndicatorLight />
      </View>
      <AddressSection />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  langkah3OfTypo: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 16,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 16,
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 343,
  },
  nextPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  langkah3Of: {
    top: 97,
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    lineHeight: 25,
  },
  masukkanAlamatAnda: {
    top: 179,
    fontSize: FontSize.size_2xs,
    lineHeight: 8,
    textAlign: "left",
  },
  beritahuKamiAlamat: {
    top: 138,
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_300,
    textAlign: "left",
    lineHeight: 25,
  },
  groupChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorMediumslateblue_200,
    height: 44,
    width: 343,
  },
  next: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    top: 0,
    lineHeight: 25,
  },
  nextWrapper: {
    top: 11,
    left: 152,
    width: 39,
    height: 25,
    position: "absolute",
  },
  rectangleParent: {
    top: 731,
    left: 16,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  group: {
    left: "4.53%",
    top: "7.76%",
    right: "90.13%",
    bottom: "90.39%",
    width: "5.33%",
    height: "1.85%",
    position: "absolute",
  },
  light: {
    width: 375,
    height: 812,
  },
  getStarted: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
  },
});

export default GetStarted;
