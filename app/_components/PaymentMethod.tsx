import { View, Text, StyleSheet, Pressable } from "react-native";
import { useUserInfo } from "@/context/UserInfoProvider";
import { bankInfo } from "@/utils/bankInfo";
import { Dispatch, SetStateAction, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  payBank: string | null;
  setPayBank: Dispatch<SetStateAction<string | null>>;
};
type BankName = "Хаан банк" | "Төрийн банк" | "ХХ банк";
export const PaymentMethod = (props: Props) => {
  const { payBank, setPayBank } = props;
  const { user } = useUserInfo();

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 24 }}>
        Payment Method
      </Text>
      {user?.payment?.map((bank, index) => {
        return (
          <View key={index} style={styles.payments}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              {bankInfo[bank as BankName]}
              <Text style={styles.text}>{bank}</Text>
            </View>
            <Pressable onPress={() => setPayBank(bank)} style={styles.round}>
              {payBank == bank ? (
                <Entypo name="check" size={12} color="#959595" />
              ) : null}
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    maxWidth: 370,
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    padding: 15,
    borderRadius: 20,
    marginTop: 30,
    gap: 20,
  },
  payments: {
    width: "100%",
    height: 56,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: "#959595",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
  },
  round: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#1A1A1A",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
