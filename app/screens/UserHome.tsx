import { View, Text, StyleSheet } from "react-native";
//import { UserHead } from "../_components/userProfile/UserHead";
import { Order } from "../_components/userProfile/Order";
import { UserPaymentMethod } from "../_components/userProfile/UserPaymentMethod";
import { UserCouponAndVoucher } from "../_components/userProfile/UserCouponAndVoucher";
import { SupportCenter } from "../_components/userProfile/SupportCenter";
import { Settings } from "../_components/userProfile/Settings";
import { useState } from "react";
import { UserHead } from "../_components/userProfile/UserHead";

export default function UserHome({ navigation }: { navigation: any }) {
  const [ScreenName, setScreenName] = useState<string>("");
  const handlerPushToPayment = () => {
    navigation.navigate("UserPayment");
  };
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <UserHead />
        <Order />
        <UserPaymentMethod handlerPushToPayment={handlerPushToPayment} />
        <UserCouponAndVoucher />
        <SupportCenter />
        <Settings />s
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1A8EEA",
    alignItems: "center",
  },
  bodyContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F9F9F9",
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: 120,
    alignItems: "center",
    gap: 30,
  },
});
