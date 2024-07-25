import { View, Text, TextInput, Pressable, Image } from "react-native";
import { LoginStyle } from "./styles/loginStyles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { SignUp } from "./_components/SignUp";
import { SignIn } from "./_components/SignIn";
import { ForgotPassword } from "./_components/ForgotPassword";
import { VerificationCode } from "./_components/VerificationCode";
const Login = () => {
  const [loginStat, setLoginStat] = useState<boolean>(true);
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);
  const [isClickSendButton, setIsClickSendButton] = useState<boolean>(false);
  const [emailForSendingOTP, setEmailForSendingOTP] = useState<string>("");
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
            <VerificationCode emailForSendingOTP={emailForSendingOTP} />
          ) : (
            <ForgotPassword
              emailForSendingOTP={emailForSendingOTP}
              setEmailForSendingOTP={setEmailForSendingOTP}
              setIsClickSendButton={setIsClickSendButton}
            />
          )}
        </View>
      ) : (
        <View style={LoginStyle.bodyContainer}>
          {loginStat ? (
            <SignIn
              loginStat={loginStat}
              setLoginStat={setLoginStat}
              setIsForgotPassword={setIsForgotPassword}
            />
          ) : (
            <SignUp loginStat={loginStat} setLoginStat={setLoginStat} />
          )}
        </View>
      )}
    </View>
  );
};

export default Login;
