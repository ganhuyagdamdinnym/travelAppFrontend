import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Search = () => {
  return (
    <View
      style={{
        width: 350,
        height: 45,
        gap: 6,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center"
      }}
    >
      <Ionicons size={24} name="search" />
      <TextInput placeholder="Search" style={{ width: 300, height: "100%",padding:4 }} />
    </View>
  );
};
