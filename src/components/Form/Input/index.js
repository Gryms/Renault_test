import React from "react";
import { Text, View, TextInput } from "react-native";

import styles from "./styles";

const Input = ({ label, error, ...props }) => {
  const containerStyles = [styles.inputContainer];
  if (error) {
    containerStyles.push(styles.inputContainerError);
  }

  return (
    <View style={containerStyles}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.row}>
        <TextInput autoCapitalize="none" style={styles.input} {...props} />
      </View>
    </View>
  );
};

export default Input;
