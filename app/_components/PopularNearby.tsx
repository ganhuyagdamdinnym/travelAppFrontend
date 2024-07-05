import { View, Text, Image, ScrollView } from "react-native";
import { useProduct } from "../../context/AllProductProvider";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
export const PopularNearby = () => {
  const { products, loading, error, refetch } = useProduct();
  console.log("dtatssWE", products);
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
          Popular Nearby
        </Text>
        <Text style={{ lineHeight: 18, fontSize: 12, fontWeight: "500" }}>
          See all
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", gap: 20, width: 400 }}>
          {products?.map((e, index) => {
            return (
              <View
                style={{
                  width: 240,
                  height: 280,
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: "#AFAFAF",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: 4,
                }}
                key={index}
              >
                <Image
                  style={{ width: 232, height: 195, borderRadius: 20 }}
                  source={{ uri: e.imageUrl }}
                />

                <View>
                  <View style={{ width: 180, flexDirection: "column", gap: 4 }}>
                    <Text
                      style={{
                        fontSize: 15,
                        lineHeight: 21,
                        fontWeight: "500",
                      }}
                    >
                      {e.name}
                    </Text>
                    <Text>{e.location}</Text>
                  </View>
                  <View></View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
