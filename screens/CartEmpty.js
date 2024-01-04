import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const CartEmpty = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cartempty}>
      <View style={styles.group6567}>
        <Text style={[styles.keranjangAndaKosong, styles.whoopsFlexBox]}>
          Keranjang anda kosong!
        </Text>
        <Text style={[styles.whoops, styles.whoopsFlexBox]}>Whoops</Text>
        <Image
          style={[styles.group6567Child, styles.path4IconPosition]}
          contentFit="cover"
          source={require("../assets/group-6215.png")}
        />
      </View>
      <Pressable
        style={styles.group1156}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/btn-back.png")}
        />
      </Pressable>
      <Image
        style={[styles.path4Icon, styles.path4IconPosition]}
        contentFit="cover"
        source={require("../assets/path-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  whoopsFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  path4IconPosition: {
    left: 0,
    position: "absolute",
  },
  keranjangAndaKosong: {
    top: 367,
    left: 20,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.overpassMedium,
    color: Color.colorGray_600,
    width: 255,
    height: 38,
  },
  whoops: {
    top: 314,
    left: 94,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.abelRegular,
    color: Color.colorGray_200,
    width: 108,
    height: 42,
  },
  group6567Child: {
    top: 0,
    height: 267,
    width: 295,
  },
  group6567: {
    top: 204,
    left: 40,
    height: 405,
    width: 295,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  group1156: {
    left: 28,
    top: 19,
    width: 24,
    height: 24,
    position: "absolute",
  },
  path4Icon: {
    top: 58,
    width: 375,
    height: 2,
  },
  cartempty: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CartEmpty;
