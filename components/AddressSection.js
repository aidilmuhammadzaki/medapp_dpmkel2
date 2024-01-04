import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AddressSection = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleLayout}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <Text style={[styles.alamat, styles.rtTypo]}>Alamat</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <Text style={[styles.alamat, styles.rtTypo]}>Jalan</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <Text style={[styles.alamat, styles.rtTypo]}>Kecamatan</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.groupChildBorder]} />
        <View style={[styles.groupChild1, styles.groupChildBorder]} />
        <Text style={[styles.rt, styles.rtTypo]}>RT</Text>
        <Text style={[styles.rw, styles.rtTypo]}>RW</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    top: 0,
    height: 44,
    position: "absolute",
  },
  rtTypo: {
    textAlign: "left",
    color: Color.colorLightgray,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    fontSize: FontSize.size_base,
    top: 16,
    position: "absolute",
  },
  rectangleLayout: {
    height: 44,
    width: 343,
  },
  groupChild: {
    left: 0,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    top: 0,
    width: 343,
  },
  alamat: {
    left: 8,
    color: Color.colorLightgray,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    fontSize: FontSize.size_base,
    top: 16,
  },
  rectangleGroup: {
    marginTop: 13,
  },
  rectangleView: {
    width: 182,
    left: 0,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    top: 0,
  },
  groupChild1: {
    left: 192,
    width: 151,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    top: 0,
  },
  rt: {
    width: 77,
    left: 8,
    color: Color.colorLightgray,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    fontSize: FontSize.size_base,
    top: 16,
  },
  rw: {
    left: 200,
    width: 71,
    color: Color.colorLightgray,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    fontSize: FontSize.size_base,
    top: 16,
  },
  groupParent: {
    marginLeft: -179.5,
    top: 241,
    left: "50%",
    width: 359,
    height: 230,
    alignItems: "center",
    position: "absolute",
  },
});

export default AddressSection;
