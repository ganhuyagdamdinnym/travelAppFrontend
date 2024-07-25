import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AddBank } from "../_components/AddBank";
import { useState } from "react";

const UserPayment = () => {
  const [isClickPlusButton, setIsClickPlusButton] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.HeadText}>Payment Method</Text>
        <View style={styles.addBankContainer}>
          <View>
            <Text style={styles.bankText}>Mobile Banking BCA</Text>
          </View>
          <Ionicons
            onPress={() => setIsClickPlusButton(true)}
            name="add"
            color={"#1A1A1A"}
            size={24}
          />
        </View>
      </View>
      {isClickPlusButton ? <AddBank /> : null}
      {isClickPlusButton ? (
        <Pressable
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#1A8EEA",
            position: "absolute",
            zIndex: 0,
          }}
          onPress={() => setIsClickPlusButton(false)}
        ></Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  HeadText: {
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 27,
    width: "90%",
    maxWidth: 370,
  },
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
    gap: 20,
    paddingTop: 40,
  },
  addBankContainer: {
    width: "90%",
    maxWidth: 370,
    height: 54,
    borderWidth: 1,
    borderColor: "#AFAFAF",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  bankText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default UserPayment;
