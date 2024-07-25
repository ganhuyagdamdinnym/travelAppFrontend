import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useAddPaymentMutation } from "@/generated";
import { useState } from "react";
import { useUserInfo } from "@/context/UserInfoProvider";

export const AddBank = () => {
  const [addPaymentMutation, { loading, error }] = useAddPaymentMutation();
  const { user } = useUserInfo();
  const [bankName, setBankName] = useState<string>("");
  const handlerAddPayment = () => {
    const input = {
      bankName: bankName,
      email: user?.email,
    };
    console.log("d", input);
    if (bankName !== "") {
      try {
        addPaymentMutation({
          variables: { input: input },
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setBankName("Хаан банк")}>
        <Image
          source={require("../image/khanBank.png")}
          style={{ width: 32, height: 32 }}
        />
      </Pressable>
      <Pressable onPress={() => setBankName("Төрийн банк")}>
        <Image
          source={require("../image/toriinBank.png")}
          style={{ width: 32, height: 32 }}
        />
      </Pressable>
      <Pressable onPress={() => setBankName("ХХ банк")}>
        <Image
          source={require("../image/hudaldaaHB.png")}
          style={{ width: 32, height: 32 }}
        />
      </Pressable>
      <Pressable onPress={handlerAddPayment} style={styles.addButton}>
        <Text
          style={{
            fontWeight: "500",
            color: "#F9F9F9",
            fontSize: 20,
            lineHeight: 26,
          }}
        >
          Add Bank
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 370,
    width: "100%",
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    height: 500,
    borderWidth: 1,
    borderColor: "#AFAFAF",
    borderRadius: 20,
    position: "absolute",
    backgroundColor: "#F9F9F9",
    bottom: 200,
    zIndex: 1,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
  },
  addButton: {
    position: "absolute",
    bottom: 50,
    width: 300,
    height: 50,
    backgroundColor: "#1A8EEA",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
