import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const VanillaForm = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <Text style={[styles.dancowVanilla, styles.addTypo]}>
        Dancow (Vanilla)
      </Text>
      <View style={[styles.rp549000400gmWrapper, styles.addLayout]}>
        <Text style={[styles.rp549000400gmContainer, styles.addTypo]}>
          <Text style={styles.rp549000}>Rp. 549.000/</Text>
          <Text style={styles.gm}> 400gm</Text>
        </Text>
      </View>
      <View style={[styles.groupWrapper, styles.groupLayout]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.add, styles.addLayout]}>ADD</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 104,
    width: 342,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  addTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
  },
  addLayout: {
    height: 25,
    position: "absolute",
  },
  groupLayout: {
    height: 31,
    width: 52,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_6xs,
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    height: 104,
    width: 342,
    position: "absolute",
  },
  dancowVanilla: {
    top: 6,
    fontSize: FontSize.size_base,
    color: Color.colorGray_300,
    left: 108,
    position: "absolute",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
  },
  rp549000: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
  },
  gm: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
  },
  rp549000400gmContainer: {
    left: 0,
    top: 0,
    position: "absolute",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
  },
  rp549000400gmWrapper: {
    top: 31,
    width: 124,
    left: 108,
  },
  groupItem: {
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorMediumslateblue_200,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  add: {
    top: 4,
    left: 12,
    fontSize: FontSize.size_smi,
    color: Color.colorMediumslateblue_200,
    width: 30,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 65,
    left: 108,
  },
  rectangleParent: {
    top: 400,
    left: 17,
  },
});

export default VanillaForm;
