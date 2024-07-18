import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/TabbarIcon";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#1A1A1A",
          height: 95,
          paddingTop: 20,
          paddingBottom: 20,
          paddingHorizontal: 38,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={"#F9F9F9"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "heart" : "heart-outline"}
              color={"#F9F9F9"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: "Notification",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "notifications" : "notifications-outline"}
              color={"#F9F9F9"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={"#F9F9F9"}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
