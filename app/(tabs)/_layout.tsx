import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { Icon } from "react-native-vector-icons/Icon";
import { Ionicons } from "@expo/vector-icons";
import { TabBarIcon } from "@/components/TabbarIcon";
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
