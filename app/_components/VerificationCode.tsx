import { View, Text, Pressable, TextInput } from "react-native";
import { LoginStyle } from "../styles/loginStyles";
type Props = {
  emailForSendingOTP: string;
  setEmailForSendingOTP: React.Dispatch<React.SetStateAction<string>>;
};
export const VerificationCode = (props: Props) => {
  const { emailForSendingOTP } = props;
  const handlerVerificationCode = () => {
    alert(emailForSendingOTP);
  };
  return (
    <View style={LoginStyle.LoginContainer}>
      <View style={LoginStyle.TextHeader}>
        <Text style={{ fontWeight: "700", fontSize: 32, width: 400 }}>
          OTP Verification
        </Text>
        <Text style={{ width: 700 }}>Please enter a code from email</Text>
      </View>
      <View style={LoginStyle.inputContainer}>
        <Text>Your code</Text>
        <TextInput style={LoginStyle.Input} />
      </View>
      <Pressable onPress={handlerVerificationCode} style={LoginStyle.button}>
        <Text style={LoginStyle.buttonText}>Verification</Text>
      </Pressable>
    </View>
  );
};
