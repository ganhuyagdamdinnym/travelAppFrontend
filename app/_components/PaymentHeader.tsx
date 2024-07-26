import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Dispatch, SetStateAction } from "react";

type Props = {
  id: string | string[] | undefined;
  paymentStatus: string;
  setPaymentStatus: Dispatch<SetStateAction<string>>;
};

export const PaymentHeader = (props: Props) => {
  const { id, paymentStatus, setPaymentStatus } = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 70,
          marginLeft: 30,
        }}
      >
        <Link href={`product/${id}`}>
          <AntDesign name="left" size={24} color="black" />
        </Link>
        <View>
          <Text style={styles.paymentText}>Continue payment</Text>
          <Text>Order ID : 123456789</Text>
        </View>
      </View>
      <View
        style={{ marginTop: 20, marginLeft: 70, flexDirection: "row", gap: 14 }}
      >
        <View style={styles.methodsContainer}>
          <Pressable
            style={
              paymentStatus === "PaymentMethod" ? styles.round2 : styles.round
            }
            onPress={() => setPaymentStatus("PaymentMethod")}
          >
            <Text style={styles.number}>1</Text>
          </Pressable>
          <Text style={styles.text}>Payment Method</Text>
        </View>
        <View style={styles.methodsContainer}>
          <View
            style={paymentStatus === "Transfer" ? styles.round2 : styles.round}
          >
            <Text style={styles.number}>2</Text>
          </View>
          <Text style={styles.text}>Pay</Text>
        </View>
        <View style={styles.methodsContainer}>
          <View style={styles.round}>
            <Text style={styles.number}>3</Text>
          </View>
          <Text style={styles.text}>Done</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 180,
    backgroundColor: "#F9F9F9",
    shadowColor: "#000000", // Added quotes around color value
    shadowOffset: { width: 0, height: 2 }, // Example of shadow offset
    shadowOpacity: 0.25, // Example of shadow opacity
    shadowRadius: 3, // Example of shadow radius
    elevation: 5, // Android shadow elevation
  },
  paymentText: {
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 27,
  },
  round: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: "#959595",
    justifyContent: "center",
    alignItems: "center",
  },
  round2: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: "#1A8EEA",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    color: "#959595",
  },
  methodsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  number: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    color: "#C4C0C0",
  },
});
