import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useUserInfo } from "@/context/UserInfoProvider";
export const Voucher = () => {
  const { user } = useUserInfo();
  const [voucherCode, setVoucherCode] = useState<string>("");
  const onChangeCode = (voucherCode: string) => {
    setVoucherCode(voucherCode);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 24 }}>
        Use the voucher
      </Text>
      <View style={styles.enterCodePartContainer}>
        <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 24 }}>
          User voucher
        </Text>
        <TextInput
          style={{
            width: "100%",
            height: 45,
            borderWidth: 1,
            borderColor: "#959595",
            paddingLeft: 24,
            paddingTop: 15,
            paddingRight: 24,
            paddingBottom: 15,
            borderRadius: 20,
          }}
          onChangeText={onChangeCode}
          value={voucherCode}
          placeholder="enter code..."
        />
      </View>
      <View style={styles.userPointContainer}>
        <View>
          <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 24 }}>
            Use your point
          </Text>
        </View>
        <Text style={{ fontWeight: "400", fontSize: 12, lineHeight: 18 }}>
          Your point:{user?.point}
        </Text>
      </View>
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
    padding: 20,
    borderRadius: 20,
    marginTop: 30,
    gap: 10,
  },
  enterCodePartContainer: {
    width: 330,
    height: 130,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#959595",
    padding: 15,
    gap: 15,
  },
  userPointContainer: {
    width: 330,
    height: 80,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#959595",
    padding: 15,
  },
});
