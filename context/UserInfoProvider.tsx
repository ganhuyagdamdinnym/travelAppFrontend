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
import { useGetUserInfoLazyQuery, useGetUserInfoQuery } from "@/generated";
import { useToken } from "./tokenProvider";

type Props = {
  children: ReactNode;
};
type UserData = {
  email?: string | null;
  name?: string | null;
  emergencyPhone?: string | null;
  currency?: string | null;
  favorates?: Array<string | null> | null;
  gender?: string | null;
  profileImageUrl?: string | null;
  point?: number | null;
  phoneNumber?: string | null;
  payment?: Array<string | null> | null;
};

type ContextType = {
  user: UserData | null;
};

const UserInfoContext = createContext<ContextType>({} as ContextType);

export const useUserInfo = () => {
  return useContext(UserInfoContext);
};

const UserInfoProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [getToken, { data }] = useGetUserInfoLazyQuery();

  //console.log("user", data?.getUserInfo);
  const handlerToken = async () => {
    const token = await AsyncStorage.getItem("token");
    //  console.log("token", token);
    if (token) {
      getToken({
        variables: {
          input: {
            token: token,
          },
        },
      });
    }
  };
  useEffect(() => {
    if (data) {
      setUser(data?.getUserInfo);
    }
  }, [data]);
  useEffect(() => {
    handlerToken();
  }, []);
  return (
    <UserInfoContext.Provider value={{ user }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
