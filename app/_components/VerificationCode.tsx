import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { LoginStyle } from "../styles/loginStyles";
import { useVerificationCodeMutation } from "@/generated";
import { useChangePasswordMutation } from "@/generated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

type Props = {
  emailForSendingOTP: string;
};

export const VerificationCode = ({ emailForSendingOTP }: Props) => {
  const [handlerSendCodeToBackEnd, { data }] = useVerificationCodeMutation();
  const [handlerChangePassword, {}] = useChangePasswordMutation();
  const [code, setCode] = useState<number | null>(null);
  const [newPass, setNewPass] = useState<string>("");
  const [changePassStatus, setChangePassStatus] = useState<boolean>(false);
  const handlerVerificationCode = () => {
    if (code !== null) {
      const handlerSendCodeToBackEndInput = {
        email: emailForSendingOTP,
        code: code,
      };
      try {
        handlerSendCodeToBackEnd({
          variables: { input: handlerSendCodeToBackEndInput },
        })
          .then((res) => {
            if (res.data?.verificationCode === "successful") {
              setChangePassStatus(true);
            } else {
              alert("your code is wrong");
            }
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (err) {
        console.error("Error in sending code to backend:", err);
      }
    }
  };
  const handlerPassword = () => {
    const ChangePassInput = {
      email: emailForSendingOTP,
      newPassword: newPass,
    };
    try {
      const res = handlerChangePassword({
        variables: { input: ChangePassInput },
      }).then((res) => {
        const token = res.data?.changePassword;
        if (token) AsyncStorage.setItem("token", token);
        router.replace("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeCode = (newCode: string) => {
    const numericCode = parseInt(newCode, 10);
    if (!isNaN(numericCode)) {
      setCode(numericCode);
    } else {
      setCode(null);
    }
  };
  const onChangeNewPass = (newPass: string) => {
    setNewPass(newPass);
  };

  return (
    <View style={LoginStyle.LoginContainer}>
      {changePassStatus ? (
        <View style={LoginStyle.TextHeader}>
          <Text style={{ fontWeight: "700", fontSize: 32 }}>New password</Text>
          <Text style={{ width: 400 }}>Please enter your new password</Text>
        </View>
      ) : (
        <View style={LoginStyle.TextHeader}>
          <Text style={{ fontWeight: "700", fontSize: 32 }}>
            OTP Verification
          </Text>
          <Text style={{ width: 400 }}>
            Please enter the code from your email
          </Text>
        </View>
      )}
      {changePassStatus ? (
        <View style={{ width: "100%", gap: 12, marginTop: 30 }}>
          <Text>Your new password</Text>
          <TextInput
            onChangeText={onChangeNewPass}
            value={newPass}
            style={LoginStyle.Input}
          />
        </View>
      ) : (
        <View style={{ width: "100%", gap: 12, marginTop: 30 }}>
          <Text>Your code</Text>
          <TextInput
            onChangeText={onChangeCode}
            value={code !== null ? code.toString() : ""}
            keyboardType="numeric"
            style={LoginStyle.Input}
          />
        </View>
      )}
      {changePassStatus ? (
        <Pressable onPress={handlerPassword} style={LoginStyle.button}>
          <Text style={LoginStyle.buttonText}>New password</Text>
        </Pressable>
      ) : (
        <Pressable onPress={handlerVerificationCode} style={LoginStyle.button}>
          <Text style={LoginStyle.buttonText}>Verification</Text>
        </Pressable>
      )}
    </View>
  );
};
