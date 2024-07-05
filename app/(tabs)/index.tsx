import { Link, router } from "expo-router";
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
import { homeStyle } from "../styles/homeStyle";
import { NotiAndSeti } from "../_components/NotifcationAndSetButton";
import { Location } from "../_components/Location";
import { Search } from "../_components/Search";
import { PopularNearby } from "../_components/PopularNearby";
// const push = async () => {
//   router.replace("/login");
// };
// useEffect(() => {
//   push();
// }, []);
export default function HomeScreen() {
  return (
    <View style={homeStyle.bodyProvider}>
      <View style={homeStyle.locationAndSettingsParents}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Location />
          <NotiAndSeti />
        </View>
        <Search />
      </View>
      <PopularNearby />
    </View>
  );
}
