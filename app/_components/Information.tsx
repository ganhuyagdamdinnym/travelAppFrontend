import { Text, View, StyleSheet } from "react-native";
type Props = {
  information:
    | {
        note?: string | null;
        runDown?: Array<{
          description?: string | null;
          title?: string | null;
        }> | null;
      }
    | undefined;
  currentRef: React.MutableRefObject<null>;
};

export const Information = (props: Props) => {
  const { information, currentRef } = props;
  return (
    <View ref={currentRef} style={styles.container}>
      <View>
        <Text style={styles.headerText}>Rundown</Text>
        <View
          style={{
            gap: 30,
            marginTop: 30,
            width: "100%",
          }}
        >
          {information?.runDown?.map((item, index) => {
            return (
              <View key={index} style={{ gap: 15 }}>
                <View style={{ flexDirection: "row", gap: 2 }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", lineHeight: 21 }}
                  >
                    {index + 1}.
                  </Text>
                  <Text
                    style={{ fontSize: 14, fontWeight: "500", lineHeight: 21 }}
                  >
                    {item.title}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", gap: 2 }}>
                  <Text
                    style={{
                      fontWeight: "500",
                      lineHeight: 21,
                      fontSize: 14,
                      marginTop: -3,
                    }}
                  >
                    .
                  </Text>
                  <Text
                    style={{ fontWeight: "400", lineHeight: 21, fontSize: 14 }}
                  >
                    {item.description}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    backgroundColor: "#F9F9F9",
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: "absolute",
    bottom: 0,
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    zIndex: 1,
  },
  headerText: {
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 48,
    color: "black",
  },
});
