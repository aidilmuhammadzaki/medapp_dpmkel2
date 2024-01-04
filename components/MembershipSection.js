import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const MembershipSection = ({ membershipButtonText, propWidth, propLeft }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("left", propLeft),
    };
  }, [propWidth, propLeft]);

  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={[styles.buyMembershipWrapper, groupViewStyle]}>
        <Text style={[styles.buyMembership, styles.groupChildPosition]}>
          {membershipButtonText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 44,
    width: 343,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorMediumslateblue_200,
    height: 44,
    width: 343,
  },
  buyMembership: {
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  buyMembershipWrapper: {
    top: 11,
    left: 102,
    width: 140,
    height: 25,
    position: "absolute",
  },
  rectangleParent: {
    top: 731,
    left: 16,
    position: "absolute",
  },
});

export default MembershipSection;
