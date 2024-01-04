import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import IPhoneX11ProLightBas from "../components/IPhoneX11ProLightBas";
import HomeIndicatorLight from "../components/HomeIndicatorLight";
import MembershipSection from "../components/MembershipSection";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SelectAPlan1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selectAPlan}>
      <View style={[styles.light, styles.lightPosition]}>
        <IPhoneX11ProLightBas
          dimensionText={require("../assets/wifi2.png")}
          carDimensions={require("../assets/left-side3.png")}
        />
        <HomeIndicatorLight />
      </View>
      <Text style={styles.hematLebihBanyak}>
        Hemat lebih banyak dengan keanggotaan eksklusif.
      </Text>
      <Text style={[styles.pilihPaket, styles.skip1Clr]}>Pilih Paket</Text>
      <MembershipSection
        membershipButtonText="Beli Membership"
        propWidth={141}
        propLeft={102}
      />
      <Pressable
        style={styles.skip}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.skip1, styles.skip1Clr]}>Skip</Text>
      </Pressable>
      <View style={[styles.selectAPlanChild, styles.selectLayout]} />
      <View style={[styles.selectAPlanItem, styles.selectBorder]} />
      <View style={[styles.selectAPlanInner, styles.selectLayout]} />
      <Text style={[styles.bulan, styles.bulanTypo]}>3 Bulan</Text>
      <Text style={[styles.bulan1, styles.bulanTypo]}>6 Bulan</Text>
      <Text style={[styles.bulan2, styles.bulanTypo]}>12 Bulan</Text>
      <Text style={[styles.rp1000000, styles.rp1000000Typo]}>Rp. 800.000</Text>
      <Text style={[styles.rp2000000, styles.rp1000000Typo]}>
        Rp. 2.000,000
      </Text>
      <Text style={[styles.rp3000000, styles.rp1000000Typo]}>
        Rp. 3.000,000
      </Text>
      <Text style={[styles.membership, styles.membershipTypo]}>Membership</Text>
      <Text style={[styles.tambahanUangTunai, styles.tambahanLayout]}>
        Tambahan Uang Tunai GoMed 3%.
      </Text>
      <Text style={[styles.benefit, styles.pengirimanClr]}>Benefit</Text>
      <Text style={[styles.tambahanDiskon10, styles.tambahanLayout]}>
        Tambahan diskon 10% untuk Tes Lab
      </Text>
      <Text style={[styles.pengirimanGratisTanpa, styles.pengirimanClr]}>
        Pengiriman Gratis Tanpa Batas aktif pesanan di atas Rp.990.000
      </Text>
      <Text style={[styles.pengirimanSuperCepat, styles.pengirimanClr]}>
        Pengiriman Super Cepat
      </Text>
      <Text style={[styles.bln, styles.pengirimanClr]}>3bln</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout3]}
        contentFit="cover"
        source={require("../assets/group11.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group11.png")}
      />
      <Image
        style={styles.groupIcon2}
        contentFit="cover"
        source={require("../assets/group12.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group12.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group12.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group11.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group11.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group11.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group11.png")}
      />
      <Image
        style={[styles.groupIcon9, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group11.png")}
      />
      <Image
        style={[styles.groupIcon10, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group11.png")}
      />
      <Image
        style={[styles.groupIcon11, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group11.png")}
      />
      <Text style={[styles.bln1, styles.blnTypo]}>12bln</Text>
      <Text style={[styles.bln2, styles.blnTypo]}>6bln</Text>
      <Text style={[styles.membership1, styles.membershipTypo]}>
        Membership
      </Text>
      <Text style={[styles.membership2, styles.membershipTypo]}>
        Membership
      </Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.rekomendasi, styles.bulanTypo]}>Rekomendasi</Text>
      <View style={[styles.selectAPlanChild1, styles.lightPosition]} />
      <View style={[styles.selectAPlanChild2, styles.selectBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  lightPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  skip1Clr: {
    color: Color.colorGray_300,
    textAlign: "left",
  },
  selectLayout: {
    height: 117,
    width: 100,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_7xs,
    top: 182,
  },
  selectBorder: {
    borderWidth: 1,
    borderColor: Color.colorMediumslateblue_200,
    borderStyle: "solid",
    position: "absolute",
  },
  bulanTypo: {
    textAlign: "center",
    lineHeight: 7,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  rp1000000Typo: {
    top: 268,
    textAlign: "center",
    lineHeight: 7,
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  membershipTypo: {
    top: 224,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    lineHeight: 7,
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  tambahanLayout: {
    width: 181,
    color: Color.labelColorLightPrimary,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 16,
    position: "absolute",
  },
  pengirimanClr: {
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  groupIconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "36.27%",
    width: "2.67%",
    height: "0.86%",
    left: "61.07%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition1: {
    bottom: "46.8%",
    top: "52.34%",
  },
  groupIconLayout2: {
    bottom: "41.75%",
    top: "57.27%",
    width: "2.13%",
    height: "0.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout1: {
    left: "73.87%",
    right: "23.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "2.67%",
    height: "0.86%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition: {
    bottom: "36.95%",
    top: "62.19%",
  },
  groupIconLayout: {
    left: "87.73%",
    right: "9.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "2.67%",
    height: "0.86%",
    position: "absolute",
    overflow: "hidden",
  },
  blnTypo: {
    top: 350,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_smi,
    lineHeight: 7,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  light: {
    top: 0,
    height: 812,
    width: 375,
    left: 0,
  },
  hematLebihBanyak: {
    top: 143,
    lineHeight: 8,
    textAlign: "left",
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    left: 16,
    position: "absolute",
  },
  pilihPaket: {
    top: 102,
    fontSize: FontSize.size_14xl,
    lineHeight: 25,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: 16,
    position: "absolute",
  },
  skip1: {
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    fontFamily: FontFamily.robotoRegular,
  },
  skip: {
    left: 328,
    top: 60,
    position: "absolute",
  },
  selectAPlanChild: {
    left: 16,
    position: "absolute",
  },
  selectAPlanItem: {
    left: 260,
    height: 117,
    width: 100,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_7xs,
    top: 182,
  },
  selectAPlanInner: {
    left: 138,
    position: "absolute",
  },
  bulan: {
    left: 42,
    top: 206,
    textAlign: "center",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
  },
  bulan1: {
    left: 164,
    top: 206,
    textAlign: "center",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
  },
  bulan2: {
    left: 282,
    top: 206,
    textAlign: "center",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
  },
  rp1000000: {
    left: 27,
  },
  rp2000000: {
    left: 143,
  },
  rp3000000: {
    left: 265,
  },
  membership: {
    left: 31,
    fontSize: FontSize.size_xs,
  },
  tambahanUangTunai: {
    top: 386,
    fontSize: FontSize.size_smi,
  },
  benefit: {
    top: 356,
    fontSize: FontSize.size_lg,
    lineHeight: 16,
    color: Color.labelColorLightPrimary,
    left: 16,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  tambahanDiskon10: {
    top: 425,
    fontSize: FontSize.size_xs,
  },
  pengirimanGratisTanpa: {
    top: 503,
    width: 192,
    lineHeight: 16,
    color: Color.labelColorLightPrimary,
    left: 16,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoRegular,
  },
  pengirimanSuperCepat: {
    top: 477,
    fontSize: FontSize.size_smi,
    lineHeight: 7,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoRegular,
    left: 16,
  },
  bln: {
    top: 351,
    left: 221,
    fontSize: FontSize.size_smi,
    lineHeight: 7,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoRegular,
  },
  groupIcon: {
    bottom: "51.72%",
    top: "47.41%",
  },
  groupIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "36.27%",
    width: "2.67%",
    height: "0.86%",
    left: "61.07%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon2: {
    right: "36.53%",
    bottom: "36.82%",
    left: "61.33%",
    top: "62.19%",
    width: "2.13%",
    height: "0.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon3: {
    right: "36.8%",
    left: "61.07%",
    bottom: "41.75%",
  },
  groupIcon4: {
    right: "23.73%",
    left: "74.13%",
  },
  groupIcon5: {
    bottom: "51.72%",
    top: "47.41%",
  },
  groupIcon6: {
    bottom: "46.8%",
    top: "52.34%",
  },
  groupIcon7: {
    left: "73.87%",
    right: "23.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "2.67%",
    height: "0.86%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon8: {
    bottom: "51.72%",
    top: "47.41%",
  },
  groupIcon9: {
    bottom: "46.8%",
    top: "52.34%",
  },
  groupIcon10: {
    bottom: "41.87%",
    top: "57.27%",
    left: "87.73%",
    right: "9.6%",
  },
  groupIcon11: {
    bottom: "36.95%",
    top: "62.19%",
  },
  bln1: {
    left: 315,
  },
  bln2: {
    left: 268,
  },
  membership1: {
    left: 153,
    fontSize: FontSize.size_xs,
  },
  membership2: {
    left: 275,
    fontSize: FontSize.size_xs,
  },
  rectangleView: {
    top: 175,
    left: 266,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorTomato,
    width: 88,
    height: 16,
    position: "absolute",
  },
  rekomendasi: {
    top: 180,
    left: 279,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
  },
  selectAPlanChild1: {
    top: 323,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 8,
  },
  selectAPlanChild2: {
    top: 337,
    left: 307,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumslateblue_300,
    width: 52,
    height: 193,
  },
  selectAPlan: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default SelectAPlan1;
