import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen() {
  const { slug } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Anime Information: {slug} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
