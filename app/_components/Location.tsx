import { View, Text } from "react-native";

export const Location = () => {
  return (
    <View style={{ width: 133, height: 47 }}>
      <Text style={{ fontWeight: "400", fontSize: 12, lineHeight: 18 }}>
        Your location
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "500", lineHeight: 24 }}>
        Ulaanbaatar
      </Text>
    </View>
  );
};
