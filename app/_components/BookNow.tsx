import { router } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

type Props = {
  ticketPrice: number;
  productId: string | undefined;
};

export const BookNow = (props: Props) => {
  const { ticketPrice, productId } = props;
  return (
    <View style={styles.bookNow}>
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 28,
            lineHeight: 42,
            color: "#F9F9F9",
          }}
        >
          ${ticketPrice}
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 26,
            fontWeight: "400",
            color: "#F9F9F9",
          }}
        >
          /pax
        </Text>
      </View>
      <Pressable
        onPress={() => router.replace(`/payment/?id=${productId}`)}
        style={styles.button}
      >
        <Text style={styles.text}>Book Now</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  bookNow: {
    position: "absolute",
    backgroundColor: "#1A1A1A",
    width: "100%",
    height: 100,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  button: {
    width: 170,
    height: 56,
    borderRadius: 30,
    backgroundColor: "#1A8EEA",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 30,
    color: "#F9F9F9",
  },
});
