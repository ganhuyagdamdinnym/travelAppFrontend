import { View, Text, TextInput, Pressable, Image } from "react-native";
import { LoginStyle } from "./styles/loginStyles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  const [loginStat, setLoginStat] = useState<boolean>(true);
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);
  const [isClickSendButton, setIsClickSendButton] = useState<boolean>(false);

  const HandleForgotPassword = () => {
    setIsClickSendButton(true);
  };
  const HandleBackButton = () => {
    if (isClickSendButton == true) {
      setIsClickSendButton(false);
    } else if (isForgotPassword == true) {
      setIsForgotPassword(false);
    }
  };
  return (
    <View style={LoginStyle.bodyContainer}>
      {isForgotPassword ? (
        <View style={LoginStyle.bodyContainer}>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              marginTop: 4,
              marginLeft: 4,
            }}
            onPress={() => HandleBackButton()}
          >
            <FontAwesomeIcon icon={faLeftLong} size={24} color="white" />
            <Text style={{ color: "white", fontWeight: "700" }}>Back</Text>
          </Pressable>
          {isClickSendButton ? (
            <View style={LoginStyle.LoginContainer}>
              <View style={LoginStyle.TextHeader}>
                <Text style={{ fontWeight: "700", fontSize: 32, width: 400 }}>
                  OTP Verification
                </Text>
                <Text style={{ width: 700 }}>
                  Please enter a code from email
                </Text>
              </View>
              <View style={LoginStyle.inputContainer}>
                <Text>Your code</Text>
                <TextInput style={LoginStyle.Input} />
              </View>
              <Pressable style={LoginStyle.button}>
                <Text
                  onPress={() => HandleForgotPassword()}
                  style={LoginStyle.buttonText}
                >
                  Verification
                </Text>
              </Pressable>
            </View>
          ) : (
            <View style={LoginStyle.LoginContainer}>
              <View style={LoginStyle.TextHeader}>
                <Text style={{ fontWeight: "700", fontSize: 32, width: 400 }}>
                  Forgot password
                </Text>
                <Text style={{ width: 700 }}>
                  Please enter your email for sending OTP
                </Text>
              </View>
              <View style={LoginStyle.inputContainer}>
                <Text>Email</Text>
                <TextInput style={LoginStyle.Input} />
              </View>
              <Pressable style={LoginStyle.button}>
                <Text
                  onPress={() => HandleForgotPassword()}
                  style={LoginStyle.buttonText}
                >
                  Send
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      ) : (
        <View style={LoginStyle.bodyContainer}>
          {loginStat ? (
            <View style={LoginStyle.LoginContainer}>
              <View style={LoginStyle.TextHeader}>
                <Text style={{ fontWeight: "700", fontSize: 32 }}>Sign In</Text>
                <Text>Please enter a valid account</Text>
              </View>
              <View style={LoginStyle.inputContainer}>
                <Text>Email</Text>
                <TextInput style={LoginStyle.Input} />
                <Text>Password</Text>
                <TextInput style={LoginStyle.Input} />
                <Text
                  onPress={() => setIsForgotPassword(true)}
                  style={{ width: "100%", textAlign: "right" }}
                >
                  Forgot Password
                </Text>
              </View>
              <Pressable style={LoginStyle.button}>
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
                    source={require("./image/googlr2.png")}
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
                <Text
                  style={{ color: "#959595", fontWeight: "400", fontSize: 14 }}
                >
                  Don`t have account?
                </Text>
                <Text
                  onPress={() => setLoginStat(false)}
                  style={{ color: "black" }}
                >
                  Sign Up
                </Text>
              </View>
            </View>
          ) : (
            <View style={LoginStyle.LoginContainer}>
              <View style={LoginStyle.TextHeader}>
                <Text style={{ fontWeight: "700", fontSize: 32 }}>Sign Up</Text>
                <Text>Create an account,It`s free</Text>
              </View>
              <View style={LoginStyle.inputContainer}>
                <Text>Name</Text>
                <TextInput style={LoginStyle.Input} />
                <Text>Email</Text>
                <TextInput style={LoginStyle.Input} />
                <Text>Password</Text>
                <TextInput style={LoginStyle.Input} />
              </View>
              <Pressable style={LoginStyle.button}>
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
                    source={require("./image/googlr2.png")}
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
                <Text
                  style={{ color: "#959595", fontWeight: "400", fontSize: 14 }}
                >
                  Don`t have account?
                </Text>
                <Text
                  onPress={() => setLoginStat(true)}
                  style={{ color: "black" }}
                >
                  Sign Up
                </Text>
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Login;
