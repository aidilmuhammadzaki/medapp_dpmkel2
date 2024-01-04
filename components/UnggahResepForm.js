import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const UnggahResepForm = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <View style={styles.unggahResepParent}>
        <Text style={styles.unggahResep}>Unggah Resep</Text>
        <Text
          style={[styles.unggahResepDan, styles.uploadTypo]}
        >{`Unggah resep dan apoteker kami
akan mengelola obatnya untuk Anda.`}</Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("UploadAPrescription")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.upload, styles.uploadTypo]}>Upload</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 75,
    width: 342,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  uploadTypo: {
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  groupLayout: {
    height: 25,
    width: 74,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    left: 0,
    height: 75,
    width: 342,
    position: "absolute",
  },
  unggahResep: {
    fontSize: FontSize.size_sm,
    lineHeight: 25,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  unggahResepDan: {
    top: 24,
    color: Color.labelColorLightPrimary,
    left: 0,
  },
  unggahResepParent: {
    top: 11,
    left: 10,
    width: 205,
    height: 54,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorMediumslateblue_200,
    left: 0,
    top: 0,
  },
  upload: {
    top: 5,
    left: 16,
    color: Color.colorWhite,
  },
  rectangleGroup: {
    top: 23,
    left: 257,
  },
  rectangleParent: {
    top: 157,
    left: 17,
  },
});

export default UnggahResepForm;
