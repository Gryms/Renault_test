import React from "react";
import { StyleSheet, Text, KeyboardAvoidingView } from "react-native";

import { Input, Button, ErrorText } from "../components/Form";

import { useLoginFormState } from "./SignIn.smart";

export default SignIn = ({ navigation }) => {
  const { username, password, submit } = useLoginFormState({ navigation });

  let usernameErrorMsg;
  let passwordErrorMsg;

  if (submit.value && !username.valid) {
    usernameErrorMsg = "Invalid username.";
  }

  if (submit.value && !password.valid) {
    passwordErrorMsg = "Invalid password.";
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <Input
        label="Username"
        placeholder="User"
        onChangeText={username.set}
        error={submit.value && usernameErrorMsg}
        testID="SignIn.usernameInput"
      />
      <Input
        label="Password"
        placeholder="******"
        secureTextEntry
        onChangeText={password.set}
        error={submit.value && passwordErrorMsg}
        testID="SignIn.passwordInput"
      />
      <ErrorText messages={[usernameErrorMsg, passwordErrorMsg]} />
      <Button testID="SignIn.Button" text="Login" onPress={submit.set} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  headerText: {
    color: "#353031",
    fontWeight: "bold",
    fontSize: 34,
    marginBottom: 10,
  },
});
