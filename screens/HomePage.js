import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import IPhoneX11ProLightBas from "../components/IPhoneX11ProLightBas";
import HomeIndicatorLight from "../components/HomeIndicatorLight";
import { useNavigation } from "@react-navigation/native";
import MembershipSection1 from "../components/MembershipSection1";
import UnggahResepForm1 from "../components/UnggahResepForm1";
import SectionCard1 from "../components/SectionCard1";
import SectionCardForm1 from "../components/SectionCardForm1";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage}>
      <View style={[styles.light, styles.lightLayout]}>
        <IPhoneX11ProLightBas
          dimensionText={require("../assets/wifi2.png")}
          carDimensions={require("../assets/left-side2.png")}
        />
        <HomeIndicatorLight />
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.parentFlexBox}>
          <Text style={[styles.selamatPagi, styles.selamatPagiTypo]}>
            Selamat Pagi
          </Text>
          <Pressable
            style={styles.aditya}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text style={styles.aditya1}>Aditya,</Text>
          </Pressable>
        </View>
        <View style={[styles.groupParent, styles.parentFlexBox]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group4.png")}
          />
          <Image
            style={styles.groupIcon1}
            contentFit="cover"
            source={require("../assets/group5.png")}
          />
        </View>
      </View>
      <MembershipSection1 />
      <UnggahResepForm1 />
      <Text style={[styles.pesananTerbaru, styles.selamatPagiTypo]}>
        Pesanan Terbaru
      </Text>
      <SectionCard1 />
      <SectionCardForm1 />
      <View style={[styles.homepageChild, styles.homepagePosition]} />
      <View style={styles.groupGroup}>
        <Image
          style={[styles.groupIcon2, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group7.png")}
        />
        <Text style={styles.home}>Home</Text>
      </View>
      <Image
        style={[styles.homepageItem, styles.homepagePosition]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Pressable
        style={[styles.produkParent, styles.parentPosition]}
        onPress={() => navigation.navigate("Medicines")}
      >
        <Text style={[styles.produk, styles.akunTypo]}>Produk</Text>
        <Image
          style={[styles.groupIcon3, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group8.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.akunParent, styles.parentPosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
        <Image
          style={[styles.groupIcon4, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group9.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  lightLayout: {
    width: 375,
    left: 0,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  selamatPagiTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
  },
  homepagePosition: {
    top: 735,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  parentPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  akunTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    position: "absolute",
  },
  light: {
    top: 0,
    position: "absolute",
    height: 812,
    width: 375,
    left: 0,
  },
  selamatPagi: {
    fontSize: FontSize.size_3xl,
    opacity: 0.75,
  },
  aditya1: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    width: 101,
    height: 24,
    color: Color.colorMediumslateblue_200,
    textAlign: "left",
    lineHeight: 25,
  },
  aditya: {
    marginLeft: 7,
  },
  groupIcon: {
    width: 17,
    height: 17,
  },
  groupIcon1: {
    width: 16,
    height: 21,
    marginLeft: 21,
  },
  groupParent: {
    marginLeft: 50,
  },
  frameParent: {
    top: 104,
    left: 17,
    position: "absolute",
  },
  pesananTerbaru: {
    top: 572,
    left: 16,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  homepageChild: {
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    height: 76,
    width: 375,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 735,
  },
  groupIcon2: {
    height: "47.15%",
    width: "53.85%",
    right: "23.08%",
    bottom: "52.85%",
    left: "23.08%",
  },
  home: {
    fontSize: FontSize.size_sm,
    top: 32,
    color: Color.colorMediumslateblue_200,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    position: "absolute",
  },
  groupGroup: {
    height: "6.06%",
    width: "10.4%",
    top: "92.86%",
    right: "82.4%",
    bottom: "1.08%",
    left: "7.2%",
    position: "absolute",
  },
  homepageItem: {
    left: 30,
    height: 11,
    width: 34,
  },
  produk: {
    top: 31,
    textAlign: "center",
  },
  groupIcon3: {
    height: "45.64%",
    width: "48.89%",
    right: "24.44%",
    bottom: "54.36%",
    left: "26.67%",
  },
  produkParent: {
    top: 753,
    left: 165,
    width: 45,
    height: 48,
  },
  akun: {
    top: 32,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  groupIcon4: {
    height: "48.56%",
    width: "61.76%",
    right: "20.59%",
    bottom: "51.44%",
    left: "17.65%",
  },
  akunParent: {
    top: 754,
    left: 305,
    height: 49,
    width: 34,
  },
  homepage: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default HomePage;
