import { CaretLeft } from "phosphor-react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Spotify from "../../assets/Spotify.svg";
import union1 from "../../assets/Union-1.png";
import union from "../../assets/Union.png";
import image from "../../assets/image2.png";

export function Logon() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBackButton}>
          <CaretLeft size={24} color="#DDDDDD" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Spotify width={235} height={71} />
        <Text style={styles.contentTextTitle}>Enjoy listening to music</Text>
        <Text style={styles.contentTextSubTitle}>
          Spotify is a proprietary Swedish audio streaming and media services
          provider
        </Text>
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.buttonRegisterText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonRegisterText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image style={{ position: "absolute", top: 410 }} source={image} />
      <Image style={{ position: "absolute", left: 220 }} source={union} />
      <Image
        style={{ position: "absolute", left: 230, bottom: -2 }}
        source={union1}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1B1B",
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 30,
  },
  headerBackButton: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    width: "100%",
    marginTop: 120,
    paddingHorizontal: 50,
    position: "absolute",
  },
  contentTextTitle: {
    color: "#F2F2F2",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 35,
    textTransform: "capitalize",
    marginTop: 55,
  },
  contentTextSubTitle: {
    color: "#A0A0A0",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 25,
    textTransform: "capitalize",
    marginTop: 21,
    textAlign: "center",
  },
  containerButtons: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  buttonRegister: {
    width: 147,
    height: 73,
    backgroundColor: "#42C83C",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogin: {
    width: 147,
    height: 73,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRegisterText: {
    color: "#FFFFFF",
    lineHeight: 26,
    fontWeight: "700",
    fontSize: 19,
  },
});
