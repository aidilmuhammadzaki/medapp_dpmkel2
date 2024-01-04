import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import IPhoneX11ProLightBas from "../components/IPhoneX11ProLightBas";
import HomeIndicatorLight from "../components/HomeIndicatorLight";
import { useNavigation } from "@react-navigation/native";
import MembershipSection from "../components/MembershipSection";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const UploadAPrescription = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.uploadAPrescription, styles.iconLayout]}>
      <View
        style={[
          styles.uploadAPrescriptionChild,
          styles.uploadAPrescriptionChildPosition,
        ]}
      />
      <View style={[styles.light, styles.lightPosition]}>
        <IPhoneX11ProLightBas
          dimensionText={require("../assets/wifi2.png")}
          carDimensions={require("../assets/left-side2.png")}
        />
        <HomeIndicatorLight />
      </View>
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group2.png")}
        />
      </Pressable>
      <View style={styles.unggahResepParent}>
        <Text style={styles.unggahResep}>Unggah Resep</Text>
        <Text
          style={[styles.unggahResepDan, styles.contohGambarTypo]}
        >{`Unggah resep dan apoteker kami akan mengelolanya
obat untukmu.`}</Text>
      </View>
      <Text style={[styles.andaDapatMengunggah, styles.contohGambarTypo]}>
        Anda dapat mengunggah dari galeri atau mengambilnya langsung dari
        kamera.
      </Text>
      <Text style={[styles.contohGambar, styles.contohGambarTypo]}>
        Contoh gambar
      </Text>
      <View style={[styles.uploadAPrescriptionItem, styles.lightPosition]} />
      <MembershipSection
        membershipButtonText="Unggah"
        propWidth={67}
        propLeft={141}
      />
      <Image
        style={styles.uploadAPrescriptionChildPosition}
        contentFit="cover"
        source={require("../assets/b67db61a720d4b79306b11fd95d31c21-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  uploadAPrescriptionChildPosition: {
    height: 436,
    width: 312,
    left: 32,
    top: 250,
    position: "absolute",
  },
  lightPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  contohGambarTypo: {
    color: Color.labelColorLightPrimary,
    lineHeight: 15,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  uploadAPrescriptionChild: {
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    height: 436,
    width: 312,
    left: 32,
    top: 250,
  },
  light: {
    top: 0,
    width: 375,
    height: 812,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
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
  unggahResep: {
    fontSize: FontSize.size_sm,
    lineHeight: 25,
    color: Color.colorGray_300,
    width: 111,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  unggahResepDan: {
    top: 24,
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    width: 343,
    left: 0,
  },
  unggahResepParent: {
    top: 94,
    height: 54,
    width: 343,
    left: 16,
    position: "absolute",
  },
  andaDapatMengunggah: {
    top: 164,
    fontSize: 9,
    left: 16,
  },
  contohGambar: {
    top: 219,
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    left: 16,
  },
  uploadAPrescriptionItem: {
    top: 195,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 8,
  },
  uploadAPrescription: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default UploadAPrescription;
