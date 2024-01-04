import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const SectionForm = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupBg]} />
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("CartEmpty")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group3.png")}
        />
      </Pressable>
      <Text style={[styles.bodrexMigra, styles.idrTypo]}>Bodrex Migra</Text>
      <Text style={styles.text}>1</Text>
      <View style={styles.idrParent}>
        <Text style={[styles.idr, styles.idrTypo]}>IDR:</Text>
        <Text style={[styles.rp18000Per, styles.idrTypo]}>
          Rp. 18.000 per strip
        </Text>
      </View>
      <View style={[styles.groupWrapper, styles.groupLayout]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text1, styles.textLayout]}>-</Text>
        </View>
      </View>
      <View style={[styles.groupContainer, styles.containerLayout]}>
        <View style={[styles.rectangleContainer, styles.containerLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text2, styles.textLayout]}>+</Text>
        </View>
      </View>
      <Image
        style={styles.bodrexMigraRev1Icon}
        contentFit="cover"
        source={require("../assets/bodrexmigrarev-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 104,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  idrTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    position: "absolute",
  },
  groupLayout: {
    height: 27,
    width: 28,
    position: "absolute",
  },
  textLayout: {
    height: 26,
    width: 7,
    color: Color.colorMediumslateblue_200,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    position: "absolute",
  },
  containerLayout: {
    height: 28,
    width: 28,
    position: "absolute",
  },
  groupChild: {
    left: 1,
    borderRadius: Border.br_6xs,
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    width: 342,
    height: 104,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  group: {
    left: "91.84%",
    top: "9.62%",
    right: "3.5%",
    bottom: "74.04%",
    width: "4.66%",
    height: "16.35%",
    position: "absolute",
  },
  bodrexMigra: {
    top: 6,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    left: 109,
  },
  text: {
    top: 71,
    left: 153,
    fontSize: FontSize.size_base,
    color: Color.colorMediumslateblue_200,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    position: "absolute",
  },
  idr: {
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_100,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    top: 0,
  },
  rp18000Per: {
    left: 29,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    top: 0,
  },
  idrParent: {
    top: 32,
    width: 146,
    height: 25,
    left: 109,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorMediumslateblue_200,
    borderWidth: 1,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  text1: {
    top: 1,
    left: 9,
    fontSize: FontSize.size_15xl,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 69,
    left: 109,
  },
  text2: {
    top: 2,
    left: 8,
    fontSize: FontSize.size_lg,
  },
  rectangleContainer: {
    left: 0,
    top: 0,
  },
  groupContainer: {
    left: 177,
    top: 69,
  },
  bodrexMigraRev1Icon: {
    top: 13,
    width: 99,
    height: 84,
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 167,
    left: 16,
    width: 343,
  },
});

export default SectionForm;
