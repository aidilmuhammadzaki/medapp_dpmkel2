import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionCard from "../components/SectionCard";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Checkout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.checkout}>
      <Pressable
        style={styles.btnBack}
        onPress={() => navigation.navigate("AddToCart")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/btn-back.png")}
        />
      </Pressable>
      <Text style={[styles.alamatPengantar, styles.total1FlexBox]}>
        Alamat Pengantar
      </Text>
      <Text style={[styles.metodePembayaran, styles.total1FlexBox]}>
        Metode Pembayaran
      </Text>
      <Text style={styles.itemDiKeranjang}>1 Item di keranjang Anda</Text>
      <View style={styles.total}>
        <Text style={[styles.rp14000, styles.rp14000FlexBox]}>Rp. 14.000</Text>
        <Text style={[styles.total1, styles.textTypo]}>TOTAL</Text>
      </View>
      <View style={styles.addressListSection}>
        <View style={[styles.item2, styles.item2Layout]}>
          <View style={[styles.item2Child, styles.childBorder]} />
          <Text style={[styles.rumah, styles.textPosition]}>Rumah</Text>
          <Text style={[styles.text, styles.textPosition]}>(205) 555-024</Text>
          <Text style={[styles.jlBangauRaya, styles.textPosition]}>
            Jl. Bangau Raya No. 12
          </Text>
          <Image
            style={[styles.item2Item, styles.item2ItemLayout]}
            contentFit="cover"
            source={require("../assets/group-3650.png")}
          />
          <Image
            style={styles.item2Inner}
            contentFit="cover"
            source={require("../assets/group-3647.png")}
          />
        </View>
        <View style={[styles.item1, styles.item1Layout]}>
          <View style={[styles.item1Child, styles.item1Layout]} />
          <Text style={[styles.rumah, styles.textPosition]}>Kantor</Text>
          <Text style={[styles.text1, styles.textPosition]}>(205) 555-024</Text>
          <Text style={[styles.suryaDumaiCorp, styles.textPosition]}>
            Surya Dumai Corp
          </Text>
          <Image
            style={[styles.item2Item, styles.item2ItemLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-28.png")}
          />
          <Image
            style={styles.item2Inner}
            contentFit="cover"
            source={require("../assets/group-3647.png")}
          />
        </View>
      </View>
      <View style={[styles.addAddressBtn, styles.item2ItemLayout]}>
        <Text style={[styles.tambahAlamat, styles.rp14000FlexBox]}>
          Tambah Alamat
        </Text>
        <Image
          style={styles.plusIcon}
          contentFit="cover"
          source={require("../assets/plus-icon.png")}
        />
      </View>
      <View style={[styles.paymentMethodSection, styles.paymentLayout]}>
        <View
          style={[styles.paymentMethodSectionChild, styles.paymentLayout]}
        />
        <Text style={[styles.cashOnDelivery, styles.rumahTypo]}>
          Cash on Delivery
        </Text>
        <View style={[styles.imgaeSection, styles.imgaeLayout]}>
          <View style={[styles.imgaeSectionChild, styles.imgaeLayout]} />
        </View>
        <Image
          style={styles.paymentMethodSectionItem}
          contentFit="cover"
          source={require("../assets/ellipse-31.png")}
        />
      </View>
      <Image
        style={styles.produk001Icon}
        contentFit="cover"
        source={require("../assets/20231113205527produk00-1.png")}
      />
      <SectionCard
        checkoutButtonText="Bayar"
        propTop={733}
        propLeft={149}
        propWidth={46}
        onGroupPressablePress={() => navigation.navigate("HomePage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  total1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  rp14000FlexBox: {
    textAlign: "right",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.overpassRegular,
    color: Color.colorMidnightblue_300,
  },
  item2Layout: {
    height: 93,
    width: 321,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorMidnightblue_200,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: 0,
    left: 0,
  },
  textPosition: {
    left: 50,
    textAlign: "left",
    position: "absolute",
  },
  item2ItemLayout: {
    height: 18,
    position: "absolute",
  },
  item1Layout: {
    height: 94,
    width: 321,
    position: "absolute",
  },
  paymentLayout: {
    height: 55,
    width: 324,
    position: "absolute",
  },
  rumahTypo: {
    fontFamily: FontFamily.overpassSemiBold,
    fontWeight: "600",
    color: Color.colorMidnightblue_100,
  },
  imgaeLayout: {
    height: 38,
    width: 42,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  btnBack: {
    top: 48,
    width: 24,
    height: 24,
    left: 24,
    position: "absolute",
  },
  alamatPengantar: {
    top: 139,
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.poppinsBlack,
    fontWeight: "900",
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 29,
  },
  metodePembayaran: {
    top: 588,
    left: 27,
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.poppinsBlack,
    fontWeight: "900",
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  itemDiKeranjang: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorMidnightblue_300,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    top: 89,
    textAlign: "left",
    left: 24,
    position: "absolute",
  },
  rp14000: {
    top: 21,
    fontFamily: FontFamily.overpassSemiBold,
    fontWeight: "600",
    color: Color.colorMidnightblue_100,
    left: 0,
    textAlign: "right",
    fontSize: FontSize.size_base,
  },
  total1: {
    left: 38,
    fontFamily: FontFamily.overpassRegular,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  total: {
    left: 270,
    width: 80,
    height: 41,
    top: 89,
    position: "absolute",
  },
  item2Child: {
    height: 93,
    width: 321,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rumah: {
    top: 19,
    fontFamily: FontFamily.overpassSemiBold,
    fontWeight: "600",
    color: Color.colorMidnightblue_100,
    fontSize: FontSize.size_sm,
  },
  text: {
    top: 37,
    fontFamily: FontFamily.overpassRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorMidnightblue_300,
  },
  jlBangauRaya: {
    top: 61,
    fontFamily: FontFamily.overpassRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorMidnightblue_300,
  },
  item2Item: {
    left: 16,
    width: 18,
    top: 16,
  },
  item2Inner: {
    left: 288,
    width: 13,
    height: 16,
    opacity: 0.45,
    top: 16,
    position: "absolute",
  },
  item2: {
    top: 0,
    left: 0,
  },
  item1Child: {
    borderWidth: 1,
    borderColor: Color.colorMidnightblue_200,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  text1: {
    top: 38,
    fontFamily: FontFamily.overpassRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorMidnightblue_300,
  },
  suryaDumaiCorp: {
    top: 62,
    fontFamily: FontFamily.overpassRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorMidnightblue_300,
  },
  item1: {
    top: 103,
    left: 10,
  },
  addressListSection: {
    top: 173,
    width: 331,
    height: 197,
    left: 29,
    position: "absolute",
  },
  tambahAlamat: {
    left: 22,
    color: Color.colorMediumslateblue_100,
    fontFamily: FontFamily.overpassRegular,
    top: 0,
    lineHeight: 18,
    textAlign: "right",
    fontSize: FontSize.size_sm,
  },
  plusIcon: {
    height: "66.67%",
    width: "10%",
    top: "16.67%",
    right: "90%",
    bottom: "16.67%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  addAddressBtn: {
    top: 381,
    left: 228,
    width: 120,
  },
  paymentMethodSectionChild: {
    borderWidth: 1,
    borderColor: Color.colorMidnightblue_200,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  cashOnDelivery: {
    top: 15,
    left: 76,
    display: "flex",
    alignItems: "flex-end",
    width: 133,
    height: 23,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  imgaeSectionChild: {
    borderWidth: 1,
    borderColor: Color.colorMidnightblue_200,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: 0,
    left: 0,
  },
  imgaeSection: {
    top: 9,
    left: 15,
  },
  paymentMethodSectionItem: {
    top: 22,
    left: 286,
    width: 14,
    height: 14,
    position: "absolute",
  },
  paymentMethodSection: {
    top: 624,
    left: 24,
  },
  produk001Icon: {
    top: 637,
    left: 44,
    width: 32,
    height: 32,
    position: "absolute",
  },
  checkout: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Checkout;
