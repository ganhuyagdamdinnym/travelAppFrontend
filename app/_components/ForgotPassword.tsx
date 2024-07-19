import { View, Text, TextInput, Pressable } from "react-native";
import { LoginStyle } from "../styles/loginStyles";

type Props = {
  emailForSendingOTP: string;
  setEmailForSendingOTP: React.Dispatch<React.SetStateAction<string>>;
  setIsClickSendButton: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ForgotPassword = (props: Props) => {
  const { setIsClickSendButton, emailForSendingOTP, setEmailForSendingOTP } =
    props;
  const onChangeEmailForSendingOTP = (emailForSendingOTP: string) => {
    setEmailForSendingOTP(emailForSendingOTP);
  };
  return (
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
        <TextInput
          onChangeText={onChangeEmailForSendingOTP}
          style={LoginStyle.Input}
        />
      </View>
      <Pressable style={LoginStyle.button}>
        <Text
          onPress={() => setIsClickSendButton(true)}
          style={LoginStyle.buttonText}
        >
          Send
        </Text>
      </Pressable>
    </View>
  );
};
