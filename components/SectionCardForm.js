import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const SectionCardForm = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <Text style={[styles.bodrexMigra, styles.addTypo]}>Bodrex Migra</Text>
      <View style={[styles.rp18000PerStripWrapper, styles.addLayout]}>
        <Text style={[styles.rp18000Per, styles.addTypo]}>
          Rp. 18.000 per strip
        </Text>
      </View>
      <Pressable
        style={[styles.groupWrapper, styles.groupLayout]}
        onPress={() => navigation.navigate("ProductPage")}
      >
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.add, styles.addLayout]}>ADD</Text>
        </View>
      </Pressable>
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
  bodrexMigra: {
    top: 6,
    fontSize: FontSize.size_base,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    position: "absolute",
    left: 108,
  },
  rp18000Per: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    position: "absolute",
    left: 0,
    top: 0,
  },
  rp18000PerStripWrapper: {
    top: 31,
    width: 126,
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
    height: 25,
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
    top: 280,
    left: 17,
  },
});

export default SectionCardForm;
