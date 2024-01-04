import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SectionCard1 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-19.png")}
        />
        <LinearGradient
          style={[styles.groupItem, styles.groupPosition]}
          locations={[0, 0.74, 1]}
          colors={["rgba(217, 217, 217, 0)", "rgba(57, 57, 57, 0.78)", "#000"]}
        />
      </View>
      <View style={styles.manfaatUntukMemilikiKesehatParent}>
        <Text
          style={[styles.manfaatUntukMemiliki, styles.minRead568Typo]}
        >{`10 Manfaat untuk memiliki kesehatan tubuh seutuhnya
pemeriksaan 1 kali dalam 6 bulan.`}</Text>
        <View style={styles.minRead568ViewsParent}>
          <Text style={[styles.minRead568, styles.minRead568Typo]}>
            5 min read. 568 Views
          </Text>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group6.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 192,
    width: 375,
  },
  groupPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  minRead568Typo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
  },
  groupChild: {
    height: 192,
    width: 375,
  },
  groupItem: {
    backgroundColor: "transparent",
    height: 192,
    width: 375,
  },
  rectangleParent: {
    zIndex: 0,
  },
  manfaatUntukMemiliki: {
    fontSize: FontSize.size_sm,
    width: 358,
  },
  minRead568: {
    fontSize: FontSize.size_xs,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupIcon: {
    height: "28%",
    width: "7.09%",
    top: "34%",
    right: "42.55%",
    bottom: "38%",
    left: "50.35%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  minRead568ViewsParent: {
    width: 141,
    height: 25,
    marginTop: 33,
  },
  manfaatUntukMemilikiKesehatParent: {
    top: 76,
    left: 9,
    zIndex: 1,
    position: "absolute",
  },
  groupParent: {
    top: 366,
    left: 0,
    position: "absolute",
  },
});

export default SectionCard1;
