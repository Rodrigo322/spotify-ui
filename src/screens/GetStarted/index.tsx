import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import bille from "../../assets/bille.png";
import Spotify from "../../assets/Spotify.svg";

export default function GetStarted() {
  return (
    <View style={styles.container}>
      <Image style={{ position: "absolute" }} source={bille} />
      <Spotify style={{ marginTop: 37 }} width={196} height={59} />

      <View style={{ top: 450, alignItems: "center", paddingHorizontal: 53 }}>
        <Text
          style={{
            color: "#DADADA",
            fontSize: 25,
            lineHeight: 33,
            fontWeight: "700",
          }}
        >
          Enjoy listening to music
        </Text>
        <Text
          style={{
            color: "#DADADA",
            fontSize: 17,
            lineHeight: 22,
            fontWeight: "400",
            textAlign: "center",
            marginTop: 21,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim
          purus sed phasellus. Cursus ornare id scelerisque aliquam.
        </Text>
        <TouchableOpacity
          style={{
            width: 329,
            height: 92,
            backgroundColor: "#42C83C",
            borderRadius: 30,
            marginTop: 37,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#F6F6F6",
              fontSize: 22,
              lineHeight: 29,
              fontWeight: "700",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            Get started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0C0C",
    alignItems: "center",
  },
});
