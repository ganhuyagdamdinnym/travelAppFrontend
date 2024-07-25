import { facilityInfo } from "@/utils/facilityInfo";
import { AntDesign } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";

type Props = {
  facilities: string[] | null | undefined;
};

type FacilitiesName =
  | "Transport"
  | "Simaksi"
  | "Coffee Break"
  | "Meals during trekking"
  | "Camping tents"
  | "Officially recognized mountain guide"
  | "Guide during trekking";
export const Facilities = (props: Props) => {
  // facilities=> { facilities }: { facilities: any[] }
  const { facilities } = props;
  if (facilities)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Facilities</Text>
          <AntDesign name="infocirlceo" size={14} color="black" />
        </View>
        <View style={styles.facilitiesContainer}>
          {facilities.map((facility, index) => {
            //Simaksi
            return (
              <View style={styles.facility} key={index}>
                {facilityInfo[facility as FacilitiesName]}
                <Text>{facility}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    width: 370,
    marginTop: 40,
    gap: 20,
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  facilitiesContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  facility: {
    borderWidth: 1,
    borderColor: "#AFAFAF",
    borderRadius: 10,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 9,
    paddingRight: 9,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
