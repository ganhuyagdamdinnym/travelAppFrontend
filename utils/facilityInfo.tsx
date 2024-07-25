import { Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const facilityInfo = {
  Transport: <FontAwesome5 name="shuttle-van" size={14} color="black" />,
  Simaksi: (
    <MaterialCommunityIcons
      name="ticket-confirmation-outline"
      size={14}
      color="black"
    />
  ),
  "Coffee Break": <Fontisto name="coffeescript" size={14} color="black" />,
  "Meals during trekking": (
    <FontAwesome6 name="bell-concierge" size={14} color="black" />
  ),
  "Camping tents": <FontAwesome6 name="tent" size={14} color="black" />,
  P3K: <FontAwesome5 name="first-aid" size={14} color="black" />,
  "Officially recognized mountain guide": (
    <FontAwesome6 name="mountain" size={14} color="black" />
  ),
  "Guide during trekking": (
    <FontAwesome name="map-signs" size={14} color="black" />
  ),
};
