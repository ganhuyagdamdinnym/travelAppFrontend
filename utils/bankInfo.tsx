import { Text, View, Image } from "react-native";
import { test } from "@/app/image/medku";
import Fontisto from "@expo/vector-icons/Fontisto";

export const bankInfo = {
  "Хаан банк": (
    <Image
      source={require("@/app/image/khanBank.png")}
      style={{ width: 32, height: 32 }}
    />
  ),
  "Төрийн банк": (
    <Image
      source={require("@/app/image/toriinBank.png")}
      style={{ width: 32, height: 32 }}
    />
  ),
  "ХХ банк": (
    <Image
      source={require("@/app/image/hudaldaaHB.png")}
      style={{ width: 32, height: 32 }}
    />
  ),
};
