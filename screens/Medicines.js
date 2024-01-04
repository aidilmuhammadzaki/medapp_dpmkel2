import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import IPhoneX11ProLightBas from "../components/IPhoneX11ProLightBas";
import HomeIndicatorLight from "../components/HomeIndicatorLight";
import { useNavigation } from "@react-navigation/native";
import UnggahResepForm from "../components/UnggahResepForm";
import SectionCardForm from "../components/SectionCardForm";
import VanillaForm from "../components/VanillaForm";
import KirantiSection from "../components/KirantiSection";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Medicines = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.medicines}>
      <View style={[styles.light, styles.lightPosition]}>
        <IPhoneX11ProLightBas
          dimensionText={require("../assets/wifi2.png")}
          carDimensions={require("../assets/left-side2.png")}
        />
        <HomeIndicatorLight />
      </View>
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group2.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.searchMedicines}>Search Medicines</Text>
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group10.png")}
        />
      </View>
      <UnggahResepForm />
      <View style={[styles.medicinesChild, styles.lightPosition]} />
      <SectionCardForm />
      <VanillaForm />
      <KirantiSection />
      <Image
        style={[styles.data1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/data-1.png")}
      />
      <Image
        style={[styles.icon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/10010874-2-1.png")}
      />
      <Image
        style={styles.bodrexMigraRev1Icon}
        contentFit="cover"
        source={require("../assets/bodrexmigrarev-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lightPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 44,
    width: 343,
    position: "absolute",
  },
  iconPosition: {
    left: 25,
    position: "absolute",
  },
  light: {
    top: 0,
    width: 375,
    height: 812,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  group: {
    left: "4.53%",
    top: "7.76%",
    right: "90.13%",
    bottom: "90.39%",
    width: "5.33%",
    height: "1.85%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    left: 0,
    width: 343,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  searchMedicines: {
    top: 18,
    left: 40,
    fontSize: FontSize.size_base,
    lineHeight: 12,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
    position: "absolute",
  },
  groupIcon: {
    height: "38.64%",
    width: "4.96%",
    top: "31.82%",
    right: "91.25%",
    bottom: "29.55%",
    left: "3.79%",
    position: "absolute",
  },
  rectangleParent: {
    top: 97,
    left: 16,
  },
  medicinesChild: {
    top: 248,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 8,
  },
  data1Icon: {
    top: 533,
    width: 83,
    height: 83,
  },
  icon1: {
    top: 408,
    width: 82,
    height: 89,
  },
  bodrexMigraRev1Icon: {
    top: 290,
    left: 17,
    width: 99,
    height: 84,
    position: "absolute",
  },
  medicines: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default Medicines;
