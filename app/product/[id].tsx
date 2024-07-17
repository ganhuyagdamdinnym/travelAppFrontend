import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useGet1ProductQuery } from "@/generated";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const DetailProduct = () => {
  const { id } = useLocalSearchParams();
  const [ticketQuantity, setTicketQuantity] = useState<number>(1);
  if (!id || (Array.isArray(id) && id.length === 0)) {
    return <Text>No valid id parameter found</Text>;
  }

  const idString = Array.isArray(id) ? id[0] : id;

  const { data, loading, error } = useGet1ProductQuery({
    variables: {
      input: {
        id: idString,
      },
    },
  });

  console.log("Data:", data?.get1Product);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <ImageBackground
            source={{ uri: data?.get1Product?.imageUrl }}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            <View
              style={{
                width: 360,
                height: 80,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Link href={`(tabs)`}>
                <Pressable style={styles.backAndwishListButton}>
                  <Ionicons name="arrow-back" size={20} />
                </Pressable>
              </Link>
              <Pressable style={styles.backAndwishListButton}>
                <Ionicons name="heart" size={20} />
              </Pressable>
            </View>
            <View
              style={{
                width: 360,
                height: 80,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={styles.name}>{data?.get1Product?.name}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Ionicons name="location" color={"white"} />
                  <Text style={styles.location}>
                    {data?.get1Product?.location}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 2,
                  width: 84,
                  height: 84,
                  borderColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <ImageBackground
                  source={{ uri: data?.get1Product?.imageUrl }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <Text style={{ color: "white" }}>+5</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              width: 350,
              height: 70,
              gap: 5,
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
              paddingVertical: 8,
            }}
          >
            <View style={styles.textContainer}>
              <Text style={styles.headText}>RATING</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Ionicons name="star" color={"#EFD700"} />
                <Text style={styles.bottomText}>
                  {data?.get1Product?.rating}
                </Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headText}>TYPE</Text>
              <Text style={styles.bottomText}>Open Trip</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headText}>ESTIMATE</Text>
              <Text style={styles.bottomText}>3D 2N</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headText}>VIA</Text>
              <Text style={styles.bottomText}>Ranupane</Text>
            </View>
          </View>
          <View style={{ width: 370, gap: 10 }}>
            <Text style={{ fontSize: 16, lineHeight: 24 }}>Description</Text>
            <Text style={{ fontSize: 10, fontWeight: "300", lineHeight: 15 }}>
              {data?.get1Product?.description}
            </Text>
          </View>
          <View style={{ width: 370, gap: 10, marginTop: 15 }}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, lineHeight: 24 }}>Choose Date</Text>
              <Ionicons name="warning" color={"#959595"} size={16} />
            </View>
            <View>
              <Pressable style={styles.dateButton}>
                {data?.get1Product?.startAt} - {data?.get1Product?.endAt}
              </Pressable>
            </View>
          </View>
          <View style={styles.numberOfpax}>
            <View
              style={{
                width: 323,
                height: 58,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ height: "100%", width: 157, gap: 12 }}>
                <Text style={{ width: 157, fontSize: 16, lineHeight: 24 }}>
                  Number of pax
                </Text>
                <Text>
                  ${data?.get1Product?.price}
                  <Text style={{ fontSize: 10, fontWeight: "300" }}>/pax</Text>
                </Text>
              </View>
              <View
                style={{ width: 85, height: 24, flexDirection: "row", gap: 15 }}
              >
                <Pressable style={styles.plusAndMinusButton}>-</Pressable>
                <Text style={{ fontSize: 20, lineHeight: 26 }}>
                  {ticketQuantity}
                </Text>
                <Pressable style={styles.plusAndMinusButton}>+</Pressable>
              </View>
            </View>
          </View>
        </View>
      )}
      {/* <View style={styles.bookNow}> </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 12,
  },
  imageBackground: {
    width: 400,
    height: 500,
    borderRadius: 30,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  name: {
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 36,
    color: "white",
  },
  location: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    color: "white",
  },
  headText: {
    color: "#959595",
    fontSize: 12,
    lineHeight: 18,
  },
  bottomText: {
    color: "black",
    fontSize: 16,
    lineHeight: 24,
  },
  textContainer: {
    padding: 8,
    borderRightWidth: 1,
    borderRightColor: "#959595",
  },
  bookNow: {
    backgroundColor: "#1A1A1A",
    width: "100%",
    height: 100,
    bottom: 0,
  },
  dateButton: {
    width: 137,
    height: 33,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#AFAFAF",
    paddingHorizontal: 7,
    paddingVertical: 9,
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
  },
  numberOfpax: {
    width: 370,
    height: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#AFAFAF",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  plusAndMinusButton: {
    width: 24,
    height: 24,
    borderRadius: 30,
    borderWidth: 1,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  backAndwishListButton: {
    width: 44,
    height: 44,
    borderRadius: 100,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailProduct;
