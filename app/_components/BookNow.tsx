import { router } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
type Props = {
  ticketPrice: number;
  productId: string | undefined;
  ticketQuantity: number;
};

export const BookNow = (props: Props) => {
  const { ticketPrice, productId, ticketQuantity } = props;
  const handlerJumptoPayment = async () => {
    await AsyncStorage.setItem("ticketQuantity", ticketQuantity.toString());

    router.replace(`/payment/?id=${productId}`);
  };
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
      <Pressable onPress={handlerJumptoPayment} style={styles.button}>
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
    paddingBottom: 17,
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
