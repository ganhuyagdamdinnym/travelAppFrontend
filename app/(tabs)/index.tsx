import { Link } from "expo-router";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
  const [text, setText] = useState<string>();
  const [inputActive, setInputActive] = useState<boolean>(false);

  const onChangeText = (text: string) => {
    setText(text);
  };
  return (
    <View style={styles.home}>
      {inputActive ? (
        <TextInput
          onChangeText={onChangeText}
          value={text}
          autoFocus
          onBlur={() => setInputActive(false)}
          style={{
            width: 200,
            height: 50,
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
      ) : (
        <Pressable onPress={() => setInputActive(true)}>
          <Icon name="search" />
        </Pressable>
      )}

      <View style={styles.outer}>
        <Image
          source={{
            uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS",
          }}
          style={styles.red}
        />
        <LinearGradient
          colors={["#ffffff00", "#ffffff00", "#000"]}
          style={styles.blue}
        />
        <View style={styles.green}></View>
      </View>

      <Text>Hello from home</Text>
      <Link href="/anime/1" style={{ height: 40, backgroundColor: "pink" }}>
        Anime 1
      </Link>
      <Link href="/anime/2" style={{ height: 40, backgroundColor: "aqua" }}>
        Anime 2
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 1000,
  },
  outer: {
    // position: "relative",
    position: "static",
  },
  red: {
    height: 120,
    width: 120,
  },
  green: {
    backgroundColor: "green",
    height: 100,
    width: 100,
  },
  blue: {
    height: 120,
    width: 120,
    position: "absolute",
  },
});
