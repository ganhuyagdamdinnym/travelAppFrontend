import React, { useState } from "react";
import { View, Text, Pressable, TextInput, Image } from "react-native";
import { LoginStyle } from "../styles/loginStyles";
import { useCreateUserMutation } from "@/generated";

type Props = {
  loginStat: boolean;
  setLoginStat: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SignUp = (props: Props) => {
  const [createUser, { data, loading, error }] = useCreateUserMutation();
  const { loginStat, setLoginStat } = props;
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handlerSignUp = async () => {
    const input = {
      name,
      email,
      password,
    };
    try {
      await createUser({
        variables: { input: input },
      });
    } catch (err) {
      console.log(err);
    }
  };
  const onChangeName = (name: string) => {
    setName(name);
    console.log(name);
  };
  const onChangeEmail = (email: string) => {
    setEmail(email);
    console.log(email);
  };
  const onChangePassword = (password: string) => {
    setPassword(password);
  };
  return (
    <View style={LoginStyle.LoginContainer}>
      <View style={LoginStyle.TextHeader}>
        <Text style={{ fontWeight: "700", fontSize: 32 }}>Sign Up</Text>
        <Text>Create an account,It`s free</Text>
      </View>
      <View style={LoginStyle.inputContainer}>
        <Text>Name</Text>
        <TextInput
          onChangeText={onChangeName}
          value={name}
          style={LoginStyle.Input}
        />
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
      </View>
      <Pressable style={LoginStyle.button} onPress={() => handlerSignUp()}>
        <Text style={LoginStyle.buttonText}>Sign Up</Text>
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
        <Text onPress={() => setLoginStat(true)} style={{ color: "black" }}>
          Sign In
        </Text>
      </View>
    </View>
  );
};
