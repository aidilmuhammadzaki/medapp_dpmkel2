import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCard = ({
  checkoutButtonText,
  propTop,
  propLeft,
  propWidth,
  onGroupPressablePress,
}) => {
  const groupPressable1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propLeft, propWidth]);

  return (
    <Pressable
      style={[
        styles.rectangleParent,
        styles.groupChildLayout,
        groupPressable1Style,
      ]}
      onPress={onGroupPressablePress}
    >
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={[styles.lanjutBelanjaWrapper, groupView1Style]}>
        <Text style={[styles.lanjutBelanja, styles.groupChildPosition]}>
          {checkoutButtonText}
        </Text>
      </View>
    </Pressable>
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
  lanjutBelanja: {
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  lanjutBelanjaWrapper: {
    top: 9,
    left: 114,
    width: 115,
    height: 25,
    position: "absolute",
  },
  rectangleParent: {
    top: 734,
    left: 16,
    position: "absolute",
  },
});

export default SectionCard;
