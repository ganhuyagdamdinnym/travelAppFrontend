import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useGet1ProductQuery } from "@/generated";
import { ProductImage } from "../_components/ProductImage";
import { Facilities } from "../_components/Facilities";
import { BookNow } from "../_components/BookNow";
import { AntDesign } from "@expo/vector-icons";
import { Information } from "../_components/Information";
import { Rating } from "../_components/Rating";

const DetailProduct = () => {
  const currentRef = useRef(null);
  const { id } = useLocalSearchParams();
  const [ticketQuantity, setTicketQuantity] = useState<number>(1);
  const [ticketPrice, setTicketPrice] = useState<number>(0);
  const [firstPrice, setFirstPrice] = useState<number>(0);
  const [infoStatus, setInfoStatus] = useState<string>("");

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

  const handlerPrice = () => {
    if (data?.get1Product?.price) {
      setTicketPrice(data?.get1Product?.price);
      console.log("djio", data?.get1Product?.price);
      setFirstPrice(data?.get1Product?.price);
    }
  };

  const handlerBack = () => {
    setInfoStatus("");
  };
  const handlerAddTicket = () => {
    setTicketQuantity(ticketQuantity + 1);

    setTicketPrice(firstPrice * (ticketQuantity + 1));
  };

  useEffect(() => {
    handlerPrice();
  }, [data]);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <ScrollView
          style={{ marginBottom: infoStatus ? null : 105 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              paddingLeft: 5,
              paddingRight: 5,
            }}
          >
            <ProductImage
              name={data?.get1Product?.name}
              location={data?.get1Product?.location}
              url={data?.get1Product?.imageUrl}
            />
            <Rating rating={data?.get1Product?.rating} />
            <View style={{ width: 370, gap: 10, marginTop: 20 }}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16, lineHeight: 24 }}>
                  Description
                </Text>
                <AntDesign
                  onPress={() => setInfoStatus("information")}
                  name="infocirlceo"
                  size={14}
                  color="black"
                />
              </View>
              <Text style={{ fontSize: 10, fontWeight: "300", lineHeight: 15 }}>
                {data?.get1Product?.description}
              </Text>
            </View>
            <View style={{ width: 370, gap: 10, marginTop: 40 }}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16, lineHeight: 24 }}>
                  Choose Date
                </Text>
                <AntDesign name="infocirlceo" size={14} color="black" />
              </View>
              <View>
                <Pressable>
                  <Text style={styles.dateButton}>
                    {data?.get1Product?.startAt} - {data?.get1Product?.endAt}
                  </Text>
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
                    ${ticketPrice}
                    <Text style={{ fontSize: 10, fontWeight: "300" }}>
                      /pax
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    width: 85,
                    height: 24,
                    flexDirection: "row",
                    gap: 15,
                  }}
                >
                  <Pressable
                    onPress={() => {
                      if (ticketQuantity > 0)
                        setTicketQuantity(ticketQuantity - 1);
                    }}
                    style={styles.plusAndMinusButton}
                  >
                    <Text style={{ fontSize: 15 }}>-</Text>
                  </Pressable>
                  <Text style={{ fontSize: 20, lineHeight: 26 }}>
                    {ticketQuantity}
                  </Text>
                  <Pressable
                    onPress={handlerAddTicket}
                    style={styles.plusAndMinusButton}
                  >
                    <Text style={{ fontSize: 15 }}>+</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <Facilities facilities={data?.get1Product?.facilities} />
          </View>
        </ScrollView>
      )}
      <BookNow
        ticketPrice={ticketPrice}
        productId={data?.get1Product?._id}
        ticketQuantity={ticketQuantity}
      />
      {infoStatus == "information" ? (
        <Information
          information={data?.get1Product?.informations}
          currentRef={currentRef}
        />
      ) : null}
      {infoStatus == "" ? null : (
        <Pressable
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 0,
          }}
          onPress={() => handlerBack()}
        ></Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 12,
    marginTop: 15,
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
  dateButton: {
    maxWidth: 160,
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailProduct;
