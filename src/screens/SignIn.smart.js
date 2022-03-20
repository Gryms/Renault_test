import React, { useState } from "react";

export const useLoginFormState = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  let isUsernameValid = false;
  let isPasswordValid = false;

  /*
  Here we use a default value only for the purpose of this example,
  in reality it should be replaced with a proper validation of a username depending on the rules we would like to applicate.
  */
  if (username === "username") {
    isUsernameValid = true;
  }

  /*
  Same as for the username, this validation is only for the purpose of the exercice and should allow something else than "password".
  Password validation should use rules such as a minumum number of characters, usage of capitalized characters, special symbols etc...
  */
  if (password === "password") {
    isPasswordValid = true;
  }

  return {
    username: {
      value: username,
      set: (username) => {
        setUsername(username)
        setSubmit(false)
      },
      valid: isUsernameValid,
    },
    password: {
      value: password,
      set: (password) => {
        setPassword(password)
        setSubmit(false)
      },
      valid: isPasswordValid,
    },
    submit: {
      value: submit,
      set: () => {
        setSubmit(true);

        if (isUsernameValid && isPasswordValid) {
          fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
              username,
              password,
            }),
          })
            .then((response) => response.json())
            .then(() => {
              navigation.push("Home");
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
      },
    },
  };
};
