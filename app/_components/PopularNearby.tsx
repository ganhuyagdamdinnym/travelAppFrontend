import { View, Text, Image, ScrollView } from "react-native";
import { useProduct } from "../../context/AllProductProvider";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export const PopularNearby = ({products}:any) => {

  console.log("dtatssWE", products);
  if(!products || products.length < 1){
    return <View><Text>Loading</Text>
    <Text>{products.toLocaleString()}</Text></View>
  }
  return (
    <View style={{ width: "100%", height: 330, marginLeft: 40, }}>
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
        <View style={{ flexDirection: "row", gap: 20, width: 400,paddingRight:20 }}>
          {products.map((e, index) => {
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
                <Link
                href={`product/${e._id}`}
                key={index}
        
              >
                <Image
                  style={{ width: 232, height: 195, borderRadius: 20 }}
                  source={{ uri: "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" }}
                />
                </Link>
                  <View style={{ width: 210, height:40, flexDirection: "row", justifyContent:"space-between" ,alignItems:"center" ,marginTop:15 }}>
                    <View style={{gap:4}}>
                    <Text
                      style={{
                        fontSize: 14,
                        lineHeight: 21,
                        fontWeight: "500",
                      }}
                    >
                      {e.name}
                    </Text>
                    <View style={{flexDirection:"row" , gap:2 ,alignItems:"center"}}>
                     <Ionicons name="location"/>
                    <Text style={{fontWeight:"300",fontSize:10,lineHeight:15}}>{e.location}</Text>
                    </View>
                    </View>
                    <View style={{width:40 ,height:20, marginRight:-10 ,flexDirection:"row", gap:2,alignItems:"center"}}>
                    <Ionicons name="star" color="#FFC300" />
                     <Text style={{lineHeight:18,fontWeight:"400",fontSize:12}}>{e.rating}</Text>
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
