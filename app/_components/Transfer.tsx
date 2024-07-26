import { View, Text, StyleSheet } from "react-native";
import { bankInfo } from "@/utils/bankInfo";

import Feather from "@expo/vector-icons/Feather";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

type Props = {
  payBank: string | null;
  allPrice: number;
};
type BankName = "Хаан банк" | "Төрийн банк" | "ХХ банк";

export const Transfer = (props: Props) => {
  const { payBank, allPrice } = props;
  //const [price, setPrice] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 24 }}>
        Transfer to
      </Text>
      <View
        style={{
          width: "100%",
          height: 103,
          borderRadius: 10,
          borderColor: "#959595",
          borderWidth: 1,
          marginTop: 15,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 15,
          paddingRight: 15,
          justifyContent: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          {bankInfo[payBank as BankName]}
          <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 24 }}>
            {payBank}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              lineHeight: 24,
              marginLeft: 3,
            }}
          >
            7 8001 0821 4748 4998
          </Text>
          <Feather name="copy" size={24} color="#292D32" />
        </View>
      </View>
      <Text
        style={{
          fontWeight: "500",
          fontSize: 16,
          lineHeight: 24,
          marginTop: 10,
        }}
      >
        Payment Total
      </Text>
      <View
        style={{
          width: "100%",
          height: 56,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#959595",
          marginTop: 15,
          backgroundColor: "#F9F9F9",
          justifyContent: "center",
          paddingLeft: 20,
          shadowOpacity: 0.25,
          shadowRadius: 3,
          elevation: 5,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 20, lineHeight: 30 }}>
          ${allPrice}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#F9F9F9",
    maxWidth: 370,
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    padding: 20,
    borderRadius: 20,
    marginTop: 30,
  },
});
