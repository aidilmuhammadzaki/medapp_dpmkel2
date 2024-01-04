import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MembershipSection1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.groupParent}>
        <Pressable
          style={styles.rectangleParent}
          onPress={() => navigation.navigate("Medicines")}
        >
          <View style={styles.groupShadowBox} />
          <Image
            style={styles.medicineJarIcon}
            contentFit="cover"
            source={require("../assets/medicine-jar.png")}
          />
        </Pressable>
        <Text style={[styles.obat, styles.obatTypo]}>Obat</Text>
      </View>
      <View style={styles.groupContainer}>
        <Pressable
          style={styles.rectangleParent}
          onPress={() => navigation.navigate("UploadAPrescription")}
        >
          <View style={styles.groupShadowBox} />
          <Image
            style={styles.medicalPrescriptionIcon}
            contentFit="cover"
            source={require("../assets/medical-prescription.png")}
          />
        </Pressable>
        <Pressable
          style={styles.unggahResep}
          onPress={() => navigation.navigate("UploadAPrescription")}
        >
          <Text style={styles.obatTypo}>Unggah Resep</Text>
        </Pressable>
      </View>
      <View style={styles.frameView}>
        <Pressable
          style={styles.rectangleParent}
          onPress={() => navigation.navigate("SelectAPlan1")}
        >
          <View style={styles.groupShadowBox} />
          <Image
            style={styles.coinInHand}
            contentFit="cover"
            source={require("../assets/coin-in-hand.png")}
          />
        </Pressable>
        <Text style={[styles.obat, styles.obatTypo]}>Keanggotaan</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  obatTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    fontSize: FontSize.size_xs,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_6xs,
    left: 0,
    top: 0,
    height: 75,
    width: 75,
    position: "absolute",
  },
  medicineJarIcon: {
    top: 10,
    left: 11,
    width: 54,
    height: 54,
    position: "absolute",
  },
  rectangleParent: {
    height: 75,
    width: 75,
  },
  obat: {
    marginTop: 4,
  },
  groupParent: {
    alignItems: "center",
  },
  medicalPrescriptionIcon: {
    top: 7,
    left: 5,
    width: 62,
    height: 62,
    position: "absolute",
  },
  unggahResep: {
    marginTop: 4,
  },
  groupContainer: {
    marginLeft: 56,
    alignItems: "center",
  },
  coinInHand: {
    top: 8,
    left: 9,
    width: 58,
    height: 58,
    position: "absolute",
  },
  frameView: {
    alignItems: "flex-end",
    marginLeft: 56,
  },
  frameParent: {
    top: 151,
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
});

export default MembershipSection1;
