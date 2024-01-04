import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import IPhoneX11ProLightBas from "../components/IPhoneX11ProLightBas";
import HomeIndicatorLight from "../components/HomeIndicatorLight";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const GetStarted1 = () => {
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
      <Text style={[styles.langkah2Of, styles.namaFlexBox]}>
        Langkah 2 of 3
      </Text>
      <Text
        style={[styles.masukkanNamaDepan, styles.namaFlexBox]}
      >{`Masukkan Nama Depan Anda, Nama Belakang, Tanggal Lahir untuk 
mendapatkan
 dimulai dengan akun Anda.`}</Text>
      <Text style={[styles.beritahuKamiDetail, styles.namaFlexBox]}>
        Beritahu kami Detail Anda
      </Text>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleGroupLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.firstName, styles.namaFlexBox]}>First Name</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.firstName, styles.namaFlexBox]}>Last Name</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleGroupLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.firstName, styles.namaFlexBox]}>Birth Date</Text>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.rectangleGroupLayout]}
        onPress={() => navigation.navigate("GetStarted")}
      >
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <View style={styles.nextWrapper}>
          <Text style={[styles.next, styles.namaFlexBox]}>Next</Text>
        </View>
      </Pressable>
      <Text style={[styles.namaDanTanggal, styles.namaFlexBox]}>
        Nama dan Tanggal Lahir Anda harus sama dengan yang ada di resep saat
        Anda mengunggahnya di masa mendatang obat untuk diberikan.
      </Text>
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("GetStarted2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  nextPosition: {
    left: 0,
    top: 0,
  },
  namaFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleGroupLayout: {
    height: 44,
    width: 343,
    left: 16,
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_7xs,
    height: 44,
    width: 343,
    left: 0,
    top: 0,
    position: "absolute",
  },
  light: {
    width: 375,
    position: "absolute",
    height: 812,
    top: 0,
  },
  langkah2Of: {
    top: 97,
    fontSize: FontSize.size_lgi,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    left: 16,
  },
  masukkanNamaDepan: {
    top: 179,
    fontSize: FontSize.size_2xs,
    lineHeight: 8,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 16,
  },
  beritahuKamiDetail: {
    top: 138,
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_300,
    lineHeight: 25,
    left: 16,
  },
  groupIcon: {
    height: "1.77%",
    width: "4.27%",
    top: "37.78%",
    right: "8%",
    bottom: "60.44%",
    left: "87.73%",
    position: "absolute",
  },
  groupChild: {
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
  },
  firstName: {
    top: 16,
    left: 8,
    fontSize: FontSize.size_base,
    lineHeight: 12,
    color: Color.colorLightgray,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  rectangleParent: {
    top: 241,
  },
  rectangleGroup: {
    top: 301,
  },
  rectangleContainer: {
    top: 361,
  },
  rectangleView: {
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
  groupPressable: {
    top: 731,
  },
  namaDanTanggal: {
    marginLeft: -169.5,
    top: 429,
    left: "50%",
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    width: 340,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
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
  getStarted: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GetStarted1;
