import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles"

const Button = ({ text, onPress, testID }) => {
  return (
    <TouchableOpacity testID={testID} onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button
