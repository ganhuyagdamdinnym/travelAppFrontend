import { View, Text } from "react-native";
export const Recommended = () => {
  return (
    <View style={{ width: "100%", height: 330, marginLeft: 40 }}>
      <View
        style={{
          width: "90%",
          height: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            lineHeight: 30,
            color: "black",
          }}
        >
          Recommended
        </Text>
        <Text style={{ lineHeight: 18, fontSize: 12, fontWeight: "500" }}>
          See all
        </Text>
      </View>
    </View>
  );
};
