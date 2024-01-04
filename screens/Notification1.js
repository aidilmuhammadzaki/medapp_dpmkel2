import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <Pressable
        style={[styles.group3687, styles.group3687Position]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={styles.notification1}>Notification</Text>
        <Image
          style={[styles.group1156Icon, styles.group1156IconLayout]}
          contentFit="cover"
          source={require("../assets/btn-back.png")}
        />
      </Pressable>
      <Image
        style={[styles.group1156Icon1, styles.group1156IconLayout]}
        contentFit="cover"
        source={require("../assets/btn-back.png")}
      />
      <Image
        style={[styles.group1156Icon1, styles.group1156IconLayout]}
        contentFit="cover"
        source={require("../assets/btn-back.png")}
      />
      <View style={styles.notificationChild} />
      <Text style={styles.weKnowThat}>
        Kita tahu bahwa — untuk anak-anak DAN orang dewasa — pembelajaran akan
        paling efektif jika
      </Text>
      <Text style={styles.dAgo}>Aug 12, 2020 at 12:08 PM</Text>
      <Text style={[styles.dAgo1, styles.agoTypo]}>
        Aug 12, 2020 at 12:08 PM
      </Text>
      <Text style={[styles.dAgo2, styles.agoTypo]}>
        Aug 12, 2020 at 12:08 PM
      </Text>
      <Text style={[styles.dAgo3, styles.agoTypo]}>
        Aug 12, 2020 at 12:08 PM
      </Text>
      <Text style={[styles.dAgo4, styles.agoTypo]}>
        Aug 12, 2020 at 12:08 PM
      </Text>
      <Image
        style={[styles.path2Icon, styles.path2IconLayout]}
        contentFit="cover"
        source={require("../assets/path-2.png")}
      />
      <Image
        style={[styles.path3Icon, styles.path2IconLayout]}
        contentFit="cover"
        source={require("../assets/path-2.png")}
      />
      <Image
        style={[styles.path2Copy2, styles.path2IconLayout]}
        contentFit="cover"
        source={require("../assets/path-2.png")}
      />
      <Text style={[styles.theFutureOf, styles.withThisInTypo]}>
        Masa depan pembelajaran profesional adalah pengalaman komunal yang
        mendalam
      </Text>
      <Text style={[styles.technologyShouldSe, styles.withThisInTypo]}>
        Teknologi harus melayani, bukan mendorong, pedagogi. Sekolah sering
        berdiskusi
      </Text>
      <Text style={[styles.withThisIn, styles.withThisInTypo]}>
        Dengan pemikiran ini, Global Online Academy menciptakan Desain
        Pembelajaran Campuran
      </Text>
      <Image
        style={[styles.path2Copy, styles.path2IconLayout]}
        contentFit="cover"
        source={require("../assets/path-2.png")}
      />
      <Image
        style={[styles.path2Copy1, styles.path2IconLayout]}
        contentFit="cover"
        source={require("../assets/path-2.png")}
      />
      <Text style={[styles.peerLearningWorks, styles.withThisInTypo]}>
        Pembelajaran sejawat berhasil. Dengan membangun komunitas pembelajaran
        pribadi yang kuat keduanya
      </Text>
      <Image
        style={styles.notificationIcons}
        contentFit="cover"
        source={require("../assets/notification-icons.png")}
      />
      <Image
        style={styles.notificationItem}
        contentFit="cover"
        source={require("../assets/ellipse-406.png")}
      />
      <Text style={styles.broadcomCorp}>Clear all</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  group3687Position: {
    top: 18,
    left: 24,
  },
  group1156IconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  agoTypo: {
    letterSpacing: 0,
    color: Color.colorGray_600,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.overpassRegular,
    left: 56,
    textAlign: "left",
    position: "absolute",
  },
  path2IconLayout: {
    height: 2,
    width: 375,
    left: 0,
    position: "absolute",
  },
  withThisInTypo: {
    opacity: 0.75,
    letterSpacing: 0,
    height: 34,
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_200,
    fontFamily: FontFamily.overpassRegular,
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    left: 56,
    textAlign: "left",
    position: "absolute",
  },
  notification1: {
    left: 40,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.overpassBold,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  group1156Icon: {
    left: 0,
    height: 24,
    width: 24,
    top: 0,
  },
  group3687: {
    width: 127,
    height: 25,
    left: 24,
    position: "absolute",
  },
  group1156Icon1: {
    left: 24,
    top: 18,
  },
  notificationChild: {
    top: 60,
    backgroundColor: "#fefefe",
    height: 93,
    width: 375,
    left: 0,
    position: "absolute",
  },
  weKnowThat: {
    top: 77,
    width: 296,
    height: 34,
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_200,
    fontFamily: FontFamily.overpassRegular,
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    left: 56,
    textAlign: "left",
    position: "absolute",
  },
  dAgo: {
    top: 118,
    color: Color.colorGray_600,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.overpassRegular,
    left: 56,
    textAlign: "left",
    position: "absolute",
  },
  dAgo1: {
    top: 210,
  },
  dAgo2: {
    top: 299,
  },
  dAgo3: {
    top: 391,
  },
  dAgo4: {
    top: 495,
  },
  path2Icon: {
    top: 151,
  },
  path3Icon: {
    top: 59,
  },
  path2Copy2: {
    top: 243,
  },
  theFutureOf: {
    top: 169,
    width: 277,
    opacity: 0.75,
  },
  technologyShouldSe: {
    top: 353,
    width: 277,
    opacity: 0.75,
  },
  withThisIn: {
    top: 261,
    width: 277,
    opacity: 0.75,
  },
  path2Copy: {
    top: 427,
  },
  path2Copy1: {
    top: 335,
  },
  peerLearningWorks: {
    top: 445,
    width: 314,
  },
  notificationIcons: {
    top: 80,
    width: 16,
    height: 383,
    left: 24,
    position: "absolute",
  },
  notificationItem: {
    top: 108,
    left: 351,
    width: 8,
    height: 8,
    position: "absolute",
  },
  broadcomCorp: {
    left: 309,
    fontWeight: "500",
    fontFamily: FontFamily.overpassMedium,
    color: "#1987fb",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    top: 18,
    position: "absolute",
  },
  notification: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Notification1;
