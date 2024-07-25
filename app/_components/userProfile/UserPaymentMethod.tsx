import { View, Text, StyleSheet, Pressable } from "react-native";
type Props = {
  handlerPushToPayment: () => void;
};
export const UserPaymentMethod = (props: Props) => {
  const { handlerPushToPayment } = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 14, lineHeight: 21 }}>
          Payment Method
        </Text>
        <Pressable onPress={handlerPushToPayment}>
          <Text style={{ fontWeight: "300", fontSize: 10, lineHeight: 15 }}>
            See all
          </Text>
        </Pressable>
      </View>
      <View style={{ width: 210 }}>
        <Text style={{ fontWeight: "300", fontSize: 10, lineHeight: 15 }}>
          Save your preferred payment method for smoother transactions
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    maxWidth: 370,
    height: 99,
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#AFAFAF",
    borderRadius: 10,
    padding: 15,
    gap: 10,
  },
});
