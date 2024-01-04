import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import IPhoneX11ProLightBas from "../components/IPhoneX11ProLightBas";
import HomeIndicatorLight from "../components/HomeIndicatorLight";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProductPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productPage}>
      <View style={[styles.light, styles.lightPosition]}>
        <IPhoneX11ProLightBas
          dimensionText={require("../assets/wifi1.png")}
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
      <View style={[styles.productPageChild, styles.lightPosition]} />
      <View style={[styles.productPageItem, styles.productPageItemPosition]} />
      <Text style={[styles.bodrexMigra, styles.deskripsiTypo]}>
        Bodrex Migra
      </Text>
      <View style={styles.diproduksiOlehKimiaFarmaPParent}>
        <Text style={[styles.diproduksiOlehKimia, styles.bestPriceClr]}>
          Diproduksi Oleh: Kimia Farma Pvt. Ltd.
        </Text>
        <Text style={[styles.negaraAsalIndonesia, styles.bestPriceClr]}>
          Negara Asal: Indonesia
        </Text>
      </View>
      <Text style={[styles.bestPrice, styles.bestPricePosition]}>
        Best Price:
      </Text>
      <Text style={[styles.bodrexMigraMerupakan, styles.bestPriceClr]}>
        BODREX MIGRA merupakan obat dengan kandungan Paracetamol,
        propyphenazone, caffeine. Obat ini mengandung kombinasi analgesik yang
        dapat digunakan untuk meredakan sakit kepala pada migraine. Migraine
        ditandai dengan rasa sakit yang berdenyut di salah satu sisi kepala.
      </Text>
      <Text style={[styles.deskripsi, styles.deskripsiTypo]}>Deskripsi:</Text>
      <Text style={[styles.rp18000strip, styles.rp18000stripTypo]}>
        Rp. 18.000/strip
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <View style={[styles.groupChild, styles.groupChildLayout1]} />
        <Text style={[styles.healthcareProduct, styles.bestPriceTypo]}>
          Healthcare Product
        </Text>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={styles.groupItem} />
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <View style={[styles.rectangleView, styles.groupInnerLayout]} />
      </View>
      <Pressable
        style={[styles.productPageInner, styles.groupChildLayout]}
        onPress={() => navigation.navigate("AddToCart")}
      >
        <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.beliSekarangWrapper, styles.wrapperLayout]}>
            <Text style={[styles.beliSekarang, styles.beliLayout]}>
              Beli Sekarang
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupChildLayout]}
        onPress={() => navigation.navigate("AddToCart")}
      >
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View style={[styles.tambahKeKeranjangWrapper, styles.tambahLayout]}>
          <Text style={[styles.tambahKeKeranjang, styles.tambahLayout]}>
            Tambah Ke Keranjang
          </Text>
        </View>
      </Pressable>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group13.png")}
      />
      <Image
        style={[styles.bodrexMigraRev2Icon, styles.productPageItemPosition]}
        contentFit="cover"
        source={require("../assets/bodrexmigrarev-2.png")}
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
  productPageItemPosition: {
    top: 105,
    position: "absolute",
  },
  deskripsiTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    left: 17,
    position: "absolute",
  },
  bestPriceClr: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoRegular,
  },
  bestPricePosition: {
    top: 453,
    position: "absolute",
  },
  rp18000stripTypo: {
    color: Color.colorMediumslateblue_200,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
  },
  groupChildLayout1: {
    height: 31,
    width: 123,
    position: "absolute",
  },
  bestPriceTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    lineHeight: 25,
  },
  groupInnerLayout: {
    width: 8,
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_5xs,
    height: 5,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 165,
    position: "absolute",
  },
  wrapperLayout: {
    height: 25,
    top: 11,
  },
  beliLayout: {
    width: 112,
    position: "absolute",
  },
  tambahLayout: {
    width: 134,
    position: "absolute",
  },
  light: {
    top: 0,
    height: 812,
    width: 375,
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
  productPageChild: {
    top: 339,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 8,
  },
  productPageItem: {
    left: 93,
    width: 189,
    height: 189,
    borderRadius: Border.br_7xs,
  },
  bodrexMigra: {
    top: 363,
    fontSize: FontSize.size_3xl,
  },
  diproduksiOlehKimia: {
    left: 1,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    lineHeight: 25,
    top: 0,
    position: "absolute",
  },
  negaraAsalIndonesia: {
    top: 23,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    lineHeight: 25,
    left: 0,
    position: "absolute",
  },
  diproduksiOlehKimiaFarmaPParent: {
    top: 396,
    width: 212,
    height: 48,
    left: 16,
    position: "absolute",
  },
  bestPrice: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    lineHeight: 25,
    left: 17,
    top: 453,
  },
  bodrexMigraMerupakan: {
    top: 520,
    fontSize: FontSize.size_3xs,
    lineHeight: 21,
    textAlign: "justify",
    width: 343,
    height: 207,
    left: 16,
    position: "absolute",
  },
  deskripsi: {
    top: 494,
    fontSize: FontSize.size_base,
  },
  rp18000strip: {
    left: 78,
    fontSize: FontSize.size_lg,
    top: 453,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 16,
    backgroundColor: "#b8ffb7",
    left: 0,
    top: 0,
  },
  healthcareProduct: {
    top: 3,
    left: 10,
    color: Color.colorGreen,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  rectangleParent: {
    top: 357,
    left: 236,
  },
  groupItem: {
    backgroundColor: Color.colorGray_300,
    width: 22,
    borderRadius: Border.br_5xs,
    height: 5,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    left: 26,
  },
  rectangleView: {
    left: 38,
  },
  rectangleGroup: {
    top: 313,
    left: 165,
    width: 46,
    height: 5,
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.colorMediumslateblue_200,
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
  },
  beliSekarang: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    width: 112,
    left: 0,
    top: 0,
  },
  beliSekarangWrapper: {
    left: 27,
    width: 112,
    position: "absolute",
  },
  rectangleContainer: {
    left: 0,
    top: 0,
  },
  productPageInner: {
    top: 731,
    width: 165,
    left: 16,
  },
  groupChild2: {
    borderStyle: "solid",
    borderColor: Color.colorMediumslateblue_200,
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
    width: 165,
  },
  tambahKeKeranjang: {
    fontSize: FontSize.size_smi,
    color: Color.colorMediumslateblue_200,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 25,
    left: 0,
    top: 0,
  },
  tambahKeKeranjangWrapper: {
    height: 25,
    top: 11,
    left: 16,
  },
  groupPressable: {
    left: 194,
    top: 731,
    width: 165,
  },
  groupIcon: {
    height: "2.41%",
    width: "5.87%",
    top: "7.32%",
    right: "4.53%",
    bottom: "90.27%",
    left: "89.6%",
    position: "absolute",
  },
  bodrexMigraRev2Icon: {
    left: 77,
    width: 222,
    height: 178,
  },
  productPage: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default ProductPage;
