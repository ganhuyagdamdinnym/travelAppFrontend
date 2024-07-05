import { StyleSheet } from "react-native";

export const LoginStyle = StyleSheet.create({
  bodyContainer: {
    backgroundColor: "blue",
    height: "100%",
    width: "100%",
  },
  LoginContainer: {
    width: "100%",
    height: 720,
    backgroundColor: "#F9F9F9",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flexDirection: "column",
    paddingVertical: 30,
    paddingHorizontal: 25,
    gap: 30,
  },
  TextHeader: {
    width: 200,
    height: 80,
    gap: 14,
  },
  inputContainer: {
    width: "100%",
    gap: 12,
  },
  Input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#959595",
    borderRadius: 20,
    padding: 10,
  },
  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  buttonText: {
    color: "#F9F9F9",
    fontWeight: "700",
  },
  buttonParents: {
    width: "100%",
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
  },
  googleButton: {
    width: 70,
    height: 50,
    borderWidth: 0.5,
    borderColor: "#959595",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
