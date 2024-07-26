import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useProduct } from "../../context/AllProductProvider";

import { useGetAllTravelQuery } from "@/generated";
type RunDown = {
  title: string;
  description: string;
};

type InfoType = {
  runDown: Array<RunDown>;
  note: string;
};
type ProductType = {
  __typename?: string;
  _id: string;
  name: string;
  description: string | null;
  imageUrl: string;
  duration: string;
  endAt: string;
  facilities?: Array<string> | null;
  location: string;
  price: number;
  rating: number | null;
  startAt: string;
  information?: InfoType;
};

export const PopularNearby = ({ products }: { products: ProductType[] }) => {
  if (!products || products.length < 1) {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Nearby</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {products.map((e, index) => (
          <View style={styles.card} key={index}>
            <Link href={`product/${e._id}`}>
              <View style={{ width: 232, height: 195 }}>
                <Image style={styles.image} source={{ uri: e.imageUrl }} />
              </View>
            </Link>
            <View style={styles.info}>
              <View style={styles.textContainer}>
                <Text style={styles.productName}>{e.name}</Text>
                <View style={styles.locationContainer}>
                  <Ionicons name="location" />
                  <Text style={styles.location}>{e.location}</Text>
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" color="#FFC300" />
                <Text style={styles.rating}>{e.rating}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 330,
    marginLeft: 40,
    paddingRight: 30,
  },
  header: {
    width: "90%",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },
  seeAll: {
    lineHeight: 18,
    fontSize: 12,
    fontWeight: "500",
  },
  scrollViewContent: {
    flexDirection: "row",
  },
  card: {
    width: 240,
    height: 280,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#AFAFAF",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 4,
    marginRight: 20,
  },
  image: {
    width: 232,
    height: 195,
    borderRadius: 20,
  },
  info: {
    width: 210,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  textContainer: {
    gap: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
  },
  locationContainer: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  location: {
    fontWeight: "300",
    fontSize: 10,
  },
  ratingContainer: {
    width: 40,
    height: 20,
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  rating: {
    fontSize: 12,
    fontWeight: "400",
  },
});
