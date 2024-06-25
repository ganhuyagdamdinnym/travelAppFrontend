import { Link } from "expo-router";
import { Image, StyleSheet, Platform, View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.home}>
      <Text>Hello from home</Text>
      <Link href="/anime/1" style={{ height: 40, backgroundColor: "pink" }}>
        Anime 1
      </Link>
      <Link href="/anime/2" style={{ height: 40, backgroundColor: "aqua" }}>
        Anime 2
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 1000,
  },
});
