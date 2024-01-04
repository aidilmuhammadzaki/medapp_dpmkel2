import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SubmitBtn = ({
  buttonText,
  submitBtnPosition,
  submitBtnTop,
  submitBtnLeft,
}) => {
  const submitBtnStyle = useMemo(() => {
    return {
      ...getStyleValue("position", submitBtnPosition),
      ...getStyleValue("top", submitBtnTop),
      ...getStyleValue("left", submitBtnLeft),
    };
  }, [submitBtnPosition, submitBtnTop, submitBtnLeft]);

  return (
    <View style={[styles.submitBtn, submitBtnStyle]}>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle.png")}
      />
      <Text style={styles.login}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_37xl,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  login: {
    height: "50%",
    width: "45.37%",
    top: "24.67%",
    left: "25.71%",
    fontSize: FontSize.size_base,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.overpassBold,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
  },
  submitBtn: {
    width: 331,
    height: 45,
  },
});

export default SubmitBtn;
