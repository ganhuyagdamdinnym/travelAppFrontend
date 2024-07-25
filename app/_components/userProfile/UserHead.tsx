import { View, Text, StyleSheet, Pressable } from "react-native";
import { useUserInfo } from "@/context/UserInfoProvider";
import { Ionicons } from "@expo/vector-icons";
export const UserHead = () => {
  const { user } = useUserInfo();
  console.log("user in UserHead", user);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {user?.profileImageUrl == null ? (
          <View
            style={{
              borderWidth: 2,
              borderColor: "#C4C0C0",
              borderRadius: 100,
              padding: 5,
            }}
          >
            <Ionicons name="person" color={"#C4C0C0"} size={50} />
          </View>
        ) : (
          <View></View>
        )}
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 24 }}>
            {user?.name}
          </Text>
          <Pressable>
            <Text
              style={{
                color: "#707070",
                fontWeight: "300",
                fontSize: 10,
                lineHeight: 15,
              }}
            >
              Edith Profile
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          width: 116,
          height: 49,
          borderRadius: 10,
          backgroundColor: "#1A8EEA",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 15,
            height: 15,
            borderWidth: 1.5,
            borderRadius: 100,
            borderColor: "#F9F9F9",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 5,
              height: 5,
              borderWidth: 1,
              borderRadius: 100,
              borderColor: "#F9F9F9",
            }}
          ></View>
        </View>
        <View style={{ justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#F9F9F9",
              fontWeight: "300",
              fontSize: 10,
              lineHeight: 15,
            }}
          >
            Your Points
          </Text>
          <Text
            style={{
              color: "#F9F9F9",
              fontWeight: "500",
              fontSize: 12,
              lineHeight: 18,
            }}
          >
            0
          </Text>
        </View>
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
    height: 81,
    marginTop: -40,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
