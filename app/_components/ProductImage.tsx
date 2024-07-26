import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import {
  ImageBackground,
  Pressable,
  View,
  Text,
  StyleSheet,
} from "react-native";

const cloud = new Cloudinary({
  cloud: {
    cloudName: "your-cloud-name",
  },
});
type Props = {
  name: string | undefined;
  location: string | undefined;
  url: string | undefined;
};

export const ProductImage = (props: Props) => {
  const { name, location, url } = props;
  //   const imageUrl = cloud
  //     .image(url)
  //     .resize(thumbnail().width(500).height(500).gravity(focusOn()))
  //     .roundCorners(byRadius(20))
  //     .toURL();
  //   console.log({ imageUrl });

  return (
    <ImageBackground
      source={{ uri: url }}
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
        <Link href={`/`}>
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
          <Text style={styles.name}>{name}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Ionicons name="location" color={"white"} />
            <Text style={styles.location}>{location}</Text>
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
            source={{ uri: url }}
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
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    maxWidth: 400,
    height: 500,

    borderRadius: 30,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
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
  backAndwishListButton: {
    width: 44,
    height: 44,
    borderRadius: 100,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center",
  },
});
