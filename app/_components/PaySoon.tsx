import { View, Text, StyleSheet } from "react-native";
type Props = {
  name: string | undefined;
  date: string | undefined;
};

export const PaySoon = (props: Props) => {
  const { name, date } = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 24 }}>
          Pay soon
        </Text>
        <View></View>
      </View>
      <View
        style={{
          width: "100%",
          height: 56,
          borderWidth: 1,
          borderColor: "#959595",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <View style={{ gap: 5 }}>
          <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 24 }}>
            {name}
          </Text>
          <Text
            style={{
              fontWeight: "300",
              fontSize: 10,
              lineHeight: 15,
              marginLeft: 3,
            }}
          >
            {date}
          </Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    maxWidth: 370,
    height: 146,
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: "#F9F9F9",
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    padding: 20,
    justifyContent: "center",
    gap: 10,
  },
});
