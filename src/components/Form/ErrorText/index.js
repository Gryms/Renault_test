import React from "react";
import {
  Text,
  View,
  TextInput,
} from "react-native";

import styles from "./styles"


const ErrorText = ({ messages = [] }) => {
  const displayMessages = messages.filter((msg) => msg !== undefined);

  return (
    <View style={styles.errorContainer}>
      {
        displayMessages.map((msg) => (
          <Text key={msg} style={styles.errorText}>
            {msg}
          </Text>
        ))
      }
    </View>
  );
};

export default ErrorText
