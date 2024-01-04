import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import IPhoneX11ProLightBas from "../components/IPhoneX11ProLightBas";
import HomeIndicatorLight from "../components/HomeIndicatorLight";
import { useNavigation } from "@react-navigation/native";
import SectionForm from "../components/SectionForm";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AddToCart = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.addToCart, styles.iconLayout]}>
      <View style={[styles.light, styles.lightPosition]}>
        <IPhoneX11ProLightBas
          dimensionText={require("../assets/wifi1.png")}
          carDimensions={require("../assets/left-side2.png")}
        />
        <HomeIndicatorLight />
      </View>
      <Text style={styles.itemDiKeranjang}>1 item di keranjang Anda</Text>
      <Text style={[styles.keranjang, styles.detailsLayout]}>Keranjang</Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.prosesBayarWrapper}>
          <Text style={[styles.prosesBayar, styles.prosesBayarTypo]}>
            Proses Bayar
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("ProductPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group2.png")}
        />
      </Pressable>
      <SectionForm />
      <LinearGradient
        style={[styles.addToCartChild, styles.lightPosition]}
        locations={[0, 0.2, 0.72, 1]}
        colors={["#ffb800", "#ffb800", "#ffb800", "#ffb800"]}
      />
      <Text style={[styles.gabungMembership, styles.prosesBayarTypo]}>
        Gabung Membership
      </Text>
      <Text
        style={[styles.bergabunglahDenganKeanggotaa, styles.gabungTypo]}
      >{`Bergabunglah dengan keanggotaan kami dan dapatkan 
eksklusif
 hadiah dan diskon untuk pembelian Anda.`}</Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.gabung, styles.gabungTypo]}>Gabung</Text>
      </View>
      <View style={[styles.addToCartItem, styles.addLayout]} />
      <View style={[styles.addToCartInner, styles.addLayout]} />
      <Text style={[styles.promocode, styles.rp0Typo]}>Promocode:</Text>
      <Text style={[styles.details, styles.rp0Typo]}>Details:</Text>
      <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={styles.masukkanKodePromo}>Masukkan kode promo</Text>
        <Text style={[styles.apply, styles.rp0Layout]}>APPLY</Text>
      </View>
      <View style={[styles.idrTotalParent, styles.parentLayout]}>
        <Text style={[styles.idrTotal, styles.totalTypo]}>IDR Total</Text>
        <Text style={[styles.rp18000, styles.rp18000Position]}>Rp. 18.000</Text>
      </View>
      <Text style={[styles.rp14000, styles.rp14000Position]}>Rp. 14.000</Text>
      <View style={[styles.rp4000Parent, styles.parentLayout]}>
        <Text style={[styles.rp4000, styles.rp0Layout]}>Rp. 4.000</Text>
        <Text style={[styles.idrTotal, styles.totalTypo]}>Discount</Text>
      </View>
      <Text style={[styles.jumlahTotal, styles.rp14000Position]}>
        Jumlah total
      </Text>
      <View style={[styles.rp0Parent, styles.parentLayout]}>
        <Text style={[styles.rp0, styles.rp0Layout]}>Rp. 0</Text>
        <Text style={[styles.idrTotal, styles.totalTypo]}>
          Biaya Pengiriman
        </Text>
      </View>
      <View style={[styles.rp14000Parent, styles.parentLayout]}>
        <Text style={[styles.rp140001, styles.rp18000Position]}>
          Rp. 14.000
        </Text>
        <Text style={[styles.idrTotal, styles.totalTypo]}>
          Jumlah Penghematan
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  lightPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  detailsLayout: {
    lineHeight: 25,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 343,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
  },
  prosesBayarTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  gabungTypo: {
    lineHeight: 18,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  groupLayout: {
    height: 37,
    width: 82,
    position: "absolute",
  },
  addLayout: {
    height: 8,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rp0Typo: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_300,
  },
  groupInnerLayout: {
    height: 39,
    width: 343,
    position: "absolute",
  },
  rp0Layout: {
    lineHeight: 12,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  parentLayout: {
    height: 12,
    width: 342,
    left: 17,
    position: "absolute",
  },
  totalTypo: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  rp18000Position: {
    left: 264,
    textAlign: "right",
    lineHeight: 12,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    top: 0,
    position: "absolute",
  },
  rp14000Position: {
    top: 698,
    lineHeight: 12,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  light: {
    top: 0,
    height: 812,
  },
  itemDiKeranjang: {
    top: 143,
    lineHeight: 8,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    left: 16,
    position: "absolute",
  },
  keranjang: {
    top: 102,
    fontSize: FontSize.size_14xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_300,
    left: 16,
  },
  groupChild: {
    backgroundColor: Color.colorMediumslateblue_200,
    height: 44,
    width: 343,
    position: "absolute",
  },
  prosesBayar: {
    left: 0,
    top: 0,
  },
  prosesBayarWrapper: {
    top: 11,
    left: 111,
    width: 104,
    height: 25,
    position: "absolute",
  },
  rectangleParent: {
    top: 731,
    left: 16,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
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
  addToCartChild: {
    top: 290,
    height: 84,
    backgroundColor: "transparent",
  },
  gabungMembership: {
    top: 300,
    left: 17,
  },
  bergabunglahDenganKeanggotaa: {
    top: 327,
    fontSize: FontSize.size_3xs,
    left: 17,
  },
  groupItem: {
    borderRadius: 30,
    backgroundColor: Color.colorGray_300,
    left: 0,
    top: 0,
  },
  gabung: {
    top: 10,
    left: 14,
    fontSize: FontSize.size_sm,
    lineHeight: 18,
  },
  rectangleGroup: {
    top: 314,
    left: 277,
  },
  addToCartItem: {
    top: 390,
  },
  addToCartInner: {
    top: 496,
  },
  promocode: {
    top: 414,
    left: 17,
    lineHeight: 25,
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
  },
  details: {
    top: 520,
    left: 17,
    lineHeight: 25,
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
  },
  groupInner: {
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  masukkanKodePromo: {
    left: 12,
    color: Color.colorDarkslategray,
    lineHeight: 12,
    top: 14,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  apply: {
    left: 292,
    color: Color.colorMediumslateblue_200,
    top: 14,
    lineHeight: 12,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  rectangleContainer: {
    top: 441,
    left: 17,
  },
  idrTotal: {
    lineHeight: 12,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
    left: 0,
    top: 0,
  },
  rp18000: {
    textAlign: "right",
    color: Color.colorGray_300,
  },
  idrTotalParent: {
    top: 561,
  },
  rp14000: {
    left: 252,
    fontSize: FontSize.size_3xl,
    textAlign: "right",
    color: Color.colorGray_300,
  },
  rp4000: {
    left: 273,
    textAlign: "right",
    fontSize: FontSize.size_base,
    color: Color.colorGray_300,
    top: 0,
  },
  rp4000Parent: {
    top: 591,
  },
  jumlahTotal: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray,
    textAlign: "left",
    left: 16,
  },
  rp0: {
    left: 305,
    textAlign: "right",
    fontSize: FontSize.size_base,
    color: Color.colorGray_300,
    top: 0,
  },
  rp0Parent: {
    top: 621,
  },
  rp140001: {
    color: Color.colorGreen,
    textAlign: "right",
  },
  rp14000Parent: {
    top: 651,
  },
  addToCart: {
    flex: 1,
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default AddToCart;
