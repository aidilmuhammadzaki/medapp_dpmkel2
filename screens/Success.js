import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionCard from "../components/SectionCard";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Success = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.success}>
      <Image
        style={styles.group3645Icon}
        contentFit="cover"
        source={require("../assets/group3645.png")}
      />
      <View style={[styles.group3691, styles.group3691Layout]}>
        <Text style={[styles.loginUsingOtherContainer, styles.group3691Layout]}>
          <Text
            style={styles.pesananAndaAkan}
          >{`Pesanan Anda akan dikirimkan dengan kode `}</Text>
          <Text style={styles.ds69hsTypo}>#9ds69hs</Text>
          <Text style={styles.pesananAndaAkan}>
            . Anda dapat melacak pengiriman di bagian pesanan.
          </Text>
        </Text>
        <Text style={[styles.terimaKasih, styles.ds69hsTypo]}>
          Terima Kasih
        </Text>
      </View>
      <SectionCard
        checkoutButtonText="Lanjut Belanja"
        propTop={734}
        propLeft={114}
        propWidth={115}
        onGroupPressablePress={() => navigation.navigate("HomePage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  group3691Layout: {
    width: 275,
    position: "absolute",
  },
  ds69hsTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  group3645Icon: {
    top: 142,
    left: 66,
    width: 245,
    height: 197,
    position: "absolute",
  },
  pesananAndaAkan: {
    fontFamily: FontFamily.robotoRegular,
  },
  loginUsingOtherContainer: {
    top: 42,
    left: 0,
    fontSize: FontSize.size_sm,
    lineHeight: 19,
    color: Color.colorMidnightblue_300,
    textAlign: "center",
  },
  terimaKasih: {
    top: 0,
    left: 67,
    fontSize: FontSize.size_5xl,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
    position: "absolute",
  },
  group3691: {
    top: 406,
    left: 50,
    height: 99,
  },
  success: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Success;
