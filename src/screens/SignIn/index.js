import React, { useReducer, useEffect } from "react";
import { Text, KeyboardAvoidingView } from "react-native";

import { Input, Button, ErrorText } from "../../components/Form";
import styles from "./styles";

const fetchData = async (username, password, navigation) => {
  const rawResult = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  })
  const result = await rawResult.json();
  navigation.push("Home");

  // If it was a real API, we would do that before going to the Home screen.

  // if (result.code === 200) {
  //  navigation.push("Home");
  // } else {
  //   console.error("error", result.error);
  // }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "usernameChange":
      return { ...state, username: action.payload, submit: false };
    case "passwordChange":
      return { ...state, password: action.payload, submit: false };
    case "submit":
      if (state.usernameValid && state.passwordValid) {
        fetchData(state.username, state.password, action.navigation)
      }
      return { ...state, submit: true };
    /*
    Here we use a default value only for the purpose of this example,
    in reality it should be replaced with a proper validation of a username depending on the rules we would like to applicate.
    */
    case "usernameValid":
      return { ...state, usernameValid: state.username === "username" ? true : false };
    /*
    Same as for the username, this validation is only for the purpose of the exercice and should allow something else than "password".
    Password validation should use rules such as a minumum number of characters, usage of capitalized characters, special symbols etc...
    */
    case "passwordValid":
      return { ...state, passwordValid: state.password === "password" ? true : false };
    default:
      throw new Error("wrong action on dispatch SignIn.");
  }
}


const SignIn = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, {
    username: "",
    password: "",
    submit: false,
    usernameValid: false,
    passwordValid: false
  });

  useEffect(() => {
    dispatch({ type: "usernameValid" });
  }, [state.username]);
  useEffect(() => {
    dispatch({ type: "passwordValid" });
  }, [state.password]);

  let usernameErrorMsg;
  let passwordErrorMsg;

  if (state.submit && !state.usernameValid) {
    usernameErrorMsg = "Invalid username.";
  }

  if (state.submit && !state.passwordValid) {
    passwordErrorMsg = "Invalid password.";
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <Input
        label="Username"
        placeholder="User"
        onChangeText={(newText) => dispatch({ type: "usernameChange", payload: newText })}
        error={state.submit && usernameErrorMsg}
        testID="SignIn.usernameInput"
      />
      <Input
        label="Password"
        placeholder="******"
        secureTextEntry
        onChangeText={(newText) => dispatch({ type: "passwordChange", payload: newText })}
        error={state.submit && passwordErrorMsg}
        testID="SignIn.passwordInput"
      />
      <ErrorText messages={[usernameErrorMsg, passwordErrorMsg]} />
      <Button testID="SignIn.Button" text="Login" onPress={() => dispatch({ type: "submit", navigation: navigation })} />
    </KeyboardAvoidingView>
  );
};

export default SignIn;
