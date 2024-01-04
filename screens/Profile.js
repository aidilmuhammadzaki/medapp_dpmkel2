import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={[styles.profileChild, styles.profileLayout]} />
      <View style={[styles.profileItem, styles.profilePosition]} />
      <View style={[styles.profileInner, styles.profilePosition]} />
      <View style={[styles.billing, styles.billingLayout]}>
        <Text style={[styles.pembayaran, styles.myProfileFlexBox]}>
          Pembayaran
        </Text>
        <View style={[styles.group5952, styles.group5952Layout]}>
          <View style={[styles.group5952Child, styles.group6516Position]} />
          <Image
            style={styles.group5952Item}
            contentFit="cover"
            source={require("../assets/vector-4.png")}
          />
        </View>
        <Image
          style={[styles.group6263Icon, styles.group6516Position]}
          contentFit="cover"
          source={require("../assets/group6263.png")}
        />
      </View>
      <View style={[styles.myOrders, styles.billingLayout]}>
        <View style={[styles.group5952, styles.group5952Layout]}>
          <View style={[styles.group5952Child, styles.group6516Position]} />
          <Image
            style={styles.group5952Item}
            contentFit="cover"
            source={require("../assets/vector-4.png")}
          />
        </View>
        <Text style={[styles.pembayaran, styles.myProfileFlexBox]}>
          Pesananku
        </Text>
        <Image
          style={[styles.group6263Icon, styles.group6516Position]}
          contentFit="cover"
          source={require("../assets/group6264.png")}
        />
      </View>
      <View style={[styles.editProfile, styles.billingLayout]}>
        <Text style={[styles.pembayaran, styles.myProfileFlexBox]}>
          Edit Profile
        </Text>
        <View style={[styles.group5952, styles.group5952Layout]}>
          <View style={[styles.group5952Child, styles.group6516Position]} />
          <Image
            style={styles.group5952Item}
            contentFit="cover"
            source={require("../assets/vector-4.png")}
          />
        </View>
        <Image
          style={[styles.group6263Icon, styles.group6516Position]}
          contentFit="cover"
          source={require("../assets/group6266.png")}
        />
      </View>
      <View style={[styles.profileName, styles.group6516Layout]}>
        <View style={[styles.group6516, styles.group6516Layout]}>
          <Text style={[styles.broadcomCorp, styles.broadcomCorpTypo]}>
            Hi, Aaditya
          </Text>
          <Text style={[styles.selamatDatangDi, styles.broadcomCorpTypo]}>
            Selamat datang di Obat App
          </Text>
        </View>
      </View>
      <View style={styles.photo1} />
      <Pressable
        style={[styles.lblMyProfile, styles.profilePosition]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.myProfile, styles.group6516Position]}>
          My Profile
        </Text>
      </Pressable>
      <Image
        style={styles.group5Icon}
        contentFit="cover"
        source={require("../assets/group51.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    height: 1,
    width: 310,
    borderTopWidth: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
  },
  profilePosition: {
    left: 63,
    position: "absolute",
  },
  billingLayout: {
    height: 24,
    position: "absolute",
  },
  myProfileFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  group5952Layout: {
    height: 16,
    width: 16,
    position: "absolute",
  },
  group6516Position: {
    left: 0,
    top: 0,
  },
  group6516Layout: {
    height: 43,
    width: 177,
    position: "absolute",
  },
  broadcomCorpTypo: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  profileChild: {
    top: 207,
    left: 59,
    position: "absolute",
  },
  profileItem: {
    top: 256,
    height: 1,
    width: 310,
    borderTopWidth: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
  },
  profileInner: {
    top: 308,
    height: 1,
    width: 310,
    borderTopWidth: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
  },
  pembayaran: {
    top: 2,
    left: 40,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.colorGray_500,
    letterSpacing: 0,
    textAlign: "left",
  },
  group5952Child: {
    height: 16,
    width: 16,
    position: "absolute",
  },
  group5952Item: {
    top: 5,
    left: 7,
    width: 3,
    height: 6,
    position: "absolute",
  },
  group5952: {
    top: 4,
    left: 311,
  },
  group6263Icon: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  billing: {
    top: 270,
    width: 327,
    left: 21,
    height: 24,
  },
  myOrders: {
    top: 219,
    width: 327,
    left: 21,
    height: 24,
  },
  editProfile: {
    top: 171,
    width: 327,
    left: 21,
    height: 24,
  },
  broadcomCorp: {
    fontSize: 20,
    top: 0,
    color: Color.colorGray_600,
    fontFamily: FontFamily.robotoRegular,
  },
  selamatDatangDi: {
    top: 26,
    fontSize: FontSize.size_sm,
  },
  group6516: {
    left: 0,
    top: 0,
  },
  profileName: {
    top: 78,
    left: 95,
  },
  photo1: {
    top: 73,
    left: 22,
    borderRadius: Border.br_81xl,
    borderColor: "rgba(14, 81, 255, 0.8)",
    borderWidth: 2,
    width: 64,
    height: 62,
    borderStyle: "solid",
    position: "absolute",
  },
  myProfile: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.overpassBold,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
    position: "absolute",
  },
  lblMyProfile: {
    top: 36,
    width: 75,
    height: 25,
  },
  group5Icon: {
    height: "1.72%",
    width: "3.73%",
    top: "5.17%",
    right: "88.53%",
    bottom: "93.1%",
    left: "7.73%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  profile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Profile;
