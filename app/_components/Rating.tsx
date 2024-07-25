import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  rating: number | undefined;
};

export const Rating = (props: Props) => {
  const { rating } = props;
  return (
    <View
      style={{
        width: 350,
        height: 70,
        gap: 5,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        paddingVertical: 8,
      }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.headText}>RATING</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Ionicons name="star" color={"#EFD700"} />
          <Text style={styles.bottomText}>{rating}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headText}>TYPE</Text>
        <Text style={styles.bottomText}>Open Trip</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headText}>ESTIMATE</Text>
        <Text style={styles.bottomText}>3D 2N</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headText}>VIA</Text>
        <Text style={styles.bottomText}>Ranupane</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headText: {
    color: "#959595",
    fontSize: 12,
    lineHeight: 18,
  },
  bottomText: {
    color: "black",
    fontSize: 16,
    lineHeight: 24,
  },
  textContainer: {
    padding: 8,
    borderRightWidth: 1,
    borderRightColor: "#959595",
  },
});
