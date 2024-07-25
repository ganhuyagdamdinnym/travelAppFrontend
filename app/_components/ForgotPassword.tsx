import { View, Text, TextInput, Pressable } from "react-native";
import { LoginStyle } from "../styles/loginStyles";
import { useSendCodeToEmailMutation } from "@/generated";
type Props = {
  emailForSendingOTP: string;
  setEmailForSendingOTP: React.Dispatch<React.SetStateAction<string>>;
  setIsClickSendButton: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ForgotPassword = (props: Props) => {
  const [handlerSendCode, { data }] = useSendCodeToEmailMutation();
  const { setIsClickSendButton, emailForSendingOTP, setEmailForSendingOTP } =
    props;
  const onChangeEmailForSendingOTP = (emailForSendingOTP: string) => {
    setEmailForSendingOTP(emailForSendingOTP);
  };
  const handlerSendButton = () => {
    const handlerSendCodeInput = {
      email: emailForSendingOTP,
    };
    try {
      const res = handlerSendCode({
        variables: { input: handlerSendCodeInput },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    setIsClickSendButton(true);
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
      <Pressable onPress={() => handlerSendButton()} style={LoginStyle.button}>
        <Text style={LoginStyle.buttonText}>Send</Text>
      </Pressable>
    </View>
  );
};
