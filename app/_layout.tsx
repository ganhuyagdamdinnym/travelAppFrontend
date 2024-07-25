import "react-native-reanimated";
import { useFonts } from "expo-font";
import { Stack, useLocalSearchParams } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
// import TokenProvider from "../context/tokenProvider";
import TokenProvider from "../context/tokenProvider";
import ApolloProviders from "../context/ApolloProvider";
import ProductProvider from "../context/AllProductProvider";
import UserInfoProvider from "@/context/UserInfoProvider";
export default function RootLayout() {
  const path = useLocalSearchParams();
  console.log("path:", path);

  return (
    <ApolloProviders>
      <TokenProvider>
        <ProductProvider>
          <UserInfoProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="login" options={{ headerShown: false }} />
              <Stack.Screen name="payment" options={{ headerShown: false }} />
              <Stack.Screen
                name="product/[id]"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="+not-found" />
            </Stack>
          </UserInfoProvider>
        </ProductProvider>
      </TokenProvider>
    </ApolloProviders>
  );
}
