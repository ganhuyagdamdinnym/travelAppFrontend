import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export const NotiAndSeti = () => {
  return (
    <View style={{ flexDirection: "row", gap: 4 }}>
      <Ionicons name="notifications" size={24} />
      <Ionicons name="settings" size={24} />
    </View>
  );
};
