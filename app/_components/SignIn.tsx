import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginStyle } from "../styles/loginStyles";
import { useState } from "react";
import { useLoginUserMutation } from "@/generated";
import { router } from "expo-router";

type Props = {
  loginStat: boolean;
  setLoginStat: React.Dispatch<React.SetStateAction<boolean>>;
  setIsForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SignIn = (props: Props) => {
  const [loginUser, { data }] = useLoginUserMutation();
  const { setLoginStat, setIsForgotPassword } = props;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onChangeEmail = (email: string) => {
    setEmail(email);
  };
  const onChangePassword = (password: string) => {
    setPassword(password);
  };

  const handlerSignIn = async () => {
    const loginInput = {
      email,
      password,
    };
    try {
      const res = await loginUser({ variables: { input: loginInput } });
      console.log("res", res.data?.loginUser);
      if (res.data?.loginUser) {
        const token = res.data?.loginUser;
        try {
          await AsyncStorage.setItem("token", token);
          router.replace("/");
        } catch (e) {}
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={LoginStyle.LoginContainer}>
      <View style={LoginStyle.TextHeader}>
        <Text style={{ fontWeight: "700", fontSize: 32 }}>Sign In</Text>
        <Text>Please enter a valid account</Text>
      </View>
      <View style={LoginStyle.inputContainer}>
        <Text>Email</Text>
        <TextInput
          onChangeText={onChangeEmail}
          value={email}
          style={LoginStyle.Input}
        />
        <Text>Password</Text>
        <TextInput
          onChangeText={onChangePassword}
          value={password}
          style={LoginStyle.Input}
        />
        <Text
          onPress={() => setIsForgotPassword(true)}
          style={{ width: "100%", textAlign: "right" }}
        >
          Forgot Password
        </Text>
      </View>
      <Pressable onPress={handlerSignIn} style={LoginStyle.button}>
        <Text style={LoginStyle.buttonText}>Sign in</Text>
      </Pressable>
      <View
        style={{
          width: "100%",
          height: 21,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <View
          style={{ width: 150, height: 2, backgroundColor: "black" }}
        ></View>
        <Text>OR</Text>
        <View
          style={{ width: 150, height: 2, backgroundColor: "black" }}
        ></View>
      </View>
      <View style={LoginStyle.buttonParents}>
        <Pressable style={LoginStyle.googleButton}>
          <Image
            source={require("../image/googlr2.png")}
            style={{ width: 32, height: 32 }}
          />
        </Pressable>
        <Pressable style={LoginStyle.googleButton}></Pressable>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#959595", fontWeight: "400", fontSize: 14 }}>
          Don`t have account?
        </Text>
        <Text onPress={() => setLoginStat(false)} style={{ color: "black" }}>
          Sign up
        </Text>
      </View>
    </View>
  );
};
