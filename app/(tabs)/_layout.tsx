import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="anime/[slug]"
        options={{
          title: "Anime",
          header: () => (
            <Text style={{ height: 20, backgroundColor: "green" }}>hello</Text>
          ),
        }}
      />
    </Tabs>
  );
}
