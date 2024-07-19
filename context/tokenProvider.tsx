"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
type Props = {
  children: ReactNode;
};

type ContextType = {
  token: string;
  setToken: (token: any) => void;
};

const TokenContext = createContext<ContextType>({} as ContextType);

export const useToken = () => {
  return useContext(TokenContext);
};

const TokenProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string>("");
  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      router.replace("/login");
    }
  };
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
