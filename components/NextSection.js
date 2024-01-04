import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NextSection = ({ propTop, propLeft, onGroupPressablePress }) => {
  const groupPressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <Pressable
      style={[
        styles.rectangleParent,
        styles.groupChildLayout,
        groupPressableStyle,
      ]}
      onPress={onGroupPressablePress}
    >
      <View style={[styles.groupChild, styles.nextPosition]} />
      <View style={styles.nextWrapper}>
        <Text style={[styles.next, styles.nextPosition]}>Next</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 44,
    width: 343,
  },
  nextPosition: {
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
  next: {
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  nextWrapper: {
    top: 11,
    left: 152,
    width: 39,
    height: 25,
    position: "absolute",
  },
  rectangleParent: {
    top: 730,
    left: 13,
    position: "absolute",
  },
});

export default NextSection;
