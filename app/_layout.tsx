import "react-native-reanimated";
import { useFonts } from "expo-font";
import { Stack, useLocalSearchParams } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import ApolloProviders from "../context/ApolloProvider";
import ProductProvider from "../context/AllProductProvider";
export default function RootLayout() {
  const path = useLocalSearchParams();
  console.log("path:", path);

  return (
    <ApolloProviders>
      <ProductProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="product/[id]" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ProductProvider>
    </ApolloProviders>
  );
}
