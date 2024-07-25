import { View, Text, ScrollView } from "react-native";
import { PaymentHeader } from "./_components/PaymentHeader";
import { PaySoon } from "./_components/PaySoon";
import { PaymentMethod } from "./_components/PaymentMethod";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { Voucher } from "./_components/Voucher";
import { useEffect, useState } from "react";
import { Transfer } from "./_components/Transfer";
import { useGet1ProductQuery } from "@/generated";
import { Pressable } from "react-native";

const payment = () => {
  const [paymentStatus, setPaymentStatus] = useState<string>("PaymentMethod");
  const [payBank, setPayBank] = useState<string | null>(null);

  const { id } = useGlobalSearchParams();
  if (!id || (Array.isArray(id) && id.length === 0)) {
    return <Text>No valid id parameter found</Text>;
  }
  const idString = Array.isArray(id) ? id[0] : id;

  const { data, loading, error } = useGet1ProductQuery({
    variables: {
      input: {
        id: idString,
      },
    },
  });
  const handlePaymentStatus = () => {
    if (paymentStatus == "PaymentMethod") {
      if (payBank !== null) {
        setPaymentStatus("Transfer");
      } else {
        alert("bankaa songo");
      }
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        gap: 10,
        paddingBottom: 10,
      }}
    >
      <PaymentHeader id={id} paymentStatus={paymentStatus} />
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <PaySoon
            name={data?.get1Product?.name}
            date={data?.get1Product?.endAt}
          />
          {paymentStatus == "PaymentMethod" ? (
            <PaymentMethod payBank={payBank} setPayBank={setPayBank} />
          ) : paymentStatus == "Transfer" ? (
            <Transfer payBank={payBank} />
          ) : null}
          {paymentStatus == "PaymentMethod" ? (
            <Voucher />
          ) : paymentStatus == "Transfer" ? null : null}

          {paymentStatus == "PaymentMethod" ? (
            <Pressable
              onPress={handlePaymentStatus}
              style={{
                width: "90%",
                maxWidth: 370,
                height: 59,
                backgroundColor: "#1A1A1A",
                marginBottom: 30,
                marginTop: 30,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#F9F9F9",
                  fontWeight: "700",
                  fontSize: 14,
                  lineHeight: 21,
                }}
              >
                Next
              </Text>
            </Pressable>
          ) : paymentStatus == "Transfer" ? (
            <View
              style={{
                width: "100%",
                height: 96,
                backgroundColor: "#F9F9F9",
                marginBottom: 30,
                marginTop: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                shadowOpacity: 0.25,
                shadowRadius: 3,
                elevation: 5,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <View>
                <Text></Text>
                <Text></Text>
              </View>
              <Pressable
                style={{
                  width: 230,
                  height: 57,
                  borderRadius: 30,
                  backgroundColor: "#1A1A1A",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#F9F9F9",
                    fontWeight: "700",
                    fontSize: 14,
                    lineHeight: 21,
                  }}
                >
                  Pay Now
                </Text>
              </Pressable>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default payment;
